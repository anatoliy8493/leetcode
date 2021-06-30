/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
    result += nums[i] - nums[0];
  }
  
  return result;
};