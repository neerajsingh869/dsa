/**
 * PROBLEM LINK: https://leetcode.com/problems/sort-colors/description/
 * 
 * Given an array nums with n objects colored red, white, or 
 * blue, sort them in-place so that objects of the same color 
 * are adjacent, with the colors in the order red, white, and blue.

  We will use the integers 0, 1, and 2 to represent the color red, 
  white, and blue, respectively.

  You must solve this problem without using the library's 
  sort function.

  Example 1:
  Input: nums = [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]

  Example 2:
  Input: nums = [2,0,1]
  Output: [0,1,2]
  
  Constraints:
  n == nums.length
  1 <= n <= 300
  nums[i] is either 0, 1, or 2.
 */

  /**
 * @param nums
 * TC = O(n)
 * SC = O(1)
 */
function sortColors(nums: number[]): void {
  const n = nums.length;

  let end0 = 0;
  let end2 = n - 1;
  let current = 0;

  while (current <= end2) {
    if (nums[current] === 0) {
      let temp = nums[current];
      nums[current] = nums[end0];
      nums[end0] = temp;

      current++;
      end0++;
    } else if (nums[current] === 2) {
      let temp = nums[current];
      nums[current] = nums[end2];
      nums[end2] = temp;

      end2--;
    } else {
      current++;
    }
  }
}

/**
 * @param nums
 * TC = O(n)
 * SC = O(1)
 */
function sortColors2(nums: number[]): void {
  const n = nums.length;

  let low = 0; // Pointer where next 0 will be placed
  let high = n - 1; // Pointer where next 2 will be placed
  let current = 0; // Current pointer to traverse the array

  while (current <= high) {
    if (nums[current] === 0) {
      // Swap 0 to its correct position and move both pointers forward
      [nums[current], nums[low]] = [nums[low], nums[current]];

      current++;
      low++;
    } else if (nums[current] === 2) {
      // Swap 2 to its correct position and move the high pointer backward
      [nums[current], nums[high]] = [nums[high], nums[current]];

      high--; // Don't move `current` because the swapped value needs to be checked
    } else {
      // If the number is 1, it's already in the correct position
      current++;
    }
  }
}

/**
 * @param nums
 * TC = O(n)
 * SC = O(1)
 * Optimal solution (Interview)
 */
function sortColors3(nums: number[]): void {
  const n = nums.length;

  let end0 = 0;
  let end2 = n - 1;
  let current = 0;

  while (current <= end2) {
    if (nums[current] === 0) {
      [nums[current++], nums[end0++]] = [nums[end0], nums[current]];
    } else if (nums[current] === 2) {
      [nums[current], nums[end2--]] = [nums[end2], nums[current]];
    } else {
      current++;
    }
  }
}

// Driver code
const inputs = [
  [0, 1, 0],
  [1, 1, 0, 2],
  [2, 1, 1, 0, 0],
  [2, 2, 2, 0, 1, 0],
  [2, 1, 1, 0, 1, 0, 2],
];

for (let i = 0; i < inputs.length; i++) {
  console.log(
    i + 1 + ".\tcolors:",
    inputs[i],
    "\n\n\tThe sorted array is:",
    sortColors3(inputs[i])
  );

  console.log("-".repeat(100));
}
