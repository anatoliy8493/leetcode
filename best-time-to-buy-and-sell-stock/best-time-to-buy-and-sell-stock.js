/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // [7,1,5,3,6,4]
  let min = prices[0];
  let max = 0;
  
  for (let i = 1; i < prices.length; i += 1) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  
  return max;
};