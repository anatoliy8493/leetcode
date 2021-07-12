/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 0;
  let j = 1
  
  // [1,2,3,3,4]
  for (; j < nums.length; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  
  return i + 1;
};
