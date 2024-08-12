// time - o(n) since we're looping thru nums 2x
// space - o(n) b/c of our set
function longestConsecutive(nums) {
  // set stores each of the consecutive nums
  // 2 loops
  // first loop stores each num in set
  // 2nd loop goes thru nums again, for each el, we check if 100+1 or 100-1 is in the set
      // while next num, increase count
      // while prevnum, increase count


  let set = new Set()
  nums.forEach(num => {
      set.add(num)
  })


  let count = 1;
  let maxCount = 0;
  nums.forEach(num => {
      count = 1
      let nextNum = num+1
      while(set.has(nextNum)) {
          count++
          set.delete(nextNum)
          nextNum++
      }


      let prevNum = num-1
      while(set.has(prevNum)) {
          count++
          set.delete(prevNum)
          prevNum--
      }


      set.delete(num)


      maxCount = Math.max(count, maxCount)
  })


  return maxCount
}


//this solution works, but is too slow (not o(n)) b/c the arr we're making is too big adn we end up looping thru teh whole thing
// var longestConsecutive = function(nums) {
//     let minNum = Number.MAX_SAFE_INTEGER
//     let maxNum = 0;
//     nums.forEach((num) => {
//         maxNum = Math.max(num, maxNum)
//         minNum = Math.min(num, minNum)
//     })


//     let arr = new Array(2 * maxNum + 1) // [-5, , ,-2,-1,0,1,2, , , ,] // 5
//     minNum = minNum*-1


//     nums.forEach(num => {
//         let idx = minNum + num
//         arr[idx] = num
//     })


//     let maxCount = 0
//     let count = 0;


//     for (let i=0; i <arr.length; i++) {
//         if ( arr[i] !== undefined) {
//             count++
//             maxCount = Math.max(maxCount, count)
//         } else {
//             count = 0
//         }
//     }


//     return maxCount;
// };
/**
[1,2,3,4, , , ,100,200]
  maxC = 4, and count = 4
*/




/**
  sorting is o(n log n) - slower of o(n). cuz faster sorting algo is n log n


  define new array with length of max num in nums
  loop thru nums and store the value at the index of that value (ex val is 200, store at idx 200)
  go thru the new arr and find the largest subchunk that's not empty
*/
