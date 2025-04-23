import arrayToString from "../utils/array-to-string";
import printMatrix from "../utils/print-matrix";

/**
 * PROBLEM LINK: https://leetcode.com/problems/spiral-matrix/
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.

  Example 1:
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

  Example 2:
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

  Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
 */

/**
 * @param matrix
 * TC = O(m * n)
 * SC = O(m * n)
 * @returns
 */
function spiralOrder1(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  const isVisited: boolean[][] = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(false));
  const rowDirs = [0, 1, 0, -1];
  const colDirs = [1, 0, -1, 0];
  let direction = 0; // 0 -> left to right, 1 -> top to bottom, ...
  let row = 0,
    col = 0;
  const result = new Array(m * n).fill(null);
  let count = 0;

  while (count < m * n) {
    result[count++] = matrix[row][col];
    isVisited[row][col] = true;

    const nextRow = row + rowDirs[direction];
    const nextCol = col + colDirs[direction];
    if (
      nextRow >= m ||
      nextRow < 0 ||
      nextCol >= n ||
      nextCol < 0 ||
      isVisited[nextRow][nextCol]
    ) {
      // Change direction when current direction is no longer valid
      direction = (direction + 1) % 4;
    }

    row += rowDirs[direction];
    col += colDirs[direction];
  }

  return result;
}

/**
 * @param matrix
 * TC = O(m * n)
 * SC = O(1)
 * @returns
 */
// Best approach
function spiralOrder3(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;

  // Set up pointers to traverse the matrix
  let row = 0;
  let col = -1;

  // Set the initial direction to 1 for moving left to right
  let direction = 1;
  let result: number[] = [];

  while (m > 0 && n > 0) {
    // Move horizontally in one of two directions:
    //   1. Left to right (if direction == 1)
    //   2. Right to left (if direction == -1)
    // Increment the col pointer to move horizontally
    for (let i = 0; i < n; i++) {
      col += direction;
      result.push(matrix[row][col]);
    }
    m--;

    // Move vertically in one of two directions:
    //   1. Top to bottom (if direction == 1)
    //   2. Bottom to top (if direction == -1)
    // Increment the row pointer to move vertically
    for (let i = 0; i < m; i++) {
      row += direction;
      result.push(matrix[row][col]);
    }
    n--;

    // Flip the direction for the next traversal
    direction *= -1;
  }

  return result;
}

/**
 * @param matrix
 * TC = O(m * n)
 * SC = O(1)
 * @returns
 */
function spiralOrder2(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  const rowDirs = [0, 1, 0, -1];
  const colDirs = [1, 0, -1, 0];
  let direction = 0; // 0 -> left to right, 1 -> top to bottom, ...
  let rowSt = 0,
    rowEnd = m - 1;
  let colSt = 0,
    colEnd = n - 1;
  let row = 0,
    col = 0;
  const result = new Array(m * n).fill(null);
  let count = 0;

  while (count < m * n) {
    result[count++] = matrix[row][col];

    const nextRow = row + rowDirs[direction];
    const nextCol = col + colDirs[direction];
    if (
      nextRow > rowEnd ||
      nextRow < rowSt ||
      nextCol > colEnd ||
      nextCol < colSt
    ) {
      // Change direction when current direction is no longer valid
      direction = (direction + 1) % 4;

      switch (direction) {
        case 0:
          colSt++;
          break;
        case 1:
          rowSt++;
          break;
        case 2:
          colEnd--;
          break;
        case 3:
          rowEnd--;
          break;
        default:
          throw new Error("Invalid direction.");
      }
    }

    row += rowDirs[direction];
    col += colDirs[direction];
  }

  return result;
}

/**
 * @param matrix
 * TC = O(m * n)
 * SC = O(1)
 * @returns
 */
function spiralOrder4(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  const result: number[] = [];
  let rowSt = 0,
    rowEnd = m - 1;
  let colSt = 0,
    colEnd = n - 1;

  while (rowSt <= rowEnd && colSt <= colEnd) {
    // Traverse from left to right
    for (let col = colSt; col <= colEnd; col++) {
      result.push(matrix[rowSt][col]);
    }
    rowSt++;

    // Traverse from top to bottom
    for (let row = rowSt; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    colEnd--;

    // Traverse from right to left & handle single row case
    if (rowSt <= rowEnd) {
      for (let col = colEnd; col >= colSt; col--) {
        result.push(matrix[rowEnd][col]);
      }
      rowEnd--;
    }

    // Traverse from bottom to top & handle single column case
    if (colSt <= colEnd) {
      for (let row = rowEnd; row >= rowSt; row--) {
        result.push(matrix[row][colSt]);
      }
      colSt++;
    }
  }

  return result;
}

/**
 * @param matrix
 * TC = O(m * n)
 * SC = O(1)
 * @returns
 */
function spiralOrder5(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = new Array(m * n).fill(null);
  let rowSt = 0,
    rowEnd = m - 1;
  let colSt = 0,
    colEnd = n - 1;
  let count = 0;

  while (count < m * n) {
    // Traverse from left to right
    for (let col = colSt; col <= colEnd; col++, count++) {
      result[count] = matrix[rowSt][col];
    }
    rowSt++;

    // Traverse from top to bottom
    for (let row = rowSt; row <= rowEnd; row++, count++) {
      result[count] = matrix[row][colEnd];
    }
    colEnd--;

    // Traverse from right to left & handle single row case
    for (let col = colEnd; col >= colSt && count < m * n; col--, count++) {
      result[count] = matrix[rowEnd][col];
    }
    rowEnd--;

    // Traverse from bottom to top & handle single column case
    for (let row = rowEnd; row >= rowSt && count < m * n; row--, count++) {
      result[count] = matrix[row][colSt];
    }
    colSt++;
  }

  return result;
}

// Driver code
function main() {
  const inputs = [
    [[1]],
    [[6], [2]],
    [
      [2, 14, 8],
      [12, 7, 14],
    ],
    [
      [3, 1, 1],
      [15, 12, 13],
      [4, 14, 12],
      [10, 5, 11],
    ],
    [
      [10, 1, 14, 11, 14],
      [13, 4, 8, 2, 13],
      [10, 19, 1, 6, 8],
      [20, 10, 8, 2, 12],
      [15, 6, 8, 8, 18],
    ],
  ];

  for (let i = 0; i < inputs.length; i++) {
    console.log(`${i + 1}.\tMatrix:`);
    printMatrix(inputs[i]);

    console.log("\n\tSpiral order:", arrayToString(spiralOrder3(inputs[i])));

    console.log("-".repeat(100));
  }
}

main();
