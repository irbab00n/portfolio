module.exports.linear = (start, destination) => {
  let i = start;
  let scrollDown = start <= destination;
  let int = setInterval(() =>  {
    if (scrollDown) {
      window.scrollTo(0, i);
      i += 10;
      if (i >= destination) {
        clearInterval(int);
      }
    } else {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= destination) {
        clearInterval(int);
      }
    }
  }, 1);
};

module.exports.accelerate = (start, destination) => {
  clearInterval();
  let i = start;
  let originalGap = Math.abs(start - destination);
  let peaked = false;
  let scrollDown = start <= destination;

  let calculatePercentage = (i) => {
    let currentGap = Math.abs(i - destination);
    let remainder = originalGap - currentGap;
    let percentage = remainder / originalGap;
    return percentage;
  };

  let calculateCoefficient = (i) => {
      return  (2.17 - (3 * calculatePercentage(i)));
  };

  let int = setInterval(() => {
    if (scrollDown) {
      window.scrollTo(0, i);
      i += (10 * (1 + calculateCoefficient(i)));
      if (i >= destination) {
        clearInterval(int);
      }
    } else {
      window.scrollTo(0, i);
      i -= (10 * (1 + calculateCoefficient(i)));
      if (i <= destination) {
        clearInterval(int);
      }
    }
  }, 0.1);
}

// must update the speed while the start isn't half of the difference between itself and the destination