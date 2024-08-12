// time - o(v+e) cuz possibly going thru every node (v) once
// space - o(v) b/c of my 2 arrays (and call stack??)
var canVisitAllRooms = function(rooms) {
  let visited = new Array(rooms.length).fill(false)
  let hasKey = new Array(rooms.length).fill(false)
  hasKey[0] = true


  function dfs(roomIdx) {
      visited[roomIdx] = true
      let room = rooms[roomIdx]


      for (let i=0; i<room.length; i++) {
          let neighbor = room[i]
          if (!visited[neighbor]) dfs(neighbor)
      }
  }


  for (let i=0; i<rooms.length; i++) {
      if (!visited[i] && hasKey[i]) dfs(i) // where i is the room idx
  }


  for (let i=0; i<visited.length; i++) {
      if (!visited[i]) return false
  }


  return true
};
/**
  5/1/24
  rooms = [[1,3],[3,0,1],[2],[0]]
  loop thru the rooms
      if room hasn't been visited and we have the key to it - NEED TO INITIALIZE hasKey[0] to true
          we can enter the room and dfs the rooms within it (neighbors)
 
  within our dfs function
      doesn't return anything, just needs to update vistied arr
      mark room as visited
      loop thru the room's children (neighbors)
 
  after looping thru all rooms and dfs-ing
  go thru visited arr - if there is a false, that means it wasn't able to be visted, ret false
  else return true


  see prev submission for walkthru of dfs
*/
