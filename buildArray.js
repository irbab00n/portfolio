var buildArray = (start, finish) => {
  let array = [];
  let index = 0;
  for(let i = start; i <= finish; i++) {
    array[index] = i;
    index++;
  }
  return array;
};

// This function will take in a start and a finish index representing the beginning and end of a range of values.

// It will output an array that will contain that range of numbers in ascending order.