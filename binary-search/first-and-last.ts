/**
 * PROBLEM LINK: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * 
 * Given an array of integers nums sorted in non-decreasing order, 
 * find the starting and ending position of a given target value.

  If target is not found in the array, return [-1, -1].

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

  Example 2:
  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]

  Example 3:
  Input: nums = [], target = 0
  Output: [-1,-1]

  Constraints:
  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums is a non-decreasing array.
  -109 <= target <= 109
 */

/**
 * @param nums
 * @param target
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function searchRange1(nums: number[], target: number): number[] {
  const n = nums.length;

  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      if (firstIndex === -1) {
        firstIndex = i;
      }

      lastIndex = i;
    }
  }

  return [firstIndex, lastIndex];
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function searchRange2(nums: number[], target: number): number[] {
  const n = nums.length;

  let firstIndex = -1;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        firstIndex = mid;
      }

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  let lastIndex = -1;
  low = 0;
  high = n - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        lastIndex = mid;
      }

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return [firstIndex, lastIndex];
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function searchRange3(nums: number[], target: number): number[] {
  const n = nums.length;

  function binarySearch(findFirst: boolean): number {
    let index = -1;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (nums[mid] === target) {
        index = mid;

        findFirst ? (high = mid - 1) : (low = mid + 1);
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return index;
  }

  let firstIndex = binarySearch(true);
  let lastIndex = binarySearch(false);

  return [firstIndex, lastIndex];
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function searchRange4(nums: number[], target: number): number[] {
  const n = nums.length;

  // let firstIndex = findFirstIndex(nums, 0, n - 1, target);
  // let lastIndex = findLastIndex(nums, 0, n - 1, target);

  let firstIndex = findIndex(nums, true, 0, n - 1, target);
  let lastIndex = findIndex(nums, false, 0, n - 1, target);

  return [firstIndex, lastIndex];
}

// Recursive function to find first index
function findFirstIndex(
  nums: number[],
  low: number,
  high: number,
  target: number
): number {
  if (low > high) {
    return -1;
  }

  const mid = low + Math.floor((high - low) / 2);
  let firstIndex = -1;
  if (nums[mid] >= target) {
    let tempFirstIndex = findFirstIndex(nums, low, mid - 1, target);

    if (tempFirstIndex != -1) {
      firstIndex = tempFirstIndex;
    } else {
      if (nums[mid] === target) {
        firstIndex = mid;
      }
    }
  } else {
    firstIndex = findFirstIndex(nums, mid + 1, high, target);
  }

  return firstIndex;
}

// Recursive function to find last index
function findLastIndex(
  nums: number[],
  low: number,
  high: number,
  target: number
): number {
  if (low > high) {
    return -1;
  }

  const mid = low + Math.floor((high - low) / 2);
  let lastIndex = -1;
  if (nums[mid] <= target) {
    let tempLastIndex = findLastIndex(nums, mid + 1, high, target);

    if (tempLastIndex != -1) {
      lastIndex = tempLastIndex;
    } else {
      if (nums[mid] === target) {
        lastIndex = mid;
      }
    }
  } else {
    lastIndex = findLastIndex(nums, low, mid - 1, target);
  }

  return lastIndex;
}

// Recursive function to find first as well as last index
function findIndex(
  nums: number[],
  findFirst: boolean,
  low: number,
  high: number,
  target: number
): number {
  if (low > high) {
    return -1;
  }

  let index = -1;

  const mid = low + Math.floor((high - low) / 2);
  if (nums[mid] === target) {
    // findFirst
    //   ? (index = findIndex(nums, findFirst, low, mid - 1, target))
    //   : (index = findIndex(nums, findFirst, mid + 1, high, target));

    index = findIndex(
      nums,
      findFirst,
      findFirst ? low : mid + 1,
      findFirst ? mid - 1 : high,
      target
    );

    if (index === -1) {
      index = mid;
    }
  } else if (nums[mid] > target) {
    index = findIndex(nums, findFirst, low, mid - 1, target);
  } else {
    index = findIndex(nums, findFirst, mid + 1, high, target);
  }

  return index;
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * Optimal solution (Interview - Easy to explain)
 * @returns
 */
function searchRange5(nums: number[], target: number): number[] {
  const firstIndex = getIndex1(nums, target, true);
  const lastIndex = getIndex1(nums, target, false);

  return [firstIndex, lastIndex];
}

function getIndex1(nums: number[], target: number, findFirst: boolean): number {
  const n = nums.length;

  let index = -1;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      index = mid;
      findFirst ? (end = mid - 1) : (start = mid + 1);
    }
  }

  return index;
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * Optimal solution (Interview - Harder to explain than previous solution)
 * @returns
 */
function searchRange6(nums: number[], target: number): number[] {
  const firstIndex = getIndex2(nums, target, true);
  const lastIndex = getIndex2(nums, target, false);

  return [firstIndex, lastIndex];
}

function getIndex2(nums: number[], target: number, findFirst: boolean): number {
  const n = nums.length;

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      findFirst ? (end = mid - 1) : (start = mid + 1);
    }
  }

  // Edge case: When target does not exists in the array
  if (nums[start] != target && nums[end] != target) {
    return -1;
  }

  return findFirst ? start : end;
}
