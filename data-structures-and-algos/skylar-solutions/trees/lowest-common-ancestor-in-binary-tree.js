// time - o(n)
   // going thru tree once for pathP and pathQ, so o(n)
   // js reverse is o(n)
   // then looping thru path which could be height of tree (log n)
   // --> o(n) + o(n) + o(log n) --> o(n)
// space - o(log n)
   // 2 arrays of height tree so log(n), call stack of height tree log(n) --> o(log n)
   var lowestCommonAncestor = function(root, p, q) {
    let pathP = []
    let pathQ = []
 
 
    getPath(root, p.val, pathP) // make sure to send in .val
    getPath(root, q.val, pathQ)
 
 
    pathP.reverse()
    pathQ.reverse()
    const shortestPath = pathP.length <= pathQ.length ? pathP : pathQ
 
 
    for (let i=0; i<shortestPath.length; i++) {
        if (pathP[i].val !== pathQ[i].val) { // make sure to do .val since pushed in node
            return shortestPath[i-1]
        }
    }
 
 
    return shortestPath[shortestPath.length-1]
 }
 
 
 function getPath(node, target, arr) {
    if (!node) return false
    if (node.val === target) {
        arr.push(node)
        return true
    }
   
    let isInLeft = getPath(node.left, target, arr)
    let isInRight = getPath(node.right, target, arr)
 
 
    if (!isInLeft && !isInRight) return false
 
 
    arr.push(node)
    return true
 }
 /**
    find the node p and q
    - constraint says all values in tree are unique
    add each value i go thru to a set for p
        this doesn't work tho cuz i could hit a node that's not on the path for p --
    after finding p and q, bubble back up
        when bubble back up from q, check if node in set for p.
        if it is, then that's the LCA
        eventually it'll be root node if nothing else
 
 
    since i can't add every val to set for p (cuz could hit node not on p path)
    get path for p
    get path for q
    go through the 2 paths and see where they intersect
        find whichever one is shortest
 
 
    to get paths:
    go all the way down tree, find node
    push node into arr
    bubble up, push cur node into arr
    eventually will hit root node ex. [p, node, node, node, root]
    using ex 2
    pPath = [5,3], qPath = [4,2,5,3]
    reverse the paths
    find shortest length
    loop thru and whenever they stop equalling each other, the el before it is the LCA
 
 
    getPath(node, arr) //
        base case:
            if node found, push into pathArr, return true
            if null, return false (reached end of tree without finding node)
 
 
        getPath(left) // found in left path return true
        getPath(right)
 
 
        push curNode into arr --- but i only want to do this when i bubble up and DID find target
        if not in left and not in right, return false (auto exit)
        otherwise push curNode into arr, return true
 
 
    3
        5 [2,5]
            6
            2
                2 is found, so [2]
        1
 
 
 */
 