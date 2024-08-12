// time - o(n) going thru every node once
// space - o(h) where h is height of tree (which could potentially be n if one sided)
var isBalanced = function(root) {
  let result = dfs(root)


  return result[0]
};


function dfs(node) { // returns pair of values
  if (!node) return [true, 0]
 
  let left = dfs(node.left) // returns pair of values ex [true, 0]
  let right = dfs(node.right)
  let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <=1
 
  return [balanced, 1 + Math.max(left[1], right[1])] // make sure to do 1 + to count current node
}
/**
  watch neetcode explanation
  we'll go bottom up
  the children want to send the height to the parent
  so the parent receives left/right height, then it can just do abs(left-right) > 1 -- if it is, then unablanced
  to get the height of the tree to send to parent,
      we would do 1 + max(left,right) --- 1 for cur node, and then max heigh of l/r
 
  return 2 values then -- [true/false, height]
  so base case
      if !node --- return [true, 0]


      dfs left
      dfs right


      have a var called balanced for true/false
      balance = left[0] is true and right[0] is true and abs(l-r) <=1


      return [balanced, math.max(left height, rightheight)]
 
  when i have exited my dfs
  return final ans which is first val of arr [true/false, height]
*/
