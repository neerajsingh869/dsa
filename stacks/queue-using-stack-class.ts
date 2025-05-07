import Stack from "./stack-class";

// Simple approach to build queue using 2 stacks
class MyQueue<T> {

  stack1: Stack<T>;
  stack2: Stack<T>;

  // constructor to initialize two stacks
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(x: T) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop() as T);
    }

    this.stack1.push(x);

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop() as T);
    }
  }

  pop(): T | null {
    return this.stack1.pop();
  }

  peek(): T | null {
    return this.stack1.peek();
  }

  empty() {
    return this.stack1.isEmpty();
  }
}

// Efficient implementation of Queue using 2 stacks
class QueueUsingStacks<T> {
  pushStack: Stack<T>;  // To store element using push method
  otherStack: Stack<T>;  // For pop, peek, and isEmpty methods

  // constructor to initialize two stacks
  constructor() {
    this.pushStack = new Stack();
    this.otherStack = new Stack();
  }

  push(value: T) {
    this.pushStack.push(value);

    return null;
  }

  pop(): T | null {
    if (this.otherStack.isEmpty()) {
      // Efficient way of transfering elements since
      // this will happen once in a while, not each time
      this._transferFromPush();
    }

    return this.otherStack.pop();
  }

  peek(): T | null {
    if (this.otherStack.isEmpty()) {
      // Efficient way of transfering elements since
      // this will happen once in a while, not each time
      this._transferFromPush();
    }

    return this.otherStack.peek();
  }

  isEmpty(): boolean {
    return this.pushStack.isEmpty() && this.otherStack.isEmpty();
  }

  _transferFromPush() {
    while (!this.pushStack.isEmpty()) {
      this.otherStack.push(this.pushStack.pop() as T);
    }
  }
}