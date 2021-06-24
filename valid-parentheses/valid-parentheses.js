/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      // check that we have the corresponding opening
      if (map.get(s[i]) !== stack.pop()) return false;
    } else {
      // opening one
      stack.push(s[i]);
    }
  }
  
  return stack.length === 0;
};