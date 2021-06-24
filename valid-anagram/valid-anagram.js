/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  const sMap = {};
  const tMap = {};
  
  for (let i = 0; i < s.length; i += 1) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1;
    } else {
      sMap[s[i]] = 1;
    }
    
    if (tMap[t[i]]) {
      tMap[t[i]] += 1;
    } else {
      tMap[t[i]] = 1;
    }
  }
  
  for (key in sMap) {
    if (tMap[key] !== sMap[key]) return false;
  }
  
  return true;
};