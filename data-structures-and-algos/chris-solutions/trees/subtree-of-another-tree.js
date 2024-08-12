// 8/7/2024 solution

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  return recursion(root, subRoot);
};

const recursion = (root, subRoot) => {
  if (root === null) return false;

  let recursiveSubRoot = false;

  if (root.val === subRoot.val) {
      recursiveSubRoot = !recursionWithSubRoot(root, subRoot);
  }
      
  return recursiveSubRoot || recursion(root.left, subRoot) || recursion(root.right, subRoot);

}

const recursionWithSubRoot = (root, subRoot) => {
  if (root === null && subRoot === null) return false;
  if ((root !== null && subRoot === null) || (root === null && subRoot !== null)) return true;
  if (root.val !== subRoot.val) return true;

  return recursionWithSubRoot(root.left, subRoot.left) || recursionWithSubRoot(root.right, subRoot.right)
}

/**
  initial thoughts:

  - we use a DFS traversal
  - we check the current node with the root node of subRoot
      - if they are the same, then we traverse both tree and subRoot
          - if we hit the end of subRoot, return true
          - if there's a mismatch, then return false, and start over

*/

// 11/20/2023 solution

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root === null) return false;

  let isValidSubtree = checkSubtree(root, subRoot);
  
  isValidSubtree ||= isSubtree(root.left, subRoot);
  isValidSubtree ||= isSubtree(root.right, subRoot);

  return isValidSubtree;
};

var checkSubtree = function(root, subRoot) {
  if (root === null && subRoot === null) return true;
  if ((root === null && subRoot !== null) || (root !== null && subRoot === null)) return false;
  if (root.val !== subRoot.val) return false;

  let isValidSubtree = true;
  
  isValidSubtree &&= checkSubtree(root.left, subRoot.left);
  isValidSubtree &&= checkSubtree(root.right, subRoot.right);

  return isValidSubtree;
}

/*
  preorder traversal, check root first
  if root equals to root of subroot, check that subtree <-- submethod?

  submethod:
  check that particular subtree,
*/