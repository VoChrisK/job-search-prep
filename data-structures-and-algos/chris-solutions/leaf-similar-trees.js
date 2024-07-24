/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const root1Leaves = [];
  const root2Leaves = [];


  recursion(root1, root1Leaves);
  recursion(root2, root2Leaves);


  if (root1Leaves.length !== root2Leaves.length) return false;


  for(let i = 0; i < root1Leaves.length; i++) {
      if (root1Leaves[i] !== root2Leaves[i]) {
          return false;
      }
  }


  return true;
};


const recursion = (root, rootLeaves) => {
  if (root === null) return;


  if (root.left === null && root.right === null) {
      rootLeaves.push(root.val);
      return;
  }


  recursion(root.left, rootLeaves);
  recursion(root.right, rootLeaves);


  return;
}
