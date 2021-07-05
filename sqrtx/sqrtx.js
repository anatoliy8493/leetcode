/**
 * @param {number} x
 * @return {number}
 */
// 0, 1, 2, 3, 4
// 0, [1]
// 1, [2]
// 2, [3]
var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x <= 3) return 1;
  
  for (let i = 1; i < x; i += 1) {
    if (i * i === x) return i;
    
    if (i * i >= x) {
      if ((i - 1) * (i - 1) < x) {
        return i - 1;
      }
       
      return i;
    }
  }
};