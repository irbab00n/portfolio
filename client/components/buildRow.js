module.exports = (size, element) => {
  let row = [];
  for (let i = 0; i < size; i++) {
    row.push(element);
  }
  return row;
};