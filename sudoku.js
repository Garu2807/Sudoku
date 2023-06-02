/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {

  let array = // записывается переведенный в двумерный массив пазл
  const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let fillFig;

  let squareChecker = [];
  let rowChecker = [];
  let columnChecker = [];

  // Обрабатываем полученный массив
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      
      if (array[i][j] == 0){
        // Проверка-запись ряда
        for (let m = 0; m < 8; m++) {
            if (array[i][m] != 0){
              rowChecker += array[i][m];
            }
        };
        // Проверка-запись колонки
        for (let m = 0; m < 8; m++) {
          if (array[m][j] != 0){
            rowChecker += array[m][j];
          }
        };
        if( ((i >= 0) && (i <= 2)) &&  ((j >= 0) && (j <= 2)) ){
          for (let m = 0; m <= 2; m++) {
            for (let n = 0; n <= 2; n++) {
              squareChecker += array[m][n];
            }
          }
        }  
        if( ((i >= 0) && (i <= 2)) &&  ((j >= 3) && (j <= 5)) ){
          for (let m = 0; m <= 2; m++) {
            for (let n = 3; n <= 5; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 0) && (i <= 2)) &&  ((j >= 6) && (j <= 8)) ){
          for (let m = 0; m <= 2; m++) {
            for (let n = 6; n <= 8; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 3) && (i <= 5)) &&  ((j >= 0) && (j <= 2)) ){
          for (let m = 3; m <= 5; m++) {
            for (let n = 0; n <= 2; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 3) && (i <= 5)) &&  ((j >= 3) && (j <= 5)) ){
          for (let m = 3; m <= 5; m++) {
            for (let n = 3; n <= 5; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 3) && (i <= 5)) &&  ((j >= 6) && (j <= 8)) ){
          for (let m = 3; m <= 5; m++) {
            for (let n = 6; n <= 8; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 6) && (i <= 8)) &&  ((j >= 0) && (j <= 2)) ){
          for (let m = 6; m <= 8; m++) {
            for (let n = 0; n <= 2; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 6) && (i <= 8)) &&  ((j >= 3) && (j <= 5)) ){
          for (let m = 6; m <= 8; m++) {
            for (let n = 3; n <= 5; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        if( ((i >= 6) && (i <= 8)) &&  ((j >= 6) && (j <= 8)) ){
          for (let m = 6; m <= 8; m++) {
            for (let n = 6; n <= 8; n++) {
              squareChecker += array[m][n];
            }
          }
        }
        // Поиск уникальной цифры
        function findWriteUniqueFig (figures, squareChecker, rowChecker, columnChecker) {
          for (let i = 0; i < figures.length; i++) {
            if (
              !squareChecker.includes(figures[i]) &&
              !rowChecker.includes(figures[i]) &&
              !columnChecker.includes(figures[i])
            ) {
              fillFig = figures[i];
            }
          }
          return fillFig;
        }
        //Записываем уникальную цифру в массив
        findWriteUniqueFig (figures, squareChecker, rowChecker, columnChecker);
        array[i][j] = fillFig;
      };
    };
  };
  return array;
};


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  // все ли поля ок
  if (board.flat().includes(0)) {
    return false;
  }

  //уникально ли в строке
  for (let i = 0; i < 9; i++) {
    if (
      new Set(board[i]).size !== 9 ||
      new Set(board.map((row) => row[i])).size !== 9
    ) {
      return false;
    }
  }

  // уникально ли в квадратике
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let square = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          square.push(board[k][l]);
        }
      }
      if (new Set(square).size !== 9) {
        return false;
      }
    }
  }

  return true;
}


//принимаем массив двухмерный из функции солв
// проверяем массив на решение верное или нет (уникальная цифра в игре, уникальная цифра в ряду, уникальная цифра в квадратике)
//true false

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  board.forEach((arr, index) => {
    let str = '';

    arr.forEach((el, index) => {
      str += el;
      if (index === 2 || index === 5) {
        str += '|';
      }
      // if(index)
      // console.log(el);
    });
    console.log(str);
    if (index === 2 || index === 5) {
      console.log('-----------');
    }
  });
}


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
