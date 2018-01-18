module.exports.linear = (start, destination) => {
  let i = start;
  let scrollDown = start <= destination;
  let int = setInterval(() =>  {
    if (scrollDown) {
      window.scrollTo(0, i);
      i += 10; // Incrementation based on visual testing
      if (i >= destination) {
        clearInterval(int);
      }
    } else {
      window.scrollTo(0, i);
      i -= 10; // Incrementation based on visual testing
      if (i <= destination) {
        clearInterval(int);
      }
    }
  }, 1);
};

const calculatePercentage = (i, destination, originalGap) => {
  let currentGap = Math.abs(i - destination);
  let remainder = originalGap - currentGap;
  let percentage = remainder / originalGap;
  return percentage;
};

const calculateCoefficient = (i, destination, originalGap) => {
    return  (Math.PI - (Math.PI * calculatePercentage(i, destination, originalGap))); // Percentage based on visual testing
};

module.exports.accelerate = (start, destination) => {
  clearInterval(int);
  let i = start;
  let originalGap = Math.abs(start - destination);
  if (originalGap <= 10) {
    return;
  } 
  let scrollDown = start <= destination; // True: Scroll Down, False: Scroll Up
  let int = setInterval(() => {
    if (scrollDown) {
      window.scrollTo(0, i);
      i += (9.8 * (1 + calculateCoefficient(i, destination, originalGap))); // Incrementation based on visual testing
      if (i >= destination) {
        clearInterval(int);
      }
    } else {
      window.scrollTo(0, i);
      i -= (9.8 * (1 + calculateCoefficient(i, destination, originalGap))); // Incrementation based on visual testing
      if (i <= destination) {
        clearInterval(int);
      }
    }
  }, 0.1);
}

// must update the speed while the start isn't half of the difference between itself and the destination