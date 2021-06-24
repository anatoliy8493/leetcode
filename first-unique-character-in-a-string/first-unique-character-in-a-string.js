/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const hashMap = new Map();
  
  for (let i = 0; i < s.length; i += 1) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }
  
  for (let i = 0; i < s.length; i += 1) {
    if (hashMap.get(s[i]) === 1) return i;
  }
  
  return -1;
};