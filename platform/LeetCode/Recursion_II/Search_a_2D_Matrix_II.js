/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0) return false;

    var row = matrix.length - 1;
    var col = 0;

    while (row >= 0 && col < matrix[0].length) {
        var value = matrix[row][col];

        if (target == value) {
            return true;
        } else if (target < value) {
            row--;
        } else {
            col++;
        }
    }

    return false;
};
