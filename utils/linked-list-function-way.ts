export interface ListNode {
  val: number;
  next: ListNode | null;
  visited?: boolean;
}

// Function to return linked list in readable format
export function printLinkedList(head: ListNode | null): string {
  let current = head;
  let result = "";

  while (current != null) {
    result += current.val;
    current = current.next;
    if (current) {
      result += " → ";
    } else {
      result += " → null";
    }
  }

  return result;
}

// Function to return linked list in loop
export function printLinkedListLoop(head: ListNode | null): string {
  let current = head;
  let result = "";

  while (current != null) {
    result += current.val;
    current = current.next;
    if (current) {
      result += " → ";
    }
  }

  return result;
}

// Function to transform array into linked list
export function arrayToLinkedList(input: number[]): ListNode | null {
  let head: ListNode | null = null;

  input.reverse().forEach((val) => {
    const current: ListNode | null = { val: val, next: null };
    current.next = head;
    head = current;
  });

  return head;
}

// Function to transform linked list into array
export function linkedListToArray(head: ListNode | null): number[] {
  let result: number[] = [];

  let current = head;
  while (current != null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Function to return the length of linked list
export function getLength(head: ListNode | null): number {
  let length = 0;
  let current = head;
  while (current != null) {
    length++;
    current = current.next;
  }

  return length;
}

// Function to return the node at a specific position
export function getNode(head: ListNode | null, pos: number): ListNode | null {
  if (pos >= getLength(head) || pos < 0) {
    return null;
  }

  let current = head;
  for (let i = 0; i < pos; i++) {
    current = current!.next;
  }

  return current;
}
