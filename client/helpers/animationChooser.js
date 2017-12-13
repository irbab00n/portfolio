module.exports = (y, target, calculationFunction, animations) => {
  let animation = calculationFunction(y, target) >= 600 ? animations.accelerate : animations.linear; // Defaulted to accelerate for now
  return () => animation(y, target);
}