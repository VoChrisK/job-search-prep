/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let isTreeBalanced = true;

  const recursion = (root) => {
  if (root === null) return 0;

      let left = recursion(root.left);
      let right = recursion(root.right);

      let diff = Math.abs(left - right);

      if (diff > 1) isTreeBalanced = false;

      return Math.max(left, right) + 1;
  }

  recursion(root);
  return isTreeBalanced;
};

/*
  calculate the depth/level of each subtree and calculate diff for a given node,
  if diff > 1, then recursively return false

  keep track of depth and boolean value

  post order DFS traversal
*/