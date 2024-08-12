// https://www.lintcode.com/problem/659/

/*
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"

Input: ["we", "30", say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"

["2:30pm", "abc", ":4"]

:62:30pm:3abc:2:4

:1000:abcdefghij


*/


// encode - time o(n)
// space - o(1)

function encode(arr) {
  let encoded = ""
  arr.forEach((str) => {
    encoded += ':' + str.length + ':' + str 
  })

  return encoded
}

// encode(["2:30pmabcd", "abc", ":4"])



// decode - time o(n) ?
// space - o(1)

function decode(str) {
  let result = []
  if (str.length === 0) return ['']
  while (str.length) {
    if (str.charAt(0) === ':') { // if we correctly encoded, then we shouldn't even need this if statement
      let i = 1;
      let num = '';
      while(str.charAt(i) !== ':') {
        num += str.charAt(i) // 6000
        i++
      }
      let numLength = num.length // 4
      num = Number(num) // 6000

      let startIdx = 1+numLength+1 // first colon, number, closign colon
      let endIdx = startIdx + num
      let word = str.slice(startIdx,endIdx)

      str = str.slice(endIdx)
      
      result.push(word)
    }
  }
  
  return result
}

let encoded = encode(["2:30pmabcd", "abc", ":4"])
let decoded = decode(encoded)

console.log(encoded)
console.log(decoded)

// decode(":10:2:30pm1234:3:abc:2::4")