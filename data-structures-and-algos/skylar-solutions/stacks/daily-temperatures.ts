// time - o(n) (simplifed from o(2n))
// space - o(n)
function dailyTemperatures(temperatures: number[]): number[] {
  let result = Array(temperatures.length).fill(0); // KNOW THIS
  let stack = []
  temperatures.forEach((temp, i) => {
      let obj = { //instead of using hashmap to store idx, to prevent dup temps, just push whole obj into stack
          temp: temp,
          idx: i
      }
      while (stack.length && temp > stack[stack.length-1].temp) {
          let lastEl = stack.pop()
          let days = i - lastEl.idx
          result[lastEl.idx] = days
      }
      stack.push(obj)
  })


  // stack.forEach((tempObj) => { // don't need this since we've already initialized result Arr to 0
  //     result[tempObj.idx] = 0
  // })


  return result
};


/**
  [73,74,75,71,69,72,76,73]
  brute force - look at curEl, compare to nextEl and so on until finding a temp that's higher
  that could be o(n^2) cuz possibility of comparing every element to the right of curElemtn all the way to the end
 
  // using stacks
  // 72 is at idx 5
  69 // popped out -- hash[69] -- 4 ---  >> 5-4, result[69 idx] = 1
  71 // pop days = 5 - has[71] -- 5-3 = 2, result[71 idx] = 2
  75
  do this until done with the temp array
  when finsihed with temp array, the output for teh rest of teh stuff in teh stack is gonna be 0


  look at cur element, and compare to top element in stack
  //add curEl to hashamp with idx - instead of using hashmap to store idx, to prevent dup temps, just push whole obj into stack
  if curel > top el in stack
      pop the top ele out of stack (calc index)
  else curEl < top
      push the curElemnt into stack
 
*/
