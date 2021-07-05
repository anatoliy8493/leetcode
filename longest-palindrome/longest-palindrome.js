/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {};
  let result = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
    
    if (map[s[i]] % 2 === 0) {
      result += 2;
    }
  }
  
  return s.length > result ? result + 1 : result;
};