// time - o( n*(2^n) ) + n log n for sorting --> o( n*(2^n) )
   // 2^n where i have 2 choices each time, and n is length of nums
   // times n b/c each of my arrs can have n length?
       // think like: every time i generate a subset it takes n time because i could have n things to push in
       // and every time i generate, i'm actaully copying a whole arr
   // plus n log n for sorting
// space - o(n) b/c of call stack
var subsetsWithDup = function(nums) {
  let result = []
  nums = nums.sort((a,b) => a-b)


  function backtrack(i, arr) {
      if (i >= nums.length) {
          result.push(arr)
          return
      }


      let curNum = nums[i]
      backtrack(i+1, [...arr, curNum])


      while (i <= nums.length-1 && curNum === nums[i]) {
          i += 1
      }  
      backtrack(i, [...arr]) // don't need to inc i here b/c i already do it at least once in while loop


  }


  backtrack(0, [])


  return result
}
/**
  neetcode vid is very helpful for this one
  normally, with subsets, i'd do take/not take:
  nums = [1,2,2]
                      [1]                         []
                  [1,2]     [1]                [2]          []
          [1,2,2]  [1,2]  [1,2]   [1]     [2,2]   [2]     [2] []
  but doing this, we can see there are dups ex. [1,2] and [1,2]
  before pushing into result, somehow check if it's result already?
  or go ahead and push everything into result and then loop thru result to remove dups?
      how would this even work? can't just check every element against e/o
      what if had somethign like [1,2,2] and [2,1,2] those would be considered the same
 
  OKAY!!!
  since there can be dups, let's sort the array first
  then when we are doing take/not take
  the left side will be the "take"
      once we take it, we know that the left side will always have that, so we won't have dups
  the right side will be the "no take"
      so if the next idx is the same as the cur num, then we move that idx up until it's a diff num
 
  nums = [1,2,2,3]
                              [1]                                              []
                  [1,2]                       [1]                         [2]          []
          [1,2,2]t         [1,2]nt (skip to next new num)           [1,2]        [1]               [2,2]       [2]        [2]   []
  [1,2,2,3] [1,2,2]   [1,2,3] [1,2]  [1,2,3]. [1,2].   [1,3] [1].  [2,2,3] [2,2]. [2,3] [2] [2,3] [2] [3] []
  ^above tree will be off b/c of dups. see neetcode vid for drawn out tree


  start with sorted nums
  backtrack function
      base cases
          if idx >= nums.length, push result, return


      take
          push num into arr, call backtrack wiht next idx and updated arr
      no take
          call backtrack with new idx and original arr (not updated)
          to find new idx, loop until val is diff from cur val


*/
