/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// runtime - 64 ms, Memory - 35.1 MB
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let len = nums.length;
  if (len === 1) {
      return max;
  } else {
      let sum = 0;
      for (let i = 0; i < len; i ++) {
          sum += nums[i];
          if (sum < nums[i]) {
              sum = nums[i];
          }
          if (max < sum) {
              max = sum
          }
      }
  }
  return max;
};