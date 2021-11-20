/**
 * Determine if a 9 x 9 Sudoku board is valid. 
 * Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, 
except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // rowset
    var rMap = new Map();
    // colset
    var cMap = new Map();
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            var cur = board[r][c];

            if (cur !== ".") {
                // rows
                if (rMap.has(r)) {
                    if (rMap.get(r).indexOf(cur) > -1) {
                        return false;
                    } else {
                        rMap.get(r).push(cur);
                    }
                } else {
                    rMap.set(r, [cur]);
                }

                // cols
                if (cMap.has(c)) {
                    if (cMap.get(c).indexOf(cur) > -1) {
                        return false;
                    } else {
                        cMap.get(c).push(cur);
                    }
                } else {
                    cMap.set(c, [cur]);
                }
            }

            // boxes
            if (r % 3 === 0 && c % 3 === 0) {
                var bSet = new Set();
                var box = [
                    board[r][c],
                    board[r][c + 1],
                    board[r][c + 2],
                    board[r + 1][c],
                    board[r + 1][c + 1],
                    board[r + 1][c + 2],
                    board[r + 2][c],
                    board[r + 2][c + 1],
                    board[r + 2][c + 2],
                ].filter((v) => v !== ".");

                for (var bi = 0; bi < box.length; bi++) {
                    if (bSet.has(box[bi])) {
                        return false;
                    }
                    bSet.add(box[bi]);
                }
            }
        }
    }

    return true;
};
