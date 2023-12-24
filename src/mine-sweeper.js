const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rez = [];
  for(let i = 0;i<matrix.length;i++){
    rez.push([]);
    for(let j = 0;j<matrix[i].length;j++){
      let kol = 0;
      for(let k = i-1;k<i+2;k++){
        for(let q = j-1;q<j+2;q++){
          if(matrix[k]){
            if(k===i&&j===q){
              continue;
            }
            if(matrix[k][q] === true){
              kol+=1;
            }
          }
        }
      }
      rez[i].push(kol);
    }
  }
  return rez;
}

module.exports = {
  minesweeper
};
