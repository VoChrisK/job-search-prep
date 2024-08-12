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

let maxDiameter = 0;

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    const recursion = (root) => {
        if (root === null) return 0;

        let left = recursion(root.left);
        let right = recursion(root.right);

        maxDiameter = Math.max(maxDiameter, left + right);

        return Math.max(left, right) + 1;
    }

    recursion(root);
    return maxDiameter;
};

/**
    in order DFS traversal?

    left -> get length -> pass to the right's recursion

    keep track of the max diameter so far
    bubble up the max length between left and right children

       1
      / \
     2   3
 */