import {
  arrayToLinkedList,
  ListNode,
  printLinkedList,
} from "../utils/linked-list";

/**
 * PROBLEM LINK: https://leetcode.com/problems/middle-of-the-linked-list/description/
 * 
 * Given the head of a singly linked list, return the middle 
 * node of the linked list.

  If there are two middle nodes, return the second middle node.

  Example 1:
  Input: head = [1,2,3,4,5]
  Output: [3,4,5]
  Explanation: The middle node of the list is node 3.

  Example 2:
  Input: head = [1,2,3,4,5,6]
  Output: [4,5,6]
  Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
  
  Constraints:
  The number of nodes in the list is in the range [1, 100].
  1 <= Node.val <= 100
 */

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  return slow;
}

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

  let result = middleNode(inputLinkedList);

  console.log("\tMiddle Node:\t", result!.val);
  console.log("-".repeat(100));
}
