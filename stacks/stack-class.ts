/**
 * Implement Stack with following method: 
 *   - push(value) => push element in stack at the top and returns null (TC = O(1))
 *   - pop() => removes top element from the stack and returns it (TC = O(1))
 *   - peek() => returns top element of the stack (TC = O(1))
 *   - isEmpty() => return true if stack is empty, false otherwise  (TC = O(1))
 */

class Stack<T> {
  stack: T[];

  constructor() {
    this.stack = [];
  }

  push(value: T) {
    this.stack.push(value);

    return null;
  }

  pop(): T | null {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack.pop() as T;
  }

  peek(): T | null {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0 ? true : false;
  }
}

export default Stack;