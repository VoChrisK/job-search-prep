// time - o(9^k)
   // think of this like [9 options, 9 options, 9 options] so 9x9x9x9x9 k times = 9^k
// space -
var combinationSum3 = function (k, n) {
  let result = []


  function backtrack(curDigit, sum, arr) {
      if (arr.length === k && sum === n) {
          result.push(arr)
          return
      }
      if (curDigit > 9) return;
      if (sum > n) return;
      if (arr.length > k) return;


      // putting success base after other base cases doesn't work cuz i'd pass in 10 for i which is > 9, and exit before pushing
      // if (arr.length === k && sum === n) {
      //     result.push(arr)
      //     return
      // }
      // way to address is make for loop
      // for (let i = curDigit + 1; i <= 9; i++) {
      // pass in i when backtracking
     
     
      for (let i = curDigit; i <= 9; i++) {
          arr.push(i)
          sum += i
         
          // backtrack(i+1, sum + i, [...arr, i]); // can also do this if don't want to push/pop
          backtrack(i+1, sum, [...arr]); // make sure to spread arr


          arr.pop()
          sum -= i
      }
  }


  backtrack(1, 0, [])


  return result


};
/**   
  ex k=3, n=7
  backtrack(arr, curDigit, sum)
 
  space complexity analysis
  where k = 3
  backtrack(1,0,[])
  i=1
      call i=1+1, backtrack(2,1,[1])
          i=2
              call 2+1=3, 3, [1,2] bt(3,3,[1,2])
                  i=3
                      call 3+1=4, 6, [1,2,3] bt(4,6,[1,2,3])
                          i=4
                              call 4+1=5 bt(5,10,[1,2,3,4])
                                  --- return
                                  ---- i return here so call stack is o(k) since i pop before i push again to call stack
                                  --- i made 5 calls. so call stack is k+2 --> o(k)
  1 0 []
  2 1 [ 1 ]
  3 3 [ 1, 2 ]
  4 6 [ 1, 2, 3 ]
  5 10 [ 1, 2, 3, 4 ]
  6 11 [ 1, 2, 3, 5 ]
  7 12 [ 1, 2, 3, 6 ]
  8 13 [ 1, 2, 3, 7 ]
  9 14 [ 1, 2, 3, 8 ]
  10 15 [ 1, 2, 3, 9 ]
  5 7 [ 1, 2, 4 ]
  6 8 [ 1, 2, 5 ]


*/
