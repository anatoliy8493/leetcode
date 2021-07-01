/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let counter = 0;
  let max = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      i = map.get(s[i]) + 1;
      map.clear();
      max = Math.max(counter, max);
      counter = 0;
    }
      
    counter += 1;  
    map.set(s[i], i);
  }
  
  if (counter > 0) max = Math.max(counter, max);
  
  return max;
};