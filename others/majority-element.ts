/**
 * PROBLEM LINK: https://leetcode.com/problems/majority-element/
 * 
 * Given an array nums of size n, return the majority element.

  The majority element is the element that appears more than ⌊n / 2⌋ times. 
  You may assume that the majority element always exists in the array.

  Example 1:
  Input: nums = [3,2,3]
  Output: 3

  Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2

  Constraints:
  n == nums.length
  1 <= n <= 5 * 104
  -109 <= nums[i] <= 109
  
  Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param nums
 * TC = O(n * log(n))
 * SC = O(1) in place sorting
 * @returns
 */
function majorityElement1(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const candidate = nums[Math.floor(nums.length / 2)];

  // Verify the candidate
  let count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  }

  return -1; // No majority element
}

/**
 * @param nums
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function majorityElement2(nums: number[]): number {
  let map = new Map<number, number>();

  // Using single traversal
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);

    if (Number(map.get(num)) > Math.floor(nums.length / 2)) {
      return num;
    }
  }

  return -1;
}

/**
 * @param nums
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function majorityElement(nums: number[]): number {
  const n = nums.length;

  let count = 0;
  let candidate = -1;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the candidate is major element
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > Math.floor(n / 2)) {
    return candidate;
  }

  return -1;
}
