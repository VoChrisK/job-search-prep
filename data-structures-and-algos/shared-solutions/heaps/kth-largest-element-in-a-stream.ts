// time - o(n log k) + m * o(log k) where m is the number of times "add" is called
// time - initialize o(n log k)
// time - add function is o(log k)
// space - o(k)

class KthLargest {
  heap = []
  k;

  constructor(kthIdx: number, nums: number[]) {
      this.k = kthIdx
      nums.forEach((num) => this.add(num)) // o (n log k)
  }

  add(num: number) {
      if (this.heap.length < this.k) {
          this.heap.push(num)
          this.bubbleUp() // log k
      }

      else if (num >= this.heap[0]) {
          this.heap.push(num)
          this.bubbleUp()
          this.removeMin() // to keep heap at length k
      }
      
      return this.heap[0] 
  }

  bubbleUp() { // o (log n) ?
      // compare last el (child el) to the parent
      // if child is is greater than parent, swap
      // otherwise it's done
      let elIdx = this.heap.length-1
      let el = this.heap[elIdx]
      let parentIdx = Math.floor((elIdx-1)/2)
      let parentEl = this.heap[parentIdx]

      while (this.heap.length && el < parentEl) {  
          if (el >= parentEl) break
          else {
              this.heap[parentIdx] = el
              this.heap[elIdx] = parentEl
              elIdx = parentIdx

              el = this.heap[elIdx]
              parentIdx = Math.floor((elIdx-1)/2)
              parentEl = this.heap[parentIdx]
          }
      }
  }

  removeMin() {
      // swap the first element with last
      // pop the last element
      // bubble down

      this.heap[0] = this.heap[this.heap.length-1]
      this.heap.pop()
      this.bubbleDown()
  }

  bubbleDown() { // o (log n) ?
      let idx = 0
      const length = this.heap.length
      const element = this.heap[0]

      while(true) {
          let leftChildIdx = 2*idx + 1
          let rightChildIdx = 2*idx + 2
          let leftChild, rightChild
          let swap = null

          if (leftChildIdx < length) {
              leftChild = this.heap[leftChildIdx]
              if (leftChild < element) {
                  swap = leftChildIdx
              }
          }
          if (rightChildIdx < length) {
              rightChild = this.heap[rightChildIdx]
              if (
                  (swap === null && rightChild < element) ||
                  (swap !== null && rightChild < leftChild)
              ) {
                  swap = rightChildIdx
              }
          }

          if (swap === null) break

          this.heap[idx] = this.heap[swap]
          this.heap[swap] = element
          idx = swap
      }
  }
}

/**
  3, [4, 5, 8, 2]

  2,4,5,8 --> heap is gonna be length 3 (k) --> min heap 4,5,8 ---> 5,5,8

  we want a min heap of length k
  when adding a number into heap
      if number is >= the min, then add into heap, return kth largest (the min of the heap --> top of heap)
      otherwise, we just don't add into heap cuz we don't care
*/