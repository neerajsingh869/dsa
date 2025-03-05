import {
  arrayToLinkedList,
  ListNode,
  printLinkedList,
} from "../utils/linked-list-function-way";

/**
 * PROBLEM LINK: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * 
 * Given the head of a linked list, remove the nth node from the 
 * end of the list and return its head.

  Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

  Example 2:
  Input: head = [1], n = 1
  Output: []

  Example 3:
  Input: head = [1,2], n = 1
  Output: [1]
  
  Constraints:
    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz
  */

/**
 * @param head
 * @param n
 * TC = O(k)  k = length of linked list
 * SC = O(1)
 * Single Pass
 * @returns
 */
function removeNthNodeFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let right = head;
  let counter = 0;
  // Move right pointer n steps forward
  while (right != null) {
    if (counter === n) {
      break;
    }

    right = right.next;
    counter++;
  }

  // If right reaches null, return head's next node
  if (!right) return head!.next;

  /**
   * Otherwise, move both left and right pointers forward
   * til right reaches the last node
   */
  let left = head;
  while (right.next != null) {
    right = right.next;
    left = left!.next;
  }

  /**
   * Update the left.next to point to left.next.next,
   * which in turn removes nth node
   */
  if (left != null && left.next != null) {
    left.next = left.next.next;
  }

  // Return head
  return head;
}

// Driver Code
function main() {
  const inputs = [
    [1, 4],
    [1, 2, 3, 4, 5],
    [2, 7, 1, 3, 2, 6, 7, 4],
    [3, 8, 9, 4, 9, 2, 3, 4, 3, 6],
    [3, 7, 5, 10, 6, 9, 8, 1, 2, 7],
    [7, 2, 3, 10, 10, 7, 2, 6, 6, 5],
  ];

  const n = [2, 2, 1, 10, 7, 4];

  for (let i = 0; i < inputs.length; i++) {
    const inputLinkedList = arrayToLinkedList(inputs[i]);
    console.log(
      i + 1 + ".\tLinked List:\t\t",
      printLinkedList(inputLinkedList)
    );

    console.log("\tn = " + n[i]);
    let result = removeNthNodeFromEnd(inputLinkedList, n[i]);

    console.log("\tUpdated Linked List:\t", printLinkedList(result));
    console.log("-".repeat(100));
  }
}

main();
