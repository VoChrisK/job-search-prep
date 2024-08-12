// time - o(2^n) where n is nums.length
   // b/c i have 2 choices each time (include/don't include) and n times --> 2x2x2x2x2 etc
// space - o(n) ???
var subsets = function(nums) {
  let result = []


  function buildSubset(idx, arr) {
      if (idx === nums.length) {
          result.push(arr)
          return
      }


      buildSubset(idx + 1, [...arr])
      buildSubset(idx + 1, [...arr, nums[idx]])
      // could also use push/pop --> push, build, pop, build
  }


  buildSubset(0, [])


  return result
}


/**
  can include or not include number
                              []                      [1]
                      []          [2]              [1]         [1,2]
                  []  [3]     [2]     [2,3]     [1] [1,3]   [1,2]   [1,2,3]
  loop thru nums
  at each level (i), i can choose to include or not include
  recursive include
  recrusive not include


  i push into the final results arr when i'm at my level - like length of arr
 
  base:
  if idx is === nums.length, that means you're past last level ([0,1,2] -- len=3, idx 3 out of bounds)
      push the arr i passed in into result arr
 
  buildSubset([arr doesn't include num at idx 0], next idx)
  buildSubset([arr includes num at idx 0], next idx)
  don't need a loop if i'm passing in the idx
*/
