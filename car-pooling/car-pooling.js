/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  N = 1000;
  const arr = new Array(N).fill(0);
  
  for ([n, start, end] of  trips) {
    arr[start] += n  // hop on
    arr[end] -= n   // hop off
  }
  
  for (let i = 1; i < N; i += 1) {
    arr[i] += arr[i - 1];
    
    if (arr[i] > capacity) return false;
  }
  
  return true;
};