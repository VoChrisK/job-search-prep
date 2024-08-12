// time log(m*n)
// time log(m*n)
// space o(1)


function searchMatrix(matrix: number[][], target: number): boolean {
  let rowLength = matrix.length
  let colLength = matrix[0].length


  let left = 0
  let right = rowLength * colLength - 1


  while (left <= right) {
      let mid = Math.floor((left+right)/2)


      let iMid = Math.floor(mid/colLength)
      let jMid = mid % colLength
     
      if (target < matrix[iMid][jMid]) {
          right = mid-1
      } else if (target > matrix[iMid][jMid]) {
          left = mid+1
      } else {
          return true
      }
  }


  return false
}
/**
  converting 1D idx to 2D
  0 - 0,0
  1 - 0,1
  2 - 0,2
  3 - 0,3
  4 - 1,0
  5 - 1,1
  6 - 1,2


  idx / colLength == i -- 6/4 - 1 i
  idx % colLength == j -- 6%4 - 2 j


*/
/**
  converting 2D idx to 1D
  rows = 3, cols = 4
  2D to 1D
  0,0 - 0
  0,1 - 1
  0,2 - 2
  0,3 - 3
  1,0 - 4
  1,1 - 5


  i * Columlength + j
  */
/**
  treat whole matrix as 1 single aray
  do binary serach using the 1D arr
  but convert to 2D idx when checking target
*/


// first we find the array to look thru, then we do bin search within arr
// time o(log m) + o(log n)
// space o(1)
function searchMatrix2(matrix: number[][], target: number): boolean {
  let columnsLength = matrix[0].length
  let left = 0
  let right = matrix.length-1


  while (left <= right) {
      let midArrIdx = Math.floor((left+right)/2)


      if (target < matrix[midArrIdx][0]) {
          right = midArrIdx-1
      } else if (target > matrix[midArrIdx][columnsLength-1]) {
          left = midArrIdx+1
      } else if (target >= matrix[midArrIdx][0] && target <= matrix[midArrIdx][columnsLength-1]) {
          return binarySearch(matrix[midArrIdx], target)
      }
  }


  return false


};


// // time o(log n)
// // space o(1)
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) { // <= ex. account for if we have 1 element
      let mid = Math.floor((left + right)/2) // 1


      if (target > arr[mid]) {
          left = mid+1
      } else if (target < arr[mid]) {
          right = mid-1
      } else {
          return true
      }
   }


   return false
}
/**
  bin search with 2D array
  find the middle array (i)
  if target is less than first el in array [i][0], we only look at the arrays before this
      move the p2 to be the last el of the array before this -- [i-1][i length-1]


  if target is greater than last el in array [i][i length -1], we only look at arrays after this
      move the p1 to be the first el of teh next arr -- [i+1][0]
 
  if target is greater than the first el in array [i][0] and less than the last el of the middle arry
      do binary search for this middle array
      // split this into new function
*/
