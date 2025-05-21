class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Queue<T> {
  head: QueueNode<T> | null;
  tail: QueueNode<T> | null;
  private _size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  // Method to insert node at the end
  enqueue(value: T) {
    const newNode = new QueueNode<T>(value);
    this._size++;

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to delete node from the front
  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    this._size--;
    const dequeuedValue = this.head!.val;
    this.head = this.head!.next;

    if (this._size === 0) {
      this.tail = null;
    }

    return dequeuedValue;
  }

  // Method to get top element
  peek(): T | null {
    return this.head === null ? null : this.head.val;
  }

  // Method to check if queue is empty
  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }

  toString() {
    if (this.head === null) return "[]";

    let result = "[";
    let current = this.head;
    while (current.next !== null) {
      result += current.val + ",";
      current = current.next;
    }
    result += current.val + "]";
    return result;
  }
}
