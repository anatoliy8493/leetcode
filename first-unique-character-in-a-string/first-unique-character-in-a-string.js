/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  
  for (let i = 0; i < s.length; i += 1) {
    if (map.get(s[i]) === 1) return i;
  }
  
  return -1;
};