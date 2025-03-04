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
    if (this.head != null) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  };

  // Method to create the linked list using given integer array
  arrayToLinkedList = function (input: number[]) {
    input.reverse().forEach((element) => {
      let newNode = new ListNode(element);
      this.insertNodeAtHead(newNode);
    });
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
  getNode = function (head: ListNode | null, pos: number): ListNode | null {
    if (pos >= this.getLength(head) || pos < 0) {
      return null;
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
      result += temp.data;
      temp = temp.next;
      if (temp != null) {
        result += ", ";
      }
    }
    result += "";
    
    return result;
  };
}
