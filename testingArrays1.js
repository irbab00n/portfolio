var buildArray = (min, max) => {
  let array = [];
  let index = 0;
  for(let i = min; i <= max; i++) {
    array[index] = i;
    index++;
  }
  return array;
};

var linearPeakFinder = (array) => {
  let computeCount = 0; // -1
  let peak = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > peak) {
      peak = array[i];
    }
    computeCount += 1;
  }
  return {value: peak, calculations: computeCount};
};

var test = buildArray(1, 10000000);
linearPeakFinder(test);

var binarySearchFinder = (array, target) => {

  if (array.length === 1) {
    return array[0] === target ? true : false;
  }

  if (array.length === 2) {
    if (array[0] === target || array[1] === target) {
      return true;
    } else {
      return false;
    }
  }

  if (array.length % 2 === 1) {
    let mid = Math.floor(array.length / 2);
    let right = mid + 1;
    let left = mid - 1;
    if (array[mid] === target || array[left] === target || array[right] === target) {
      return true;
    } else {
      if (target > array[mid]) {
        return binarySearchFinder(array.slice(mid + 1), target);
      }
      if (target < array[mid]) {
        return binarySearchFinder(array.slice(0, mid), target);
      }
    }
  }

  if (array.length % 2 === 0) {
    let right = Math.floor(array.length / 2);
    let left = right - 1;
    if (array[left] === target || array[right] === target) {
      return true;
    } else {
      if (target > array[right]) {
        return binarySearchFinder(array.slice(right), target);
      }
      if (target < array[left]) {
        return binarySearchFinder(array.slice(0, right), target);
      }
    }
  }

};

let test = buildArray(1, 2);
let result = binarySearchFinder(test, 2);
console.log(result);
console.log('# of calculations', computeCount);
