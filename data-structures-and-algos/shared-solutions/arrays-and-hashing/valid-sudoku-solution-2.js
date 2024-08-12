var isValidSudoku = function(board) {
  let row = new Set();
  for (let i=0; i<board.length; i++) {
      for (let j=0; j<board[i].length; j++) {
          let number = board[i][j]
          if (number !== "." && !row.has(number)) row.add(number)
          else if (number !== "." && row.has(number)) return false
      }
      row.clear();
  }
  
  let col = new Set();
  for (let i=0; i<board.length; i++) {
      for (let j=0; j<board[i].length; j++) {
          let number = board[j][i]
          if (number !== "." && !col.has(number)) col.add(number)
          else if (number !== "." && col.has(number)) return false
      }
      col.clear()
  }
  
  let sets = []
  for (let i=0; i<3; i++) {
      sets.push([])
      for (let j=0; j<3; j++) {
          sets[i].push(new Set())
      }
  }
  
  for(let i=0; i<board.length; i++) {
      for(let j=0; j<board[i].length; j++) {
          let row = Math.floor(i/3)
          let col = Math.floor(j/3)
          
          let number = board[i][j]
          if (number !== "." && !sets[row][col].has(number)) sets[row][col].add(number)
          else if (number !== "." && sets[row][col].has(number)) return false            
      }
  }
  
  return true  
};

// go thru every row, put nums in hashmap
// if there's a collision, return false
// do this for every row, column, and 3x3 square
// at the end return true

// board
// row = board[i] -- loop thru put into hashSet
  // if not "." and not in set then put into hashSet
  // if not "." and in set, return false
  
// col same thing
// for the grid
  // 
  // 9 hash sets
  // get the correct set by dividing by 3 for j coordinate
      // 0/3 -- 0, 3/3 -- 1, etc
      // for i coord flor(i/3) * 3