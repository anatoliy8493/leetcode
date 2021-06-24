/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 123 % 100 3
  // 120 % 100 2
  // 100 % 100 1
  const result = +String(Math.abs(x)).split('').reverse().join('');
  
  if (result <= -(2 ** 31) || result >= 2 ** 31 - 1) return 0;
  
  return x < 0 ? -result : result;
};