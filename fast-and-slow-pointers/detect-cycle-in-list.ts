/**
 * 
 */

import { arrayToLinkedList, ListNode, printLinkedList } from "../utils/linked-list";

/**
 * @param head 
 * TC = O(n)
 * SC = O(1)
 * @returns 
 */
function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow!.next;

      if (fast === slow) {
          return true;
      }
  }

  return false;
};

// Driver code
const inputs = [
  [0, 1, 0],
  [1, 1, 0, 2],
  [2, 1, 1, 0, 0],
  [2, 2, 2, 0, 1, 0],
  [2, 1, 1, 0, 1, 0, 2],
];

for (let i = 0; i < inputs.length; i++) {
  const inputLinkedList = arrayToLinkedList(inputs[i]);
  console.log(i + 1 + ".\tLinked List:\t\t", printLinkedList(inputLinkedList));

  let result = hasCycle(inputLinkedList);

  console.log("\tHas Cycle:\t", result);
  console.log("-".repeat(100));
}