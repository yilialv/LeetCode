/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
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
              max = sum;
          }
      }
  }
  return max;
};


/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var maxSubArray = function(nums, left, right) {
    if (left === right) {
        return nums[0]
    }
    let mid = Math.floor((left + right) / 2)
    let leftMax = this.maxSubArray(nums, left, mid)
    let rightMax = this.maxSubArray(nums, mid + 1, right)
    let sum = 0
    let lmax = nums[mid]
    let rmax = nums[mid + 1]
    for (let i = mid; i >= left; i--) {
        sum += nums[i]
        if (sum > lmax) {
            lmax = sum
        }
    }
    sum = 0
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i]
        if (sum > rmax) {
            rmax = sum
        }
    }
    let midMax = lmax + rmax
    return leftMax > rightMax ? leftMax > midMax ? leftMax : midMax : rightMax > midMax ? rightMax : midMax
}
