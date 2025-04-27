import arrayToString from "../utils/array-to-string";

/**
 * PROBLEM LINK: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * 
 * You are given an array of strings tokens that represents an arithmetic 
 * expression in a Reverse Polish Notation.

    Evaluate the expression. Return an integer that represents the 
    value of the expression.

    Note that:
        The valid operators are '+', '-', '*', and '/'.
        Each operand may be an integer or another expression.
        The division between two integers always truncates toward zero.
        There will not be any division by zero.
        The input represents a valid arithmetic expression in a reverse polish notation.
        The answer and all the intermediate calculations can be represented in a 32-bit integer.
    
    Example 1:
        Input: tokens = ["2","1","+","3","*"]
        Output: 9
        Explanation: ((2 + 1) * 3) = 9

    Example 2:
        Input: tokens = ["4","13","5","/","+"]
        Output: 6
        Explanation: (4 + (13 / 5)) = 6

    Example 3:
        Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
        Output: 22
        Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
        = ((10 * (6 / (12 * -11))) + 17) + 5
        = ((10 * (6 / -132)) + 17) + 5
        = ((10 * 0) + 17) + 5
        = (0 + 17) + 5
        = 17 + 5
        = 22
    

    Constraints:
        1 <= tokens.length <= 104
        tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

/**
 * @param tokens
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const operand1 = stack.pop() as number;
      const operand2 = stack.pop() as number;

      if (token === "+") {
        stack.push(operand2 + operand1);
      } else if (token === "-") {
        stack.push(operand2 - operand1);
      } else if (token === "*") {
        stack.push(operand2 * operand1);
      } else if (token === "/") {
        const value = operand2 / operand1;
        stack.push(value >= 0 ? Math.floor(value) : Math.ceil(value));
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop() as number;
}

// Driver code
function main() {
  const inputs = [
    ["2", "1", "+", "3", "*"],
    ["4", "13", "5", "/", "+"],
    ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
  ];
  const outputs = [9, 6, 22];

  for (let i = 0; i < inputs.length; i++) {
    console.log(`${i + 1}. Input string = ${arrayToString(inputs[i])}`);
    console.log(`   Desired Answer = ${outputs[i]}`);
    console.log(`   Actual Answer = ${evalRPN(inputs[i])}`);
    console.log("-".repeat(100));
  }
}

main();
