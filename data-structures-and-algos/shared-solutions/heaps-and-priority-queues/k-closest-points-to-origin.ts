// using a min heap
// time - o(n log n) to add everything to heap, then o(k log n) to make result arr ??? unsure
// space - o(n) for heap, o(k) for result arr --> o(n + k)
function kClosest(points: number[][], k: number): number[][] {
  let minHeap = []
  let result = []


  points.forEach((point) => {
      let distance = Math.sqrt(point[0]**2 + point[1]**2)
      addToMinHeap(minHeap, distance, point)
  })


  for(let i=0; i<k; i++) {
      let min = removeMinFromMinHeap(minHeap)
      result.push(min.point)
  }
 
  return result;
}


function addToMinHeap(heap, distance, point) { // o(log n)
  heap.push({ distance, point })
  minHeapBubbleUp(heap)
}


function minHeapBubbleUp(heap) {
  let elIdx = heap.length-1
  let el = heap[elIdx]


  while(elIdx > 0) {
      let parentIdx = Math.floor((elIdx-1)/2)
      let parentEl = heap[parentIdx]


      if (el.distance >= parentEl.distance) break;
      else {
          heap[parentIdx] = el
          heap[elIdx] = parentEl
          elIdx = parentIdx
      }
  }
}


function removeMinFromMinHeap(heap) { // o(log n)
  let min = heap[0]
 
  heap[0] = heap[heap.length-1]
  heap.pop()
  minHeapBubbleDown(heap)


  return min
}


function minHeapBubbleDown(heap) {
  let parentIdx = 0
  let parentEl = heap[parentIdx]


  while (true) {
      let leftChildIdx = 2*parentIdx + 1
      let leftChild = heap[leftChildIdx]
      let rightChildIdx = 2*parentIdx + 2
      let rightChild = heap[rightChildIdx]
      let leftChildExists = leftChildIdx < heap.length
      let rightChildExists = rightChildIdx < heap.length
      let swap = null
 
      if (leftChildExists && parentEl.distance > leftChild.distance) {
          swap = leftChildIdx
      }


      if (
          rightChildExists &&
          (
              (swap === null && parentEl.distance > rightChild.distance) ||
              (leftChild.distance > rightChild.distance && parentEl.distance > rightChild.distance)
          )
      ) {
          swap = rightChildIdx
      }


      if (swap === null) break


      heap[parentIdx] = heap[swap]
      heap[swap] = parentEl
      parentIdx = swap
  }
}
/**
  initial thoughts
      calc distance and sort (n log n), then iterate k times to return result


  faster (???) solution using heaps:
      loop through points, add to min heap
      loop through min heap k times
          add min to result
          remove min from heap
          re-heapify
              parent needs to check against left/right child
              need to check left/right existence
              swap with the greater child
*/
