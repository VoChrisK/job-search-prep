// time - m*n + m*n + m*n ===> m*n
// space - o(m*n) for our rottenOranges q
function orangesRotting(grid: number[][]): number {
  let minutes = 0
  let rottenOranges = []
  for (let i=0; i<grid.length; i++) {
      for (let j=0; j<grid[i].length; j++) {
          if (grid[i][j] === 2) { 
              rottenOranges.push([i,j])
          }
      }
  }

  minutes = rottenOranges.length ? bfs(rottenOranges, grid) : 0 // accounts for empty grid

  for (let i=0; i<grid.length; i++) {
      for (let j=0; j<grid[i].length; j++) {
          if (grid[i][j] === 1) { 
              return -1
          }
      }
  }

  return minutes
};

function bfs(q, grid): number {
  let minutes = 0;

  while (q.length) {
      let len = q.length
      minutes++
      for (let k=0;  k<len; k++) {
          let orange = q.shift()
          let i = orange[0]
          let j = orange[1]

          let neighbors = [[-1,0], [0,1], [1,0], [0,-1]] // see comments for alt way of checking neighbors
          neighbors.forEach((nei) => {
              let neiI = i + nei[0]
              let neiJ = j + nei[1]

              if (neiI >=0 && neiI <grid.length && neiJ >=0 && neiJ <grid[i].length) {
                  if (grid[neiI][neiJ] === 1) {
                      q.push([neiI, neiJ])
                      grid[neiI][neiJ] = 2
                  }
              }
          })
      }
  }

  return minutes - 1;
}
/**
  find ALL the rotten oranges
  pass the rottenOranges into our bfs as our starting q
  loop thru grid one more time
      if there is a fresh orange, return -1
  otherwise done looping thru grid, return the min minutes
  
  bfs
  while there is a q length
      set a len = current length 
      increase min before the for loop 
      for loop for the len         
          pop from q
          top
          right - push into q
          bot - push into q
          left
  
          // alt way of checking neighbors
          // // top
          // if (i-1 >=0 && grid[i-1][j] === 1) {
          //     q.push([i-1,j])
          //     grid[i-1][j] = 2
          // }
          // // right
          // if (j+1 < grid[i].length && grid[i][j+1] === 1) {
          //     q.push([i,j+1])
          //     grid[i][j+1] = 2
          // }
          // // bot
          // if (i+1 < grid.length && grid[i+1][j] === 1) {
          //     q.push([i+1,j])
          //     grid[i+1][j] = 2
          // }
          // // left
          // if (j-1 >=0 && grid[i][j-1] === 1) {
          //     q.push([i,j-1])
          //     grid[i][j-1] = 2
          // }
*/