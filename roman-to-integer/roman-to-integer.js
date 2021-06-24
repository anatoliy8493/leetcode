/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const hashMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    const current = hashMap.get(s[i]) || 0;
    const next = hashMap.get(s[i + 1]) || 0;

    // IV
    if (next > current) {
      result = result + next - current;
      i += 1;
    // III
    } else {
      result += current;
    }
  }
  
  return result;
};