/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const result = +String(Math.abs(x)).split('').reverse().join('');
  
  if (result <= -(2 ** 31) || result >= 2 ** 31 - 1) return 0;
  
  return x < 0 ? -result : result;
};