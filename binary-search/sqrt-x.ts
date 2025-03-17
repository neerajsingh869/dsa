/**
 * PROBLEM LINK: https://leetcode.com/problems/sqrtx/description/
 * 
 * Given a non-negative integer x, return the square root of x 
 * rounded down to the nearest integer. The returned integer 
 * should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

  Example 1:
  Input: x = 4
  Output: 2
  Explanation: The square root of 4 is 2, so we return 2.

  Example 2:
  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since 
  we round it down to the nearest integer, 2 is returned.

  Constraints:
  0 <= x <= 231 - 1
 */

// NOTE: Integer square root of x <= x / 2 for x >= 2

/**
 * @param x
 * TC = O(sqrt(x))
 * SC = O(1)
 * @returns
 */
function mySqrt1(x: number): number {
  if (x < 2) return x; // Handle edge cases for 0 and 1

  let ans = 1;

  for (let num = 1; num <= x; num++) {
    if (num === Math.max(x / num)) {
      /** or (mid * mid === x) since division operation
       * is more expensive but there is chance of overflow */
      return num;
    } else if (num < Math.max(x / num)) {
      // or (mid * mid < x)
      ans = num;
    } else {
      break;
    }
  }

  return ans;
}

/**
 * @param x
 * TC = O(sqrt(x))
 * SC = O(1)
 * @returns
 */
function mySqrt2(x: number): number {
  if (x < 2) return x;

  let i = 1;
  while (i * i <= x) {
    i++;
  }

  return i - 1; // Return the floor of the square root
}

/**
 * @param x
 * TC = O(log(x))
 * SC = O(1)
 * Similar to finding last position of element in
 * sorted array problem (with little twist)
 * @returns
 */
function mySqrt3(x: number): number {
  if (x < 2) return x; // Handle edge cases for 0 and 1

  let ans = 1;

  let low = 1;
  // let high = x;
  let high = Math.floor(x / 2); // Reduce search space

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (mid === Math.floor(x / mid)) {
      /** or (mid * mid === x) since division operation
       * is more expensive but there is chance of overflow */
      return mid;
    } else if (mid < Math.floor(x / mid)) {
      // or (mid * mid < x)
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

/**
 * @param x
 * TC = O(log(x))
 * SC = O(1)
 * @returns
 */
function mySqrt(x: number): number {
  if (x < 2) return x; // Handle edge cases for 0 and 1

  let low = 1;
  let high = Math.floor(x / 2);

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (mid === Math.floor(x / mid)) {
      return mid;
    } else if (mid < Math.floor(x / mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high; // Return the floor of the square root
}
