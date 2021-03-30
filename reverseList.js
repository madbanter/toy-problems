
/*
reverseList.js
---
PROMPT
---
Reverse a singly linked list.
A linked list can be reversed either iteratively or recursively. Try to implement both.
---
EXAMPLE
---
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
  let cursor = head;
  let newTail = null;
  while (cursor.next !== newTail) {
    cursor = cursor.next;
  }
  let newHead = cursor;
  newTail = cursor;
  while (newTail !== head) {
    cursor = head;
    while (cursor.next !== newTail) {
      cursor = cursor.next;
    }
    newTail.next = cursor;
    newTail = newTail.next;
  }
  newTail.next = null;
  return newHead;
};
