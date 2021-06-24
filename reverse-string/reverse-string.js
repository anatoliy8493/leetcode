/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let i = 0;
  let j = s.length - 1;
  
  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i += 1;
    j -= 1;
  }
};