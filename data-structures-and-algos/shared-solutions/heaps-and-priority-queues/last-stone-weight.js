// time -- o(n log n)
/// space -- o(n) heap size
class Heap {
  heap;

  constructor() {
      this.heap = []
  }

  add(stone: number) {
      this.heap.push(stone)
      this.heapifyUp()
  }

  heapifyUp() { // time - o(log n) ?
      // the last element is what we added
      // compare last El to parent
          // if it's <= parent do nothing - exit loop
          // if it's greater than parent - swap

      let elIdx = this.heap.length-1
      let el = this.heap[elIdx]
      let parentIdx = Math.floor((elIdx-1)/2)
      let parentEl = this.heap[parentIdx]

      while (this.heap.length && el > parentEl) {  
          if (el <= parentEl) break
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
  
  heapifyDown() { // o(log n) b/c we only choose 1 path?
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
              if (leftChild > element) {
                  swap = leftChildIdx
              }
          }
          if (rightChildIdx < length) {
              rightChild = this.heap[rightChildIdx]
              if (
                  (swap === null && rightChild > element) ||
                  (swap !== null && rightChild > leftChild)
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

  getMax(): number {
      const max = this.heap[0]
      const end = this.heap.pop()
      if (this.heap.length > 0) {
          this.heap[0] = end
          this.heapifyDown()
      }

      return max || 0 // the || 0 is for if the heap is empty, return 0
  }
}
  
function lastStoneWeight(stones: number[]): number {
  let maxHeap = new Heap()

  stones.forEach((stone) => maxHeap.add(stone)) // n log n

  while (maxHeap.heap.length > 1) { // n

      let y = maxHeap.getMax()  // o(log n)
      let x = maxHeap.getMax() // o(log n)

      if (x !== y) {
          maxHeap.add(y-x) // o(log n)
      }
  }

  return maxHeap.getMax()
};

/**
  max heap - we can always find the 2 largest values
      first - max
      2nd - new max after you took the first max and reheapified

  get 1st and 2nd stones --- remove them from the heap
  (2nd stone is the lesser val (x))
  if x === y - destroy
      // remove x and y from heap
      do nothing - continue loop 
  if x !== y
      // remove x from heap
      // remove y from heap
      add y-x to heap and reheapifyUp

  if your heap length === 1 then you're at the end of the game, and return that value
  if no stones return 0
*/