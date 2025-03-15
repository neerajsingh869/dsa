/**
 * PROBLEM LINK: https://leetcode.com/problems/reverse-linked-list/
 * 
 * Given the head of a linked list, reverse the list and return the 
 * new head of the reversed list.

  The linked list is represented by a sequence of ListNodes, where each 
  node points to the next node in the sequence, or null if it is the last node.

  A ListNode has the following interface:

  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  Input
  head: ListNode: Head of the linked list. Examples display each linked 
  list as an array of values within the list

  Examples
  Input: list = [1,2,3,4,5]
  Output: [5,4,3,2,1]
  Explanation: The input list [1, 2, 3, 4, 5] creates a linked list that,
  when reversed, produces [5, 4, 3, 2, 1].

  Input: list = []
  Output: []
  Explanation: The input list is empty, so the reversed linked list is also empty.

  Constraints
  1 <= Number of nodes <= 1000
  -1000 <= ListNode.val <= 100
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(n)
 * Recursive approach
 * @returns
 */
function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseList1(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * Iterative approach (Best approach to solve the problem)
 * @returns
 */
function reverseList2(head: ListNode | null): ListNode | null {
  let currentNode = head;
  let previousNode: ListNode | null = null;
  while (currentNode != null) {
    const nextNode = currentNode.next;

    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}
