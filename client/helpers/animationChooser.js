module.exports = (y, target, calculationFunction, animations) => {
  let animation = calculationFunction(y, target) >= 600 ? animations.accelerate : animations.accelerate;
  return () => animation(y, target);
}