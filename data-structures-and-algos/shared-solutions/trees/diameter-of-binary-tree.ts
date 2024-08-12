// time - o(n) we hit every node
// space - o(n) call stack
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0


  function dfs(node) {
      if (!node) return 0


      let left = 1 + dfs(node.left)
      let right = 1 + dfs(node.right)


      let maxDepth = Math.max(left, right)


      maxDiameter = Math.max(left+right-1, maxDiameter)


      return maxDepth
  }


  dfs(root)


  return maxDiameter - 1
};


/**
  let max
  get leftH, rightH, sum them together
  set max = Math.max(the sum, curMax)


  at each node, we want to track what the maxDepth from that node to a leaf is
  as we bubble up
      we set the maxDepth at that node
      we also set diameter max vs curMax (diameter) -- (left and right)
*/
