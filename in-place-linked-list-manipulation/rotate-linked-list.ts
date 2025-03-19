import { ListNode } from "../utils/linked-list-function-way";

/**
 * PROBLEM LINK: https://leetcode.com/problems/rotate-list/description/
 * 
 * Given the head of a linked list, rotate the list to the right by k places.

  Example 1:
  Input: head = [1,2,3,4,5], k = 2
  Output: [4,5,1,2,3]
  
  Example 2:
  Input: head = [0,1,2], k = 4
  Output: [2,0,1]

  Constraints:
  The number of nodes in the list is in the range [0, 500].
  -100 <= Node.val <= 100
  0 <= k <= 2 * 109
 */

/**
 * @param head
 * @param k
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function rotateRight1(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let length = 0;
  let curr: ListNode | null = head;
  let lastNode: ListNode | null = head;
  while (curr != null) {
    if (curr.next === null) {
      lastNode = curr;
    }

    length++;
    curr = curr.next;
  }

  const updatedK = k % length;
  if (updatedK === 0) {
    // There is no rotation
    return head;
  }

  let position = 1;
  curr = head;
  let prevNewHeadNode: ListNode | null = null;
  while (curr != null) {
    if (position === length - updatedK) {
      prevNewHeadNode = curr;
      break;
    }

    position++;
    curr = curr.next;
  }

  // Rotate the linked list
  lastNode.next = head;
  head = prevNewHeadNode!.next;
  prevNewHeadNode!.next = null;

  // Return updated head of rotated linked list
  return head;
}

/**
 * @param head
 * @param k
 * TC = O(n)
 * SC = O(1)
 * Optimal solution (Interview)
 * @returns
 */
function rotateRight2(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let length = 1;
  let tail: ListNode | null = head;
  while (tail.next != null) {
    tail = tail!.next;
    length++;
  }

  k = k % length;
  if (k === 0) {
    // There is no rotation
    return head;
  }

  let prev: ListNode | null = head;
  for (let i = 0; i < length - k - 1; i++) {
    prev = prev!.next;
  }

  // Rotate the linked list
  const newHead = prev!.next;
  tail.next = head; // Connect the original tail to the original head
  prev!.next = null; // Break the list

  // Return the new head
  return newHead;
}
