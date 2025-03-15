/**
 * PROBLEM LINK: https://leetcode.com/problems/first-bad-version/description/
 * 
 * You are a product manager and currently leading a team to develop 
 * a new product. Unfortunately, the latest version of your product 
 * fails the quality check. Since each version is developed based on 
 * the previous version, all the versions after a bad version are also bad.

  Suppose you have n versions [1, 2, ..., n] and you want to find out 
  the first bad one, which causes all the following ones to be bad.

  You are given an API bool isBadVersion(version) which returns whether 
  version is bad. Implement a function to find the first bad version. 
  You should minimize the number of calls to the API.

  Example 1:
  Input: n = 5, bad = 4
  Output: 4
  Explanation:
  call isBadVersion(3) -> false
  call isBadVersion(5) -> true
  call isBadVersion(4) -> true
  Then 4 is the first bad version.

  Example 2:
  Input: n = 1, bad = 1
  Output: 1
  
  Constraints:
  1 <= bad <= n <= 231 - 1
 */

/**
 * @param isBadVersion
 * TC = O(log(n)) assuming TC of isBadVersion(version) is O(1)
 * SC = O(1)
 * @returns
 */
function firstBadVersion1(isBadVersion: any) {
  return function (n: number): number {
    let firstBadVersion = 1;

    // Index way to replicate binary search pattern
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (isBadVersion(mid + 1)) {
        firstBadVersion = mid + 1;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return firstBadVersion;
  };
}

/**
 * @param isBadVersion
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function firstBadVersion2(isBadVersion: any) {
  return function (n: number): number {
    // Index way to replicate binary search pattern
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (isBadVersion(mid + 1)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // low will be the last good version
    return low + 1;
  };
}

/**
 * @param isBadVersion
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function firstBadVersion3(isBadVersion: any) {
  return function (n: number): number {
    let low = 1;
    let high = n;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (isBadVersion(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };
}
