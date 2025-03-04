import {
  arrayToLinkedList,
  getLength,
  getNode,
  ListNode,
  printLinkedList,
  printLinkedListLoop,
} from "../utils/linked-list-function-way";

/**
 * PROBLEM LINK: https://leetcode.com/problems/linked-list-cycle/description/
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

  There is a cycle in a linked list if there is some node in the list that 
  can be reached again by continuously following the next pointer. Internally, 
  pos is used to denote the index of the node that tail's next pointer is 
  connected to. Note that pos is not passed as a parameter.

  Return true if there is a cycle in the linked list. Otherwise, return false.

  Example 1:
  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

  Example 2:
  Input: head = [1,2], pos = 0
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

  Example 3:
  Input: head = [1], pos = -1
  Output: false
  Explanation: There is no cycle in the linked list.

  Constraints:
  The number of the nodes in the list is in the range [0, 104].
  -105 <= Node.val <= 105
  pos is -1 or a valid index in the linked-list.
 */

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
}

// Driver code
function main() {
  const input = [
    [2, 4, 6, 8, 10, 12],
    [1, 3, 5, 7, 9, 11],
    [0, 1, 2, 3, 4, 6],
    [3, 4, 7, 9, 11, 17],
    [5, 1, 4, 9, 2, 3],
  ];

  const pos = [0, -1, 1, -1, 2];

  for (let i = 0; i < input.length; i++) {
    const inputLinkedList = arrayToLinkedList(input[i]);

    console.log(i + 1 + ".\tInput:");
    if (pos[i] === -1) {
      console.log("\t", printLinkedList(inputLinkedList));
    } else {
      console.log("\t", printLinkedListLoop(inputLinkedList));
    }

    console.log("\tpos: ", pos[i]);
    if (pos[i] != -1) {
      const length = getLength(inputLinkedList);
      let lastNode = getNode(inputLinkedList, length - 1);
      lastNode!.next = getNode(inputLinkedList, pos[i]);
    }

    const result = hasCycle(inputLinkedList) ? "True" : "False";

    console.log("\n\tHas cycle =", result);
    console.log("-".repeat(100), "\n");
  }
}

main();
