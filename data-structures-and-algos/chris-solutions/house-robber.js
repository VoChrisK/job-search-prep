// 8/5/2024 solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 3) {
      return Math.max(nums[0] || 0, nums[1] || 0);
  }

  let max = [nums[0], nums[1]];

  for(let i = 2; i < nums.length; i++) {
      let prevMax = Math.max(max[i-2] || 0, max[i-3] || 0);
      let newMax = nums[i] + prevMax;
      max.push(newMax);
  }

  return Math.max(max[max.length - 1], max[max.length - 2]);
};

/**
  Two choices:

  Rob current house, and skip the next one
  Rob the next house, and skip the one after the next house

  So for current element nums[i], you either:
  - Rob
  - Not rob

  We have to calculate both choices 

  [2,7,9,3,1]

  [2,7,11,10,12]

  Populate first 3 elements, then choose the greater of nums[i - 2] or nums[i - 3]
*/

// 1/24/24 solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
      return nums[0];
  }

  let dp = [];
  let maxSoFar = 0;

  for(let i = 0; i < nums.length; i++) {
      let sum1 = dp[i - 2] ? dp[i - 2] + nums[i] : nums[i];
      let sum2 = dp[i - 3] ? dp[i - 3] + nums[i] : nums[i];

      let res = Math.max(sum1, sum2);
      maxSoFar = Math.max(maxSoFar, res);
      dp.push(res);
  }

  return maxSoFar;
};

/**
  Brute force:
  - Consider all possibilities for each el in nums array: O(n^2)

  Two options:

  Select the current house, you can't pick the next one
  Do not select the current house, you can pick the next one

  [2,1,9,10,1]

  house 3, can choose house 0 or house 1 
  house 2, can only choose 0

  [2,1,11,12,12]

  [2,1,11,12, ]
*/


