// time - o(v+e) - possibly going thru all the nodes
// space - o(v) - visited arr is length isConnected nodes. call stack is o(v)?
var findCircleNum = function(isConnected) {
  let count = 0;
  let visited = new Array(isConnected.length).fill(false)


  function dfs(nodeIdx) {
      visited[nodeIdx] = true
      let neighbors = isConnected[nodeIdx] // [1,1,0] dun rly need this. neighbors.length always = isConnected.length since nxn


      for (let i=0; i<neighbors.length; i++) {
          let neighborConnectionVal = neighbors[i] // at i = 0, neighbor = 1
          if (!visited[i] && neighborConnectionVal === 1) dfs(i) // dfs(1)
      }
  }


  for (let i=0; i<isConnected.length; i++) {
      if (!visited[i]) {
          count++
          dfs(i) // 0
      }
  }


  return count
};
/**
  isConnected = [
  0    [1,1,0],
  1    [1,1,0],
  2    [0,0,1]]
 
  0 has connections to 0 and 1
  1 has connections to 0 and 1
  2 has connections to 2 (itself) -- so seems like things will always be marked as 1 for connected to itself


  do a dfs through the isConnected grid
  loop thru isConnected grid
      whenenver i start on a new element that wasn't thru dfs, that means it's a new province
          inc count
      when looping thru, can only dfs if it hasn't been visited yet AND if it's a 1 for connected
  return count


  dfs(node) - doesn't return anything, just updates visited arr
      mark node as visited
      loop thru it's children/neighbors
          if !visited yet, dfs through it
          if already visited, just skip over it
 
  vistied arr will be 1D where length is isConnected.length. the idx is the i val on isConnected
  using ex 1
  0 - inc count = 1
      mark 0 as visited
      loop thru children [1,1,0]
          1 (at idx 0) -- already marked as visited
          1 (at idx 1) - not visited adn is connected dfs thru it
              so 1 is [1,1,0]
              mark visited[1]
              1 (at idx 0) -- idx 0 is already visited, so skip
              1 (at idx 1) -- idx 1 is already visited, so skip
              0 - not a 1, so skip
             
          0 - not a 1, so skip
  dfs for i= 0 is down, now next in loop is i=1
  1 --- marked as visited, so skip
  2 -- inc count = 2
      [0,0,1]
      mark 2 as visited
      0 - skip
      0 - skip
      1 - at idx 2 which is already marked as visited
 
  WHAT IF - another ex
  isConnected = [
  0    [1,1,0],
  1    [1,1,1],
  2    [0,1,1]]


  0 - inc count = 1
      mark 0 as visited
      loop thru children [1,1,0]
          1 (at idx 0) -- already marked as visited
          1 (at idx 1) - not visited adn is connected dfs thru it
              so 1 is [1,1,0]
              mark visited[1]
              1 (at idx 0) -- idx 0 is already visited, so skip
              1 (at idx 1) -- idx 1 is already visited, so skip
              1 (at idx 2) -- idx 2 not visited, so dfs
                  idx 2 = [0,1,1]
                  mark 2 as visited
                  0 - not a 1 - skip
                  1 - at idx 1 which is visited - skip
                  1 - at idx 2 wchih is vistied - skip
          0 - not a 1, so skip
  dfs for 0 is done. next el in for loop
  1 - already visited
  2 - already visited
  return count = 1


*/
