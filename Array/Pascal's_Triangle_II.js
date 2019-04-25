/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
Note that the row index starts from 0.

Example:
Input: 3
Output: [1,3,3,1]
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr = [1];
  for (let i = 0; i < rowIndex + 1; i++) {
      for(let j = i; j > 0; j--) {
          if (j === i) {
              arr[j] = arr[j - 1]
          } else if (j === 0) {
              arr[j] = arr[0]
          } else {
              arr[j] = arr[j - 1] + arr[j];
          }
      }
  }
  return arr;
};