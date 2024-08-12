// time - o(v + e) where v is node, e is edges. b/c going thru each thing once
// space - o(v) where v num nodes (v is length of graph since nodeStatus and result array will be max n length)
var eventualSafeNodes = function(graph) {
  let nodeStatus = new Array(graph.length).fill("unvisited")
  let result = []


  function dfs(node) { // return true/false
      // if the node has already been marked as safe, return true
      if (nodeStatus[node] === "safe") return true


      // // if node is a terminal node, mark as safe, return true
      if (node.length === 0) {
          nodeStatus[node] = "safe"
          return true
      }


      // if (nodeStatus[node] !== "unvisited") return nodeStatus[node] === "safe" /// --> alt solution


      nodeStatus[node] = "visited"      
      for (let i=0; i<graph[node].length; i++) { // ---> this so complicated w double arr, best to use other for loop
          let neigborNode = graph[node][i]
          if (nodeStatus[neigborNode] === "visited") return false
          if (dfs(neigborNode) === false) return false
      }
      //  for (let neighbor of graph[node]) {
      //     if (nodeStatus[neighbor] === "visited" || dfs(neighbor) === false) return false;  
      // }


      nodeStatus[node] = "safe"
      return true
  }


  for (let i=0; i<graph.length; i++) {
      if (dfs(i) === true) result.push(i)
  }


  return result
};
/**
  graph = [[1,2],[2,3],[5],[0],[5],[],[]]
  0 points to 1
      when i look at 1, i see it's not safe b/c the two nodes it pointed to, only one of them is safe
      1 points to 2 --- possibly safe, need to see what else it points to
          2 points to 5 -- so 2 is safe cuz it doesn't point to anything else
              5 points to null -- so 5 is safe
      1 points to 3 - not safe
          3 points to 0, which we started with (visited) so not safe
  0 points to 2
      we already said 2 is safe so don't need to go down this path --- need somewhere to mark already safe nodes, use arr
 
  children need to tell parents if they are safe
  parent will receive children's answers, and if ALL are safe, then parent is also safe, and can return safe to grandparent


  have a nodeStatus arr - filled with "unvisited"
      status can be unvisited, visited, safe


  dfs function takes a node. will return true/false if safe/not
      if node is a safe node, return true
      if node is a terminal node, mark as safe, return true


      otherwise node hasn't been visited yet
      mark node as visited


      loop thru node's neighbors
          if node has been visited, return false
          if node not visited, then do dfs. if dfs returns false return false
     
      if after done looping thru neighbors, i never returned false, that means all children are true
      so i should mark as safe and return true
     
*/
