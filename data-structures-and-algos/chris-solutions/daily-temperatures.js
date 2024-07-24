/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let stack = [];
  let res = new Array(stack.length);


  for(let i = 0; i < temperatures.length; i++) {
      let temp = {
          temp: temperatures[i],
          idx: i
      }
      let top = stack[stack.length - 1];


      if (top && temperatures[i] > top.temp) {


          while(stack.length > 0 && temperatures[i] > top.temp) {
              let prevTemp = stack.pop();
              res[prevTemp.idx] = i - prevTemp.idx;
              top = stack[stack.length - 1];
          }
      }


      stack.push(temp);
  }


  while(stack.length > 0) {
      let prevTemp = stack.pop();
      res[prevTemp.idx] = 0
  }


  return res;
};


/**
  push stack when we have a lower value,
  if we have a value greater than the top value of the stack,
  we push until we can no longer push from stack or top of the stack has a value greater than it.


  create an object
  {
      temp: number,
      idx: number
  }
*/
