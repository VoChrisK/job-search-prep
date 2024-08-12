// time
 // n total nodes
 // height of tree = log n
 // for loop can be up to logn -1 nodes
 // for every node i do the for loop
 // n * (log n - 1) ---> o(n log n)
// space - check fb chat for expalnation
   // my newSumArrs will be length 1, then 2, then 3, etc all the way down to the height of tree
   // so sum of 1 to height  is h^2 and height of tree is logn --> (log n)^2
   // o(log n)^2


// also a working solution
var pathSum = function(root, targetSum) {
  function dfs(node, sumsArr) {
      if (!node) return 0
      let newSumsArr = []
      let count = 0
      for (let i=0; i<sumsArr.length; i++) {
          let curSum = sumsArr[i] + node.val
          newSumsArr.push(curSum)
          if (curSum === targetSum) count += 1
      }
      if (node.val === targetSum) count += 1
      newSumsArr.push(node.val)


      let left = dfs(node.left, newSumsArr) // don't need to pass count, child doesn't need to know
      let right = dfs(node.right, newSumsArr)


      return left + right + count // return myCurrentWays + sum of my children's ways
  }


  return dfs(root, [], 0)
};
/**
Thought proces for above code
  if i am leaf node and i have this info from my parents, what should i return?
  now think bubble up just ONE step - given what my child gave me, what should i return?
  2
      return myCurCountofWays + sum of myChildsWays -- 0 + 0 + 4
      -2 --> sum is either 2 or 0. but child got 8 2x.
          return myCurCountofWays + sum of myChildsWays
     8     8 --> retrun 2 ways
              return myCurCountofWays + sum of myChildsWays --> 2+ 0
              3 ---> 0
                  return myCurCountofWays + sum of myChildsWays
*/


// WORKIGN SOLUTION 1 where count is a global var
var pathSum = function(root, targetSum) {
  let count = 0;


  function dfs(node, sumsArr) { // 5, [], 0
      if (!node) return
      let newSumsArr = []
      for (let i=0; i<sumsArr.length; i++) {
          let curSum = sumsArr[i] + node.val
          newSumsArr.push(curSum)
          if (curSum === targetSum) count += 1
      }
      if (node.val === targetSum) count += 1
      newSumsArr.push(node.val) // [5]


      dfs(node.left, newSumsArr) // 3, [5], 0
      dfs(node.right, newSumsArr) // 2, [5], 0
  }


  dfs(root, [])


  return count;
};


/**
  run thru code example using test case [5,3,2,3,-2,null,1], targ 8
  left - 3, [5], 0
      newSUms = []
      cur = 5 + 3 = 8 --> newSums = [8]. coun = 1, newSums = [8,3]
      left - 2nd 3, [8,3], 1 ---> return 1 ---- count += 1
          newSUms = []
          i =0 curSUm = 8+3 = 11 -- [11]
          i=1 curSum = 3+3 = 6 --- [11,6]
          push -- [11,6,3]
          left (null, [11,6,3], count =1) --- return 1
      right = -2, [8,3], 1
          i=0 8+-2 = 6
          i=0 3+-2 = 1 -- [6,1]
          ppush [6,1,-2]
          left and right, null


  right - 2, [5], 0
*/
/**
  if !node return -- count
  if node exists, loop thru the array
      create a new arr
      for ()
          sum curNode.val + arrEl val
          if sum == target - inc count
      push in curnode.val
      [newARr]
      let left = dfs(left) -- pass in newarr, count
      let left dfs(right) -- pass in newarr, count
     
      return count
 


  start at 5
      left - at the 3, i receive the 5
          sum = 5+3 = 8 -- good -- increase the count
          i pass 8, and 3 to child-- cerate copy of arry -- [8,3]
          left - next 3, get teh 8, get 3 [8,3]
              sum = 8+3 = 11 no
              sum = 3+3 = 6 no
              when i pass something in i'm looping thru the curArr, creating teh sum, and pushing curVal in
              left - send in [11,6,3]
                  sum = 11+1
                  sum = 6+1
                  sum = 3+1
          right - -2, get teh 8, get 3
      right - at the 2, i receive the 5




  node val. = 10, then what's missing --> find a -2
  when we go down to childen, we pass the 'remainingSum' to get to the target
  and if the child = remainingSum, then that's a path
  pass in the curSum that i had from prev node (10), also want to once i get to the node
      start a new curSum at 0, so that i'm starting at a 'new' path
      now at -3, i will receive 10, and then start at 0
      now i'm at 11, i wnat to receive 7 (10 + -3) AND receive -3
          sum = 11+7 = 18 -- no
          sum = 11+-3 -- 8 -- yes path inc count
          now im' at -10, i pass in 18, 8, 11
              sum = 18 + -10 = 8 -- yes path inc count
              sum 8+-10 = -2
              sum = 11+-10 = 1
*/
