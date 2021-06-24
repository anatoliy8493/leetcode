/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphabetSet = new Set();
  
  // fill alphabet
  for (let i = 97; i <= 122; i += 1) alphabetSet.add(String.fromCharCode(i));
  // fill numbers
  for (let i = 0; i <= 9; i += 1) alphabetSet.add(String(i));
  
  let str = '';
  
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i].toLowerCase();
    if (alphabetSet.has(char)) {
      str += char;
    }
  }
  
  let i = 0;
  let j = str.length - 1;
  
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i += 1;
    j -= 1;
  }
  
  return true;
};