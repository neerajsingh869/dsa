/**
 * PROBLEM LINK: https://leetcode.com/problems/remove-nodes-from-linked-list/description/
 * 
 * You are given the head of a linked list.

  Remove every node which has a node with a greater value anywhere to the right side of it.

  Return the head of the modified linked list.

  Example 1:
  Input: head = [5,2,13,3,8]
  Output: [13,8]
  Explanation: The nodes that should be removed are 5, 2 and 3.
  - Node 13 is to the right of node 5.
  - Node 13 is to the right of node 2.
  - Node 8 is to the right of node 3.

  Example 2:
  Input: head = [1,1,1,1]
  Output: [1,1,1,1]
  Explanation: Every node has value 1, so no nodes are removed.
  
  Constraints:
  The number of the nodes in the given list is in the range [1, 105].
  1 <= Node.val <= 105
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

/**
 * @param head 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
function removeNodes1(head: ListNode | null): ListNode | null {
  let curr = head;
  let stack: ListNode[] = [];

  while (curr != null) {
    while (stack.length > 0 && curr.val > stack[stack.length - 1].val) {
      stack.pop();
    }

    stack.push(curr);
    curr = curr.next;
  }

  while (stack.length) {
    let node = stack.pop() as ListNode;
    node.next = curr;
    curr = node;
  }

  return curr;
}

/**
 * @param head 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
function removeNodes2(head: ListNode | null): ListNode | null {
  if (head === null) {
      return head;
  }

  const tempHead = removeNodes2(head.next);
  head.next = tempHead;

  if (tempHead === null || head.val >= tempHead.val) {
      return head;
  }

  return head.next;
};

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function removeNodes3(head: ListNode | null): ListNode | null {
  // Reverse the linked list
  const newHead = reverseList(head);

  let dummy = new ListNode(-Infinity);
  dummy.next = newHead;

  // Filter nodes
  let prev = dummy;
  let curr = newHead;
  let prevMax = dummy;

  while (curr != null) {
    if (curr.val >= prevMax.val) {
      // Update prevMax and move prev forward
      prevMax = curr;
      prev = curr;
    } else {
      // Remove the current node
      prev.next = curr.next;
    }

    curr = curr.next;
  }

  // Reverse the list again to restore the original order & return new head
  return reverseList(dummy.next);
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function removeNodes4(head: ListNode | null): ListNode | null {
  // Reverse the linked list
  const newHead = reverseList(head);

  // Filter nodes
  let prev: ListNode | null = null;
  let curr = newHead;
  let prevMaxVal = -Infinity;

  while (curr != null) {
    if (curr.val >= prevMaxVal) {
      // Update prevMaxVal and move prev forward
      prevMaxVal = curr.val;
      prev = curr;
    } else {
      // Remove the current node
      prev!.next = curr.next;
    }

    curr = curr.next;
  }

  // Reverse the list again to restore the original order & return new head
  return reverseList(newHead);
}
