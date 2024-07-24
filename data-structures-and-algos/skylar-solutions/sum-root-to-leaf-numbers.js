// time  - o(n) hitting every node once
// space - o(log n)
   // o(log n) b/c str is height of tree
   // o(h) for call stack -- call stack is height of tree
   // o(log n) + o(log n) --> o(log n)


   var sumNumbers = function(root) {
    let sum = 0
 
 
    function dfs(node, str) {
        if (!node.left && !node.right) {
            str += node.val.toString()
            sum += Number(str)
            return
        }
 
 
        str += node.val.toString()
 
 
        if (node.left) dfs(node.left, str)
        if (node.right) dfs(node.right, str)
    }
 
 
    dfs(root, '')
 
 
    return sum
 };
 
 
 
 
 /**
    dfs down tree (node, str) // doesn't return anything, just traverses thru and adds to global var
    convert curNode val to a string
    curStr += curNode.val.toString()
    parent passes curStr down to children
        where the curStr is the prevStr + curNodeVal
    base case - when i get to the end (null node)
        that means the str for that path is done
        take that str that was passed into null node, convert to num
        add to sum (global var)
        return
    ------
    ACTUALLY if we do the above, it'll accidentally double count the leaf node
    b/c we'd be doing no left node, no right node, which double counts
        // so guess coudl still use the above solution but just divide by 2 maybe(?)
 
 
    so instead, for the dfs function, let's make the base case if LEAF node, instead of if null
    base case - when no left no right
        str is done
        add cur node val to str, convert to num
        add to sum
        return
    then need to check for left right exist
    if (node.left) dfs(node.left)
    if (node.righ) dfs(node.right)
 */
 