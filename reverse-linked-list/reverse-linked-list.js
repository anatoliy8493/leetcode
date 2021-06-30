/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  /*
    prev [1]
    current [2,3,4,5]
    ----------
    prev [2,1]
    current [3,4,5]
    ----------
    prev [3,2,1]
    current [4,5]
    ----------
    prev [4,3,2,1]
    current [5]
    ----------
    prev [5,4,3,2,1]
    current null
  */
  let current = head;
  let prev = null;
  
  while (current !== null) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  
  return prev;
};