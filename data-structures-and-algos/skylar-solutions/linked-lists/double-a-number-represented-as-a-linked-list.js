// time - o(n)
   // reversing list 2x - o(n)
// space - o(n)
   // constant space for a lot of the vars used
   // call stack space for doubleNum - length of linked list o(n) (pretty sure)
   var doubleIt = function(head) {
    let reversedList = reverseList(head)   
    let remainder = doubleNum(reversedList, 0)
    let list = reverseList(reversedList)
 
 
    if (remainder > 0) {
        let newNode = new ListNode(remainder, list)
        list = newNode
    }
 
 
    return list
 }
 
 
 function doubleNum(node, remainder) {
    if (!node) return remainder
 
 
    let doubledNum = node.val * 2 + remainder
    let newVal = doubledNum % 10
    let newRemainder = Math.floor(doubledNum/10)
    node.val = newVal
 
 
    return doubleNum(node.next, newRemainder) // need to return any remainders for next node to add to head
 }
 
 
 function reverseList(node) {
    let prev = null
    let cur = node
 
 
    while (cur) {
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
 
 
    return prev
 }
 
 
 /**
    so maybe instead:
    reverse LL
    recrusively go thru the reversed list
        multiply cur node val by 2, add remainder (passed in)
        keep the single digit
        carry over remainder to next call (tens place)
    this recrusive function needs to return an overall remainder, in case we need to add num to head of list
    reverse LL again
    if remainder is > 0, then will need to add new node to head
 */
 