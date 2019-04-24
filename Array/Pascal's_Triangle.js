/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  let arr1 = [1];
  for (let i = 0; i < numRows; i++) {
      for(let j = i; j > 0; j--) {
          if (j === i) {
              arr1[j] = arr1[j - 1]
          } else if (j === 0) {
              arr1[j] = arr1[0]
          } else {
              arr1[j] = arr1[j - 1] + arr1[j];
          }
      }
      arr.push([].concat(arr1));
  }
  return arr;
};