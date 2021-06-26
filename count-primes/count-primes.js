/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isPrime = Array(n).fill(true, 2);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count += 1;

      for (let j = i * i;  j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return count;
};