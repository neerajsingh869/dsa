/**
 * PROBLEM LINK: https://leetcode.com/problems/binary-search/description/
 * 
 * Given an array of integers nums which is sorted in ascending order, 
 * and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

  Example 2:
  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1

  Constraints:
  1 <= nums.length <= 104
  -104 < nums[i], target < 104
  All the integers in nums are unique.
  nums is sorted in ascending order.
 */

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function search(nums: number[], target: number): number {
  const n = nums.length;

  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// Driver code
function main() {
  const inputs = [[1, 3, 5, 10, 12], [2, 10, 20, 40], [3], [4, 5]];
  const targets = [5, 100, 3, 5];

  for (let i = 0; i < targets.length; i++) {
    console.log(
      i + 1,
      ".\tInput:",
      "[" + inputs[i].join(", ") + "]",
      "\n\tTarget:",
      targets[i],
      "\n\tIndex:",
      search(inputs[i], targets[i])
    );

    console.log("-".repeat(100));
  }
}

main();
