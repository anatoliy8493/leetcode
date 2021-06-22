/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  
  for (let i = 0; i < nums.length; i += 1) {
    if (map[nums[i]] !== undefined) return [map[nums[i]], i];

    map[target - nums[i]] = i;
  }
};