// 8/16/2024 solution

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
 * @return {number}
 */
var sumNumbers = function(root) {
  return recursion(root, '', 0);
};

const recursion = (root, digits, sum) => {
  if (root === null) return 0;

  digits += root.val.toString();

  if (root.left === null && root.right === null) {
      return sum + Number(digits);
  }

  return recursion(root.left, digits, sum) + recursion(root.right, digits, sum);
}

// 5/14/2024 solution

/**
  inorder DFS traversal 

  keep track of the numbers with a string,
  push digit to end of string for each node,
  when we bubble back up, remove the digit in string,
  when we hit a leaf node, convert string to number and add to total
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return recursion(root, '')
};


var recursion = (root, num) => {
  if (root === null) return 0;


  num = num.concat(root.val);


  if (root.left === null && root.right === null) {
      return Number(num);
  }


  let left = recursion(root.left, num);
  let right = recursion(root.right, num);


  return left + right;
}


/**
  Time: O(n)
  Space: O(h) – call stack


[1,2,3]


  num = 12


  Pre-order traversal DFS
  As we go down, we add the current node's val to a string
  When we hit leaf, convert string to number and add to sum


  Edge case: preceding 0's, but both Number and parseInt function truncate preceding 0's
*/
