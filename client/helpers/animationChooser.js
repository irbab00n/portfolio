module.exports = (y, target, animations) => {
  let animation = Math.abs(y, target) >= 600 ? animations.accelerate : animations.accelerate; // Defaulted to accelerate for now
  return () => animation(y, target);
}