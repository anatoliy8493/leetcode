/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // [1,2,3,4]

  // [1,1,2,6]+
  // [24,12,4,1]
  // [24,12,8,6]
  
  let leftStart = 1;
  let leftArr = [];
  let rightStart = 1;
  let rightArr = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    leftArr.push(leftStart);
    leftStart *= nums[i];
  }
  
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    rightArr.unshift(rightStart);
    rightStart *= nums[i];
  }
  
  const result = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    result[i] = leftArr[i] * rightArr[i];
  }
  
  return result;
};