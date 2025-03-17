/**
 * PROBLEM: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is possibly rotated at 
  an unknown pivot index k (1 <= k < nums.length) such that the resulting 
  array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
   (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
   and become [4,5,6,7,0,1,2].

  Given the array nums after the possible rotation and an integer target, 
  return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

  Example 3:
  Input: nums = [1], target = 0
  Output: -1

  Constraints:
  1 <= nums.length <= 5000
  -104 <= nums[i] <= 104
  All values of nums are unique.
  nums is an ascending array that is possibly rotated.
  -104 <= target <= 104
 */

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function search1(nums: number[], target: number): number {
  const n = nums.length;

  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Target is in first half
    if (target >= nums[low]) {
      if (nums[mid] < target && nums[mid] >= nums[low]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Target is in second half
      if (nums[mid] > target && nums[mid] <= nums[high]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function search2(nums: number[], target: number): number {
  const n = nums.length;

  // Step 1: Find the pivot (smallest element)
  let low = 0;
  let high = n - 1;
  let pivot = low;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[high] >= nums[low]) {
      if (nums[pivot] > nums[low]) {
        pivot = low;
      }
      break;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[pivot] > nums[low]) {
        pivot = low;
      }

      low = mid + 1;
    } else {
      if (nums[pivot] > nums[mid]) {
        pivot = mid;
      }

      high = mid - 1;
    }
  }

  // Step 2: Perform binary search on the appropriate half
  low = 0;
  high = n - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const realMid = (mid + pivot) % n; // Adjust mid for rotation

    if (nums[realMid] === target) {
      return realMid;
    } else if (nums[realMid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function search3(nums: number[], target: number): number {
  const n = nums.length;

  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // First half is sorted
    if (nums[low] <= nums[mid]) {
      // Target exists in first half
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // Second half is sorted
      // Target exists in second half
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(log(n))
 * @returns
 */
// Recursive approach to solve the problem
function search4(nums: number[], target: number): number {
  return search4Recursive(nums, 0, nums.length - 1, target);
}

function search4Recursive(
  nums: number[],
  low: number,
  high: number,
  target: number
): number {
  if (low > high) return -1;

  const mid = low + Math.floor((high - low) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  // First half is sorted
  if (nums[low] <= nums[mid]) {
    // Target exists in first half
    if (target >= nums[low] && target < nums[mid]) {
      return search4Recursive(nums, low, mid - 1, target);
    }

    return search4Recursive(nums, mid + 1, high, target);
  } else {
    // Second half is sorted
    // Target exists in second half
    if (target > nums[mid] && target <= nums[high]) {
      return search4Recursive(nums, mid + 1, high, target);
    }

    return search4Recursive(nums, low, mid - 1, target);
  }
}

// Driver code
function main() {
  let numsList = [
    [5, 6, 7, 1, 2, 3, 4],
    [40, 50, 60, 10, 20, 30],
    [47, 58, 69, 72, 83, 94, 12, 24, 35],
    [77, 82, 99, 105, 5, 13, 28, 41, 56, 63],
    [48, 52, 57, 62, 68, 72, 5, 7, 12, 17, 21, 28, 33, 37, 41],
  ];

  let targetList = [1, 50, 12, 56, 5];

  for (let i = 0; i < targetList.length; i++) {
    console.log(
      i + 1 + ".\tSorted array: ",
      "[" + numsList[i].join(", ") + "]",
      "\n\ttarget",
      targetList[i],
      "found at index ",
      search3(numsList[i], targetList[i])
    );
    console.log("-".repeat(100));
  }
}

main();
