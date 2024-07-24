/**
* @param {character[][]} board
* @return {boolean}
*/
// 10/27/23
// time - running thru board 3x - o(3n) - o(n) -- but we know board size, so o(1) constant
// space - creating set each time (3 times) - but we know board size, so o(1) constant
// there's another valid solution from june 2022 that uses sets for each box and calcs what set to add to


function isValidSudoku(board) {
  if (checkRow(board) === false) return false
  if (checkCol(board) === false) return false
  if (checkBox(board) === false) return false


  return true
}


function checkRow(board) {
  for(let i=0; i<9; i++) {
      let set = new Set()
      for(let j=0; j<9; j++) {
          if (set.has(board[i][j])) return false
          else if (board[i][j] !== '.') {
              set.add(board[i][j])
          }
      }


  }   
  return true
}


function checkCol(board) {
  for(let j=0; j<9; j++) {
      let set = new Set()
      for(let i=0; i<9; i++) {
          if (set.has(board[i][j])) return false
          else if (board[i][j] !== '.') {
              set.add(board[i][j])
          }
      }


  }
 
  return true
}


function checkBox(board) {
  let coordinates = [
      [1,1],
      [1,4],
      [1,7],


      [4,1],
      [4,4],
      [4,7],
     
      [7,1],
      [7,4],
      [7,7]
  ]




  for(let i=0; i<9; i++) {
      // [i-1][j-1], [i-1][j], [i-1][j+1], [i][j+1],
      // [i+1][j+1], [i+1][j], [i+1][j-1], [i-1][j]
      let row = coordinates[i][0]
      let col = coordinates[i][1]


      let set = new Set()
      if (board[row][col] !== '.') set.add(board[row][col])


// top left
      if (set.has(board[row-1][col-1])) return false
      else if(board[row-1][col-1] !== '.') {
          set.add(board[row-1][col-1])
      }


// top
      if (set.has(board[row-1][col])) return false
      else if(board[row-1][col] !== '.') {
          set.add(board[row-1][col])
      }
    // top right 
      if (set.has(board[row-1][col+1])) return false
      else if(board[row-1][col+1] !== '.') {
          set.add(board[row-1][col+1])
      }
     
      // right
      if (set.has(board[row][col+1])) return false
      else if(board[row][col+1] !== '.') {
          set.add(board[row][col+1])
      }
     
      // bot right
      if (set.has(board[row+1][col+1])) return false
      else if(board[row+1][col+1] !== '.') {
          set.add(board[row+1][col+1])
      }
     
      // bot
      if (set.has(board[row+1][col])) return false
      else if(board[row+1][col] !== '.') {
          set.add(board[row+1][col])
      }
     
      // bot left
      if (set.has(board[row+1][col-1])) return false
      else if(board[row+1][col-1] !== '.') {
          set.add(board[row+1][col-1])
      }
     
      // left
      if (set.has(board[row][col-1])) return false
      else if(board[row][col-1] !== '.') {
          set.add(board[row][col-1])
      }
  }


  return true
}


// check rows
/**
  loop thru the arrays inside board
  create a set, add num, if set has, that means it's a repeated digit, return false
*/
// check colums
/**
  loop thru the board - same as rows, but look at cols
  board[i][j] -- keep the j for same colum, change i
  create a set, add num, if set has, that means it's a repeated digit, return false
*/


// check squares
/**
  loop and check only each square
  outer lop 3, inner loop 3 - for the i/j index
  keep track of the 'starting' square so that we know what the enxt starting square is
  create set, add num


- we'll have a loop that goes thru the surrounding squares
  [1][1]
  [1][4]
  [1][7]


  [4][1]
  [4][4]
  [4][7]
 
  [7][1]
  [7][4]
  [7][7]


  [i-1][j-1], [i-1][j], [i-1][j+1], [i][j+1], [i+1][j+1], [i+1][j], [i+1][j-1], [i-1][j]
*/
