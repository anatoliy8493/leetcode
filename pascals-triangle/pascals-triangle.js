/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
//     0
//    0 1
//   0 1 2
//  0 1 2 3
// 0 1 2 3 4
  const result = [];
  
  for (let i = 1; i <= numRows; i += 1) {
    result.push(new Array(i).fill(1));
  }
  
  for (let i = 1; i < result.length; i += 1) {
    for (let j = 0; j < result[i].length; j += 1) {
      const prevLeft = result[i - 1][j - 1] || 0;
      const prevRight = result[i - 1][j] || 0;
      result[i][j] = prevLeft + prevRight;
    }
  }
  
  return result;
};