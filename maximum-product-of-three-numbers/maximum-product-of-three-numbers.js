/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  
  return Math.max(
    nums[0] * nums[1] * nums[length - 1],
    nums[length - 1] * nums[length - 2] * nums[length - 3],
  );
};