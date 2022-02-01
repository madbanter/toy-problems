
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

var reverseListStack = function(head) {
  if (head.next === null) {
    return head;
  }
  let cursor = head;
  let stacked = [];
  while (cursor !== null) {
    stacked.push(cursor);
    cursor = cursor.next;
  }
  let newHead = stacked.pop();
  cursor = newHead;
  while (stacked.length > 0) {
    cursor.next = stacked.pop();
    cursor = cursor.next;
  }
  cursor.next = null;
  return newHead;
};

var reverseList = function(head) {
  let cursor = head;
  while (cursor !== null) {
    cursor = cursor.next;
  }
  let newHead = cursor;
  let newTail = head;
  cursor = newTail.next
	let prev = newTail;
	while (cursor.next !== null) {
		let next = cursor.next;
		cursor.next = prev;
		prev = cursor;
		cursor = next;
	}
	newTail.next = null;
	return newHead;
};

