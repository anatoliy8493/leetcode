/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // [7,1,5,3,6,4]
  // 5-1 + 6-3 = 7
  let result = 0;
  
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) result += prices[i] - prices[i - 1];
  }
  
  return result;
};