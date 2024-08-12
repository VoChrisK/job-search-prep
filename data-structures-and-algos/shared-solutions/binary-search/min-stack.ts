// DONT EVEN NEED TO CREAT A STACKNODE CLASS - could just use another stack to track mins
// time for each function o(1)


class StackNode { // this class was created by us to help track val and prevMin
  val;
  prevMin;


  constructor(val, prevMin) {
      this.val = val;
      this.prevMin = prevMin
  }
}


class MinStack {
  min;
  stack;


  constructor() {
      this.min = null
      this.stack = []
  }


  push(val: number): void {
      let prevMin;
     
      if (this.min === null) { // edgecase for if this.min is null when we first build minSTack
          this.min = val
          prevMin = null
      }
      else if (val < this.min) {
          prevMin = this.min 
          this.min = val
      } else {
          prevMin = this.min
      }


      const newNode = new StackNode(val, prevMin) // {-2, null}, {0, -2}, { -3, -2}
      this.stack.push(newNode)
  }
  pop(): void {
      if (this.top() === this.min) {
           let topNode = this.stack[this.stack.length-1]
           this.min = topNode.prevMin
      }
      this.stack.pop()
  }


  top(): number {
      let topNode = this.stack[this.stack.length-1]
      return topNode.val
  }


  getMin(): number {
      return this.min
  }
}




/**
  new MinStack
      this.min = null --> -2 --> -3 --> -2
      this.stack = [
          { val: -2, prevMin: null}
          { val: 0, prevMin: -2}
          { val: -3, prevMin: -2} // GONE
      ]


*/


/**
// following the hint about considering each node in the stack having a minimun value
// our logic is that the node should store the previous min val so that if it's ever popped, it will 'point' to the next minVal


  [4,1,2,3,0] - node val --- ex of our stack values
  [4,1,1,1,0] - min val. -- ex of the corresponding prevMin
  // min = 0 , need to update min to 1
  // curMin = null


/// PUSH LOGIC
  node {
      this.val = 4
      this.prevMin = null --- if we updated the min, then this.prevMin is the previous Min
      if (this.val < curMin) {
          this.prevMin = curMin
          curMin = this.val
      }
  }
 
  // curMin = 4
  node {
      this.val = 1
      if (this.val < curMin) { // 1 < 4
          this.prevMin = 4
          curMin = 1
      }
  }
 
  // curMin = 1
  node {
      this.val = 2
      if (this.val < curMin) { // is 2 < 1
        
      } else {
          this.prevMin = 1
      }
  }


  // curMin = 1
  node {
      this.val = 3
      if (this.val < curMin) { // is 3 < 1
        
      } else {
          this.prevMin = 1
      }
  }


  // curMin = 1
  node {
      this.val = 0
      if (this.val < curMin) { // is 0 < 1 yes
          this.prevMin = curMin ---> this.prevMin = 1
          curMin = this.val --> curMin = 0
      } else {
     
      }
  }


  //curMin = 0




/// POP LOGIC
  this.min = 0
  node {
      this.val = 0
      this.prevMin = 1
  }


  [4,1]
  this.min = node.prevMin --- this.min = 4
  [4]
 
*/


/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
