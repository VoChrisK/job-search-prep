/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return !recursion(p, q);
};

const recursion = (p, q) => {
  if (p === null && q === null) return false;
  if ((p !== null && q === null) || (p === null && q !== null)) return true;
  if (p.val !== q.val) return true;

  return recursion(p.left, q.left) || recursion(p.right, q.right);
}