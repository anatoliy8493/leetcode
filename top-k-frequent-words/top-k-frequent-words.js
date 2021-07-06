/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = {};
  
  for (let i = 0; i < words.length; i += 1) {
    if (map[words[i]] === undefined) {
      map[words[i]] = 1;
    } else {
      map[words[i]] += 1;
    }
  }
  
  console.log('map', map);
  
  return Object.entries(map)
    .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    } else {
      return b[1] - a[1];
    }
  })
    .slice(0, k)
    .map(item => item[0]);
};