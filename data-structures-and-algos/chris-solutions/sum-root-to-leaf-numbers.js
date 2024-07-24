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
