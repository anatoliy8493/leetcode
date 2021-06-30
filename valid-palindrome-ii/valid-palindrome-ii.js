/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  let tryCount = 2;
  
  while (i <= j) {
    if (s[i] !== s[j]) {
      if (tryCount === 0) return false;
      
      if (tryCount === 2) {
        j -= 1;
        tryCount -= 1;
        continue;
      }
      if (tryCount === 1) {
        i += 1;
        j += 1;
        tryCount -= 1;
        continue;
      }
    }
    
    i += 1;
    j -= 1;
  }
    
  return true;
};