/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const set = new Set();
  const result = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) result.push(nums[i]);
    
    set.add(nums[i]);
  }
  
  return result;
};