/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

  An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

  Example 1:
  Input: s = "()"
  Output: true

  Example 2:
  Input: s = "()[]{}"
  Output: true

  Example 3:
  Input: s = "(]"
  Output: false

  Example 4:
  Input: s = "([])"
  Output: true

  Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 */

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function isValid1(s: string): boolean {
  const closingBrackets = new Map<string, string>();
  closingBrackets.set("(", ")");
  closingBrackets.set("{", "}");
  closingBrackets.set("[", "]");

  const stack: string[] = [];
  for (const char of s) {
    if (closingBrackets.has(char)) {
      stack.push(char);
    } else {
      if (
        stack.length === 0 ||
        char != closingBrackets.get(stack.pop() as string)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * Optimal solution (Interview)
 * @returns
 */
function isValid2(s: string): boolean {
  const stack: string[] = [];
  for (const char of s) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else {
      if (stack.length === 0 || stack.pop() != char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
