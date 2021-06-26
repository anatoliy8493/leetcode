/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const set = new Set();
  
  while (n >= 1) {
    n = String(n).split('').reduce((a, b) => a + b ** 2, 0);
    
    if (set.has(n)) return false;
    
    set.add(n);
    
    if (n === 1) return true;
  }
  
  return false;
};