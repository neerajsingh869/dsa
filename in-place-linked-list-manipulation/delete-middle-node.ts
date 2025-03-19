import { ListNode } from "../utils/linked-list-function-way";

/**
 * PROBLEM LINK: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
 * 
 * You are given the head of a linked list. Delete the middle node, 
 * and return the head of the modified linked list.

  The middle node of a linked list of size n is the ⌊n / 2⌋th node 
  from the start using 0-based indexing, where ⌊x⌋ denotes the 
  largest integer less than or equal to x.

  For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
  
  Example 1:

  Input: head = [1,3,4,7,1,2,6]
  Output: [1,3,4,1,2,6]

  Example 2:
  Input: head = [1,2,3,4]
  Output: [1,2,4]

  Example 3:
  Input: head = [2,1]
  Output: [2]
  
  Constraints:
  The number of nodes in the list is in the range [1, 105].
  1 <= Node.val <= 105
 */

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function deleteMiddle1(head: ListNode | null): ListNode | null {
  // Handle edge cases: empty list or single node
  if (head === null || head.next === null) {
    return null;
  }

  // Count the number of nodes
  let count = 0;
  let curr: ListNode | null = head;
  while (curr != null) {
    count++;
    curr = curr.next;
  }

  // Find the node before the middle node
  curr = head;
  for (let i = 0; i < Math.floor(count / 2) - 1; i++) {
    curr = curr!.next;
  }

  // Delete the middle node
  curr!.next = curr!.next!.next;
  return head;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function deleteMiddle2(head: ListNode | null): ListNode | null {
  // Handle edge cases: empty list or single node
  if (head === null || head.next === null) {
    return null;
  }

  let fast: ListNode | null = head.next.next;
  let slow: ListNode | null = head;
  while (fast != null && fast.next != null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Slow will point to node before the middle node so delete it now
  slow!.next = slow!.next!.next;
  return head;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function deleteMiddle3(head: ListNode | null): ListNode | null {
  // Handle edge cases: empty list or single node
  if (head === null || head.next === null) {
    return null;
  }

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null; // To track the node before the middle node
  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Delete the middle node
  prev!.next = slow!.next;
  return head;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * Optimal solution (Interview)
 * @returns
 */
function deleteMiddle4(head: ListNode | null): ListNode | null {
  // Handle edge cases: empty list or single node
  if (head === null || head.next === null) {
    return null;
  }

  // const dummy: ListNode = {val: -1, next: null};
  // dummy.next = head;
  const dummy: ListNode = { val: -1, next: head };
  let fast: ListNode | null = head;
  let slow: ListNode | null = dummy; // To track the node before the middle node
  while (fast != null && fast.next != null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Delete the middle node
  slow!.next = slow!.next!.next;
  return dummy.next;
}
