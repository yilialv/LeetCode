/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

 // runtime - 56 ms, Memory - 34.4 MB
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var arr = {};
  for(let i = 0; i < nums.length; i ++) {
      if ((target - nums[i]) in arr) {
          return [arr[target - nums[i]], i]
      }
      arr[nums[i]] = i;
  } 
};
