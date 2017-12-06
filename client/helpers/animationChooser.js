module.exports = (y, target, calculationFunction, animations) => {
  let animation = calculationFunction(y, target) >= 600 ? animations.accelerate : animations.linear;
  return () => animation(y, target);
}