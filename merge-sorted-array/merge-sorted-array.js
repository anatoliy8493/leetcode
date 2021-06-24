/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // [1,2,3,0,0,0] m = 3
  // [2,5,6] n = 3
  // pointer = m + n - 1
  // decrease either m or n depending on which one is greater
  let pointer = m + n - 1;
  n -= 1;
  m -= 1;
  
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[pointer] = nums1[m];
      m -= 1;
    } else {
      nums1[pointer] = nums2[n];
      n -= 1;
    }
    
    pointer -= 1;
  }
};