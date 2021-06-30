/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  
  const sMap = new Map();
  const tMap = new Map();
  
  for (let i = 0; i < s.length; i += 1) sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
  for (let i = 0; i < t.length; i += 1) tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1);
  
  for (let i = 0; i < s.length; i += 1) {
    if (sMap.get(s[i]) !== tMap.get(s[i])) return false;
  }
  
  return true;
};