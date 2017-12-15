var checkConditions = function() {
  if (arguments.length !== 2) {
    throw new RangeError('checkConditions requires 2 arguments only!');
  }
  return (arguments[0] && arguments[1]);
}