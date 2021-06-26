/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // [3,0,1]
  // 0,1,2,3 -> new Array(0 to nums.length + 1);
  const arr = new Array(nums.length + 1).fill(false).map((item, index) => index);
  
  for (let i = 0; i < nums.length; i += 1) {
    arr[nums[i]] = true;
  }
  
  console.log('arr', arr);
  
  for (let i = 0; i < nums.length + 1; i += 1) {
    if (typeof arr[i] === 'number') return arr[i];
  }
};