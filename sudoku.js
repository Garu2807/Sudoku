const { log } = require('console');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const b = boardString.split('');
  let size = 9;
  let subarray = [];
  for (let i = 0; i < Math.ceil(b.length / size); i++) {
    subarray[i] = b.slice(i * size, i * size + size);
  }
  return subarray;
}
console.log(solve(boardString))

function isSolved(board){

}

function prettyBoard(board){

}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
