module.exports = (currentY, targetY, calculationFunction, animations, thresholdTest) => {
  let animation = calculationFunction(
    thresholdTest(currentY, currentY) ? animations.accelerate : animations.accelerate; // Defaulted to accelerate for now
  return () => animation(currentYofThePage, targetYofThePage));
};