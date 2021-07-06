/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 147
  // 258
  // 369
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix[i].length; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  
  matrix = matrix.map(row => row.reverse())
};