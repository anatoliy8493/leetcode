/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = s => {
  let i = 0;
  let j = s.length - 1;
  
  while (i <= j) {
    if (s[i] !== s[j]) return false;
    i += 1;
    j -= 1;
  }
  
  return true;
}

var longestPalindrome = function(s) {
  let max = 0;
  let result = '';
  
  for (let i = 0; i <= s.length; i += 1) {
    for (let j = i + 1; j <= s.length; j += 1) {
      const str = s.slice(i, j);
      
      if (isPalindrome(str)) {
        if (j - i > max) {
          result = str;
          max = j - i;
        }
      }
    }
  }
  
  return result;
};