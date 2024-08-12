// 5/14/2024 Solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  return recursion(root, p, q);
};


const recursion = (root, p, q) => {
  if (root === null) return null;
  if (root === p || root === q) return root;


  const left = recursion(root.left, p, q);
  const right = recursion(root.right, p, q);


  if (left !== null && right !== null) return root;


  return left === null ? right : left;
}


/**
  Unlike a BST, we have to go to every node in the tree to find p and q. 2 x O(n) time and space


  DFS to find either p or q, then recursively return p and q if found
  If p and q are both found, then return the current node
  Else, return either p or q if one of them is found
 
  Ex 1: If different subtrees, check both subtrees, then recursively return current node    
  Ex 2: If same subtree, we only care about returning 5, no need to check 4
*/
