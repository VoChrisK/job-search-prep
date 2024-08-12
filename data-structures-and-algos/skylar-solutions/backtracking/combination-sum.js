// time - o(2^target)
//     i have 2 choices, the worst case is if i have a 1 in my array, then i could take the 1 as many times as the target
//     ex, [1,2,3] target = 7, one of the possibilities is [1,1,1,1,1,1,1]
//     so i'd be doing the take/don't take (2 choices) 7 times --- 2^7 --> o(2^target)
// space
var combinationSum = function(nums, target) {
  let result = []


  function backtrack(i, sum, arr) {
      if (i > nums.length-1 || sum > target) return // sum > target is needed b/c there is a path where im never inc i
      if (sum === target) {
          result.push(arr)
          return
      }


      backtrack(i, sum + nums[i], [...arr, nums[i]])
      backtrack(i+1, sum, [...arr])


      //similarily could do
      // arr.push(nums[i])
      // backtrack(i, sum + nums[i], [...arr])
      // arr.pop()
      // backtrack(i+1, sum, [...arr])
  }


  backtrack(0, 0, [])


  return result
}


/**
  choices are to take or not to take current element
  backtracking function:
  base cases
      if i > length-1 (if it's past the last element in candidate, that means i can't add this element inanything in)
          return
      if sum > target, then also return (this is needed because there's a backtrack where i never increase i, so first condition won't be met)
      if sum === target
          push arr into result, return
     
  take
      push curEl into arr, add to sum. continue backtracking w/ same i value (repeatedly taking curElement)
  don't take curEl (take nextEl)
      don't push into arr, don't add to sum, just move on to next number (inc i)


  in below ex, left is staying at the same i and taking elemen, right is inc i by 1 and not taking element
  ex 1.
  candidates = [2,3,6,7], target = 7
                                          [2] i =0                            [] i+1 = 1
                                  [2,2] i=0       [2] i+1=1               [3] i=1       [] i+1 = 2
                          [2,2,2] i=0 [2,2] i+1   [2,3]i=1  [2] i+1=2   [3,3]i=1 [3] i+1=2      [6]i=2      []i+1=3
  time complexity
  i have 2 choices, the worst case is if i have a 1 in my array, then i could take the 1 as many times as the target
  ex, [1,2,3] target = 7, one of the possibilities is [1,1,1,1,1,1,1]
  so i'd be doing the take/don't take (2 choices) 7 times --- 2^7 --> o(2^target)
*/
