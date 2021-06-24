/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // x + y = target -> x = target - y
  const map = new Map();
  
  for (let i = 0; i < nums.length; i += 1) {
    map.set(target - nums[i], i);
  }
  
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i]) && map.get(nums[i]) !== i) return [map.get(nums[i]), i];
  }
};