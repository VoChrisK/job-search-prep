/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]];


  for(let i = 0; i < nums.length; i++) {
      const initialLength = res.length;


      for(let j = 0; j < initialLength; j++) {
          const newEl = [...res[j], nums[i]];
          res.push(newEl);
      }
  }


  return res;
};


/**
  Time: O(2^n)
  Space: O(2^n) if we include the res array.
*/
