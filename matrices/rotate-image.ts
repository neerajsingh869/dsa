import printMatrix from "../utils/print-matrix";

/**
 * PROBLEM LINK: https://leetcode.com/problems/rotate-image/description/
 * 
 * You are given an n x n 2D matrix representing an image, rotate the 
 * image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you have to modify t
    he input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

    Example 1:
        Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
        Output: [[7,4,1],[8,5,2],[9,6,3]]

    Example 2:
        Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
        Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

    Constraints:
        n == matrix.length == matrix[i].length
        1 <= n <= 20
        -1000 <= matrix[i][j] <= 1000
 */

/**
 * @param matrix 
 * TC = O(n * n)
 * SC = O(1)
 * @returns 
 */
function rotateImage1(matrix: number[][]){
    const n = matrix.length;
    
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i - 1; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = temp;
        }
    }
    
    return matrix;
}

/**
 * @param matrix 
 * TC = O(n * n)
 * SC = O(1)
 * @returns 
 */
function rotateImage2(matrix: number[][]){
    const n = matrix.length;
    
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
        }
    }
    
    // Reverse each row
    for (let row of matrix) {
        row.reverse();
    }
    
    return matrix;
}

// Driver code
function main(){
    const inputs = [
        [[1]],
        [[6, 9], [2, 7]],
        [[2, 14, 8], [12, 7, 14], [3, 3, 7]],
        [[3, 1, 1, 7], [15, 12, 13, 13], [4, 14, 12, 4], [10, 5, 11, 12]],
        [[10, 1, 14, 11, 14], [13, 4, 8, 2, 13], [10, 19, 1, 6, 8], [20, 10, 8, 2, 12], [15, 6, 8, 8, 18]]
    ];
  
    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tMatrix:");
        printMatrix(inputs[i]);
  
        console.log("\n\tRotated matrix:");
        printMatrix(rotateImage1(inputs[i]));
  
        console.log("-".repeat(100));
    }
  }
  
  main()