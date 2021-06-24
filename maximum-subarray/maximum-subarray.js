/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // [-2,1,-3,4]
  // -2
  // -2+1
  // -2+1-3
  // -2+1-3+4
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i += 1) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    maxSum = Math.max(maxSum, nums[i]);
  }
  
  return maxSum;
};