/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastZeroIndex = 0;
  
  // [0,1,0,3,12]
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[lastZeroIndex] = nums[i];
      lastZeroIndex += 1;
    }
  }
  
  // [1,3,12,3,12] lastZeroIndex = 3, nums.length = 5
  while (lastZeroIndex < nums.length) {
    nums[lastZeroIndex] = 0;
    lastZeroIndex += 1;
  }
  
  return nums;
};