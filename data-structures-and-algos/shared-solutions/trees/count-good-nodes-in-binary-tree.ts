/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function goodNodes(root: TreeNode | null): number {
  return DFS(root, root.val);
};


function DFS(root: TreeNode | null, maxValue: number): number {
  if (root === null) {
      return 0;
  }


  let res = root.val >= maxValue ? 1 : 0;


  maxValue = Math.max(maxValue, root.val);


  res += DFS(root.left, maxValue);
  res += DFS(root.right, maxValue);


  return res;
}


/*
  Brute force:


  keep an array of values while we do depth first search
 


  instead of an array of values, we are only concerned with the max value so far as we traverse down the tree
*/
