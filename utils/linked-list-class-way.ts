class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Insert node at the head (private helper)
  private insertNodeAtHead(node: ListNode): void {
    node.next = this.head;
    this.head = node;
  }

  // Convert array to linked list
  arrayToLinkedList(input: number[]): void {
    for (let i = input.length - 1; i >= 0; i--) {
      let newNode = new ListNode(input[i]);
      this.insertNodeAtHead(newNode);
    }
  }

  // Get the length of the list
  getLength(): number {
    let length = 0;
    let current = this.head;
    while (current != null) {
      length++;
      current = current.next;
    }

    return length;
  }

  // Get node at position (0-based index)
  getNode(pos: number): ListNode | null | undefined {
    let current = this.head;
    let counter = 0;
    while (current != null) {
      if (counter === pos) {
        return current;
      }

      counter++;
      current = current.next;
    }

    return null; // Position out of bounds
  }

  // Display list as a string
  display(): string {
    let result = "";

    let temp = this.head;
    while (temp != null) {
      result += temp.val;
      temp = temp.next;
      if (temp != null) {
        result += ", ";
      }
    }
    result += "";

    return result;
  }
}
