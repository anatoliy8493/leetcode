/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const pascalTriangle = [];

  for (let i = 0; i < rowIndex + 1; i += 1) {
    pascalTriangle[i] = new Array(i);

    for (j = 0; j < i + 1; j += 1) {
      if (j === 0 || i === j) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
      }
    }
  }

  return pascalTriangle[rowIndex];
};