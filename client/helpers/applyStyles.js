module.exports = function() {
  let res = {};
  for (let i = 0; i < arguments.length; ++i) {
    if (arguments[i]) {
      Object.assign(res, arguments[i]);
    }
  }
  return res;
  // return Object.assign({}, ...Array.prototype.slice.call(arguments));
};