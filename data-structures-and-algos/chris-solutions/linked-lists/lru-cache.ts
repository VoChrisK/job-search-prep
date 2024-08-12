class Node {
  key: number;
  val: number;
  prev: Node;
  next: Node;


  constructor(key: number, val: number) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}


class DoublyLinkedList {
  head: Node;
  tail: Node;


  constructor() {
      this.head = new Node(-1, -1);
      this.tail = new Node(-2, -2);


      this.head.next = this.tail;
      this.tail.prev = this.head;
  }


  addNode(node: Node) {
      node.prev = this.tail.prev;
      this.tail.prev.next = node;
      node.next = this.tail;
      this.tail.prev = node;
  }


  deleteNode(node: Node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
  }


  deleteFromHead() {
      if (this.head.next === this.tail) return;


      let temp = this.head.next;
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;


      temp.next = null;
      temp.prev = null;


      return temp
  }
}


class LRUCache {
  doublyLinkedList: DoublyLinkedList;
  hashMap;
  capacity: number;
  currentSize: number;


  constructor(capacity: number) {
      this.doublyLinkedList = new DoublyLinkedList();
      this.hashMap = {};
      this.capacity = capacity;
      this.currentSize = 0;
  }


  get(key: number): number {
      if (key in this.hashMap) {
          this.doublyLinkedList.deleteNode(this.hashMap[key]);
          this.doublyLinkedList.addNode(this.hashMap[key]);
          return this.hashMap[key].val;
      } else {
          return -1;
      }
  }


  put(key: number, value: number): void {
      if (key in this.hashMap) {
          this.hashMap[key].val = value;
          this.doublyLinkedList.deleteNode(this.hashMap[key]);
          this.doublyLinkedList.addNode(this.hashMap[key]);
      } else {
          let newNode = new Node(key, value);


          this.doublyLinkedList.addNode(newNode); //add to the tail a.k.a. most recently used
          this.hashMap[key] = newNode;
          this.currentSize++;
      }


      if (this.currentSize > this.capacity) {
          let temp = this.doublyLinkedList.deleteFromHead(); // deletes from head a.k.a. least recently used
          delete this.hashMap[temp.key];
          this.currentSize--;
      }
  }
}


/**
  keep track of minimum count and key associated with it


  every time we get or put, check the count of the current val and if it < min, set minCount and newKey


  map
      key: value
 
  keep track of head and tail of LL,
  use hashmap to keep track of the mapping of nodes


  when we get a value, use hashmap to get to the node,


  move that node to the end of the list and update tail, update the node before it to point to the new node


  1 <-> 2 <-> 3


  if its not in hashmap, return -1 for get


  PUT:


  - check the length of the hashmap:
      if it's within length,
          we can update the value of the node
          else add to tail if we don't update an existing value
      if it's over length, then we remove the head from LL and hashmap, and set the head to be next one,
          and add to the tail and set new tail
     


  where value is an object (actual value and count)


  LRUCache lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // 1=1}
  lRUCache.put(2, 2); // {1=1, 2=2}
  lRUCache.get(1);    // {2=2, 1=1}
  lRUCache.put(3, 3); // {1=1, 3=3}
  lRUCache.get(2);    // -1
  lRUCache.put(4, 4); // {3=3, 4=4}
  lRUCache.get(1);    // -1
  lRUCache.get(3);    // {4=4, 3=3}
  lRUCache.get(4);    // {3=3, 4=4}
*/
