module.exports = (size, element) => {
  let board = [];
  for (let i = 0; i < size; i+=2) {
    board.push(element);
    board.push('\\n');
  }
  return board;
};