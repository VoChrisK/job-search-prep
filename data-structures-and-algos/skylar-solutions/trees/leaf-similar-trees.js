// 4/30/24 redo
// time - o(n + m) where n is tree 1 and m is tree 2
   // will go thru all nodes to get to leaves
   // will loop thru path length which is diameter of tree - n/2
   // o(n) + o(n/2) --> o(n)
// space - o(n + m) where n is tree 1 and m is tree 2
   // arr to store path of all leaves, could be diameter of tree - n/2 --> o(n)
   var leafSimilar = function(root1, root2) {
    let path1 = []
    let path2 = []
 
 
    dfs(root1, path1)
    dfs(root2, path2)
 
 
    if (path1.length !== path2.length) return false
    for (let i=0; i<path1.length; i++) {
        if (path1[i] !== path2[i]) return false
    }
 
 
    return true
 }
 
 
 function dfs(node, arr) {
    if (!node) return true
 
 
    let left = dfs(node.left, arr)
    let right = dfs(node.right, arr)
 
 
    if (left && right) arr.push(node.val)
 
 
    return false // is this even needed?
 }
 /**
    get leaf nodes of each tree
    loop thru and compare // also check size first
        if diff return false
    done with loop return true
 
 
    to get leaf nodes of each tree - dfs(node, arr) // ret true/false, modifies arr
    if left and right child are null, that means it's a leaf
   
    left = dfs(node.left) /// return true/false
    right = dfs(node.right) /// return true/false
 
 
    if both children are true, that means children are null so curNode is a leaf, want to push into arr
    if (left && right) {
        arr.push(node.val)
    }
 
 
    return false
   
 */
 