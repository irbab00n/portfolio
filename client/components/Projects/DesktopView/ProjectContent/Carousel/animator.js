function buildReel(setStateFunction, onClickFunction) {

  var onClick = typeof onClickFunction === 'function' ? onClickFunction : () => {};
  var sliceIndex = typeof arguments[1] === 'object' ? 1 : 2;
  var slicedArgs = [...arguments].slice(sliceIndex);
  
  var recursiveBuilder = function(count) {
    if (count === slicedArgs.length - 1) {
      return (function() {
        setTimeout(function() {
          setStateFunction(slicedArgs[count].stateUpdates)
        }, slicedArgs[count].delay);
      });
    } else {
      let reel = recursiveBuilder(count + 1);
      return (function() {
        setTimeout(function() {
          setStateFunction(slicedArgs[count].stateUpdates, reel)
        }, slicedArgs[count].delay);
      });
    }
  };

  var firstFrame = function(stateUpdates) {
    let reel = recursiveBuilder(1);
    return function() {
      setStateFunction(stateUpdates, () => {
        onClick();
        reel();
      });
    }
  };

  return firstFrame(slicedArgs[0].stateUpdates);
};

module.exports.buildReel = buildReel;

module.exports.keyframe = class Keyframe {
  constructor(stateUpdates, delay) {
    this.stateUpdates = stateUpdates;
    this.delay = delay;
  }
};