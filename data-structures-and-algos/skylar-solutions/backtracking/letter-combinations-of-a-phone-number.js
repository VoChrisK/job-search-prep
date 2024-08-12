// time - o(n * 4^n) where n is digits length
// space - o(4^n)


// solution 2 - 5/1/24
var letterCombinations = function(digits) {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let result = []


  if (!digits) return [] // edge case


  function backtrack(str, digIdx) {
      if (str.length === digits.length) {
          result.push(str.join(''))
          return
      }
      let digit = digits.charAt(digIdx)
      let letters = map[digit]


      for (let i=0; i<letters.length; i++) { // diff b/w this soln and alt is that this just passes digIdx instead of using 2 for loops
          let letter = letters.charAt(i)


          str.push(letter)
          backtrack(str, digIdx+1)
          str.pop()
      }
  }


  backtrack([], 0)


  return result
}
