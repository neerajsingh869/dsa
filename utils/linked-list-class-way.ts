class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  public head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Method to insert linked list node at head
  private insertNodeAtHead = function (node: ListNode) {
    node.next = this.head;
    this.head = node;
  };

  // Method to create the linked list using given integer array
  arrayToLinkedList = function (input: number[]) {
    for (let i = input.length - 1; i >= 0; i--) {
      let newNode = new ListNode(input[i]);
      this.insertNodeAtHead(newNode);
    }
  };

  // Method that returns the number of nodes in linked list
  getLength = function (head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current != null) {
      length++;
      current = current.next;
    }

    return length;
  };

  // Method that returns the node at the specified position(index) of the linked list
  getNode = function (head: ListNode | null, pos: number): ListNode | null | undefined {
    if (pos >= this.getLength(head) || pos < 0) {
      // Return undefined since the index does not exist
      // Will help the caller method to diagnose the issue
      return undefined;
    }

    let current = head;
    for (let i = 0; i < pos; i++) {
      current = current!.next;
    }

    return current;
  };

  // Method to display the elements of the linked list
  display = function (): string {
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
  };
}
