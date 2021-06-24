/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 0 1 1 2 3 5 8 13 ...
  let a = 0;
  let b = 1;
  
  while (n > 0) {
    const c = b;
    b = a + b;
    a = c;
    n -= 1;
  }
  
  return b;
};