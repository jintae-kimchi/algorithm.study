/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, 
which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]

Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // 겉면부터 스왑하면서 한껍질씩 들어가기
    for (var i = 0; i < matrix.length / 2; i++) {
        for (var j = i; j < matrix[i].length - i - 1; j++) {
            // 가독성을 위해 4개의 변수 사용
            var tl = matrix[i][j];
            var tr = matrix[j][matrix.length - i - 1];
            var br = matrix[matrix.length - i - 1][matrix.length - j - 1];
            var bl = matrix[matrix.length - j - 1][i];
            matrix[i][j] = bl;
            matrix[j][matrix.length - i - 1] = tl;
            matrix[matrix.length - i - 1][matrix.length - j - 1] = tr;
            matrix[matrix.length - j - 1][i] = br;
        }
    }
};
[
    [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ],
    [[1]],
    [
        [1, 2],
        [3, 4],
    ],
].forEach((x) => rotate(x));
