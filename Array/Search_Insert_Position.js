/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/

// runtime - 56 ms, beats 100%
// Memory - 33.7 MB, beats 83.60%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target > nums[nums.length - 1]) {
      return nums.length;
  } else {
      for (let i = 0 ; i < nums.length; i ++) {
          if (target <= nums[i]) {
              return i;
          }
      }
  } 
};