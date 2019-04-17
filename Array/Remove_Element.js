/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.
 */

// Is there more better solution?

// Solution1: runtime-60ms, Memory-33.8 MB
 /**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1);
          i --;
      }  
  }
  return len;
};

// Solution2: runtime-60ms, Memory-34 MB
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  while (nums.indexOf(val) !== -1) {
      nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};