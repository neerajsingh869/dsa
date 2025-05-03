/**
 * PROBLEM LINK: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 * 
 * You are given a string s consisting of lowercase English letters. 
 * A duplicate removal consists of choosing two adjacent and equal letters and removing them.

    We repeatedly make duplicate removals on s until we no longer can.

    Return the final string after all such duplicate removals have been made. 
    It can be proven that the answer is unique.

    Example 1:
        Input: s = "abbaca"
        Output: "ca"
        Explanation: 
        For example, in "abbaca" we could remove "bb" since the letters are adjacent 
        and equal, and this is the only possible move.  The result of this move is 
        that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

    Example 2:
        Input: s = "azxxzy"
        Output: "ay"

    Constraints:
        1 <= s.length <= 105
        s consists of lowercase English letters.
 */

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
// USE THIS APPROACH IN INTERVIEW
function removeDuplicates1(s: string): string {
  let stack: string[] = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();  // Found duplicate pair
    } else {
      stack.push(char); // New unique character
    }
  }

  return stack.join("");  // Convert stack to result string
}

/**
 * @param s
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function removeDuplicates2(s: string): string {
  const n = s.length;
  let resultArray = Array.from(s);

  let i = 0;
  for (let j = 0; j < n; j++, i++) {
    resultArray[i] = resultArray[j];

    if (i > 0 && resultArray[i] === resultArray[i - 1]) {
      i = i - 2;
    }
  }

  return resultArray.join("").substring(0, i);
}

// Driver code
function main() {
  let inputs = [
    "g",
    "ggaabcdeb",
    "abbddaccaaabcd",
    "aannkwwwkkkwna",
    "abbabccblkklu",
  ];
  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + `.\tRemove duplicates from string: '${inputs[i]}'`);
    let resultingString = removeDuplicates2(inputs[i]);
    console.log("\tString after removing duplicates:", resultingString);
    console.log("-".repeat(100));
  }
}

main();
