// BFS Solution

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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  let queue = [];
  if (root !== null) queue.push(root);

  while(queue.length > 0) {
      let length = queue.length;
      let node = null;

      for(let i = 0; i < length; i++) {
          node = queue.shift();

          if (node.left !== null) queue.push(node.left);
          if (node.right !== null) queue.push(node.right);
      }

      res.push(node.val);
  }

  return res;
};

/**
  BFS?
  Capture length of queue before doing the BFS algorithm,
  the last el in queue a.k.a length - 1 is the rightmost node, so add that to array
*/