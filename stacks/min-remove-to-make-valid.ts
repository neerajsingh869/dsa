/**
 * PROBLEM LINK: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
 * 
 * Given a string s of '(' , ')' and lowercase English characters.

  Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) 
  so that the resulting parentheses string is valid and return any valid string.

  Formally, a parentheses string is valid if and only if:
    It is the empty string, contains only lowercase characters, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.
  

  Example 1:
    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

  Example 2:
    Input: s = "a)b(c)d"
    Output: "ab(c)d"

  Example 3:
    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.
  

  Constraints:
    1 <= s.length <= 105
    s[i] is either '(' , ')', or lowercase English letter.
 */

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function minRemoveToMakeValid1(s: string): string {
  let stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(i);
    } else if (s.charAt(i) === ")") {
      if (stack.length !== 0 && s.charAt(stack[stack.length - 1]) === "(") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  let output = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (stack.length !== 0 && i === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    output = s.charAt(i) + output;
  }

  return output;
}

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
// More efficient considering the fact that strings are immutable in JS
function minRemoveToMakeValid2(s: string): string {
  let stack: number[] = [];
  let input: string[] = Array.from(s);

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    if (currentChar === "(") {
      stack.push(i);
    } else if (currentChar === ")") {
      if (stack.length !== 0 && input[stack[stack.length - 1]] === "(") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  while (stack.length !== 0) {
    input[stack[stack.length - 1]] = "";
    stack.pop();
  }

  return input.join("");
}

// Driver code
function main() {
  let inputs = [
    "ar)ab(abc)abd(",
    "a)rt)lm(ikgh)",
    "aq)xy())qf(a(ba)q)",
    "(aw))kk())(w(aa)(bv(wt)r)",
    "(qi)(kl)((y(yt))(r(q(g)s)",
  ];
  
  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + `. Input: "${inputs[i]}"`);
    console.log(
      `   Valid parentheses, after minimum removal: "${minRemoveToMakeValid2(
        inputs[i]
      )}"`
    );
    console.log("-".repeat(100));
  }
}

main();
