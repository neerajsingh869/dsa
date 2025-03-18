import { ListNode } from "../utils/linked-list-function-way";

/**
 * PROBLEM LINK: https://leetcode.com/problems/remove-linked-list-elements/description/
 * 
 * Given the head of a linked list and an integer val, 
 * remove all the nodes of the linked list that has Node.val == val, 
 * and return the new head.

  Example 1:
  Input: head = [1,2,6,3,4,5,6], val = 6
  Output: [1,2,3,4,5]

  Example 2:
  Input: head = [], val = 1
  Output: []

  Example 3:
  Input: head = [7,7,7,7], val = 7
  Output: []

  Constraints:
  The number of nodes in the list is in the range [0, 104].
  1 <= Node.val <= 50
  0 <= val <= 50
 */

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
// Rebuild by inserting node at head in reverse order
function removeElements1(head: ListNode | null, val: number): ListNode | null {
  const stack: ListNode[] = [];
  let curr = head;

  // Push all nodes except those with the target value onto the stack
  while (curr !== null) {
    if (curr.val !== val) {
      stack.push(curr);
    }
    curr = curr.next;
  }

  // Rebuild the list from the stack
  let newHead: ListNode | null = null;
  while (stack.length > 0) {
    const node = stack.pop()!;
    node.next = newHead;
    newHead = node;
  }

  return newHead;
}

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  let newHead: ListNode | null = null;
  let newTail: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr != null) {
    if (curr.val != val) {
      if (newHead === null) {
        newHead = curr;
        newTail = newHead;
      } else {
        newTail!.next = curr;
        newTail = curr;
      }
    }

    curr = curr.next;
  }

  // Edge case: When remove last node
  if (newTail !== null) {
    newTail.next = null;
  }

  return newHead;
}

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function removeElements3(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head;
  }

  const tempNode = removeElements3(head.next, val);

  if (head.val === val) {
    return tempNode;
  }

  head.next = tempNode;
  return head;
}

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function removeElements4(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head;
  }

  // Recursively remove elements from the rest of the list
  head.next = removeElements4(head.next, val);

  // Remove the current node if it matches the value
  return head.val === val ? head.next : head;
}

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
// A sentinel node is a dummy node, often used at the beginning or end (or both)
// of a list, that simplifies operations like insertion, deletion, and traversal
// by acting as a placeholder and avoiding null checks
function removeElements5(head: ListNode | null, val: number): ListNode | null {
  // Use dummy node (sentinal node) to handle edge cases
  let dummy: ListNode = { val: -1, next: null };

  let curr = head;
  let newTail = dummy;
  while (curr != null) {
    if (curr.val != val) {
      newTail.next = curr;
      newTail = curr;
    }

    curr = curr.next;
  }

  // Edge case: When remove last node
  newTail.next = null;

  return dummy.next;
}

/**
 * @param head
 * @param val
 * TC = O(n)
 * SC = O(1)
 * Optimal approach (Interview)
 * @returns
 */
// Algorithm is similar to deleting a middle node of linked list
function removeElements6(head: ListNode | null, val: number): ListNode | null {
  // Use dummy node (sentinal node) to handle edge cases
  let dummy: ListNode = { val: -1, next: null };
  dummy.next = head;

  let curr = head;
  let prev = dummy;
  while (curr != null) {
    if (curr.val === val) {
      // Remove the current node
      prev.next = curr.next;
    } else {
      // Move the prev pointer forward
      prev = curr;
    }

    curr = curr.next;
  }

  return dummy.next;
}
