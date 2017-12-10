module.exports = (y, target, calculationFunction, animations) => {
  let animation = calculationFunction(y, target) >= 600 ? animations.accelerate : animations.accelerate; // Defaulted to accelerate for now
  return () => animation(y, target);
}