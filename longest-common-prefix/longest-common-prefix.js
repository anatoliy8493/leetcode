/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  
  for (let i = 0; i < strs[0].length; i += 1) {
    if (strs.every(str => str[i] === strs[0][i])) {
      result += strs[0][i];
    } else {
      return result;
    }
  }
  
  return result;
};