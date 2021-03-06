/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku_failed = function (board) {
    // convert to int
    board.forEach((row) => {
        for (let i = 0; i < row.length; i++) {
            row[i] = Number(row[i]);
        }
    });

    // solve
    let hasUnsolved = true;
    const cellIsNumber = (v) => typeof v === "number" && !isNaN(v);
    const solveRow = (list, r, c) => {
        return list.filter((v) => {
            if (Array.isArray(v)) {
            } else {
                return !board[r].includes(v);
            }
        });
    };
    const solveCol = (list, r, c) => {
        const ans = [];
        for (let i = 0; i < 9; i++) {
            if (cellIsNumber(board[i][c])) {
                ans.push(board[i][c]);
            }
        }
        return list.filter((v) => !ans.includes(v));
    };
    const solveBox = (list, r, c) => {
        let boxRow = Math.floor(r / 3) * 3;
        let boxCol = Math.floor(c / 3) * 3;

        const ans = [];
        for (let br = boxRow; br < boxRow + 3; br++) {
            let str1 = "";
            for (let bc = boxCol; bc < boxCol + 3; bc++) {
                str1 += `(${br}, ${bc}) `;
                if (cellIsNumber(board[br][bc])) {
                    ans.push(board[br][bc]);
                }
            }
            console.log(str1);
        }
        console.log("");
        return list.filter((v) => !ans.includes(v));
    };
    const solve = () => {
        hasUnsolved = false;
        board.forEach((row, r) => {
            for (let i = 0; i < row.length; i++) {
                if (cellIsNumber(row[i])) continue;

                // NaN, [1, 2, 3, ...]
                let cur = Array.isArray(row[i])
                    ? row[i]
                    : [1, 2, 3, 4, 5, 6, 7, 8, 9];

                // 행, 열, 박스 검사 후 남은 답을 저장함
                cur = solveRow(cur, r, i);
                if (cur.length === 1) {
                    row[i] = cur[0];
                    continue;
                }
                cur = solveCol(cur, r, i);
                if (cur.length === 1) {
                    row[i] = cur[0];
                    continue;
                }
                cur = solveBox(cur, r, i);
                if (cur.length === 1) {
                    row[i] = cur[0];
                    continue;
                }

                row[i] = cur;
                hasUnsolved = true;
            }
        });
    };
    solve();
    while (hasUnsolved) {
        solve();
    }

    // convert to string
    board.forEach((row) => {
        for (let i = 0; i < row.length; i++) {
            row[i] = String(row[i]);
        }
    });
};

const solveSudoku = (board) => {
    const validation = (arr, r, c, v) => {
        // 가로
        for (let i = 0; i < 9; i++) {
            if (arr[r][i] === v) return false;
            if (arr[i][c] === v) return false;
        }
        // 사각형
        let boxRow = Math.floor(r / 3) * 3;
        let boxCol = Math.floor(c / 3) * 3;
        for (let br = boxRow; br < boxRow + 3; br++) {
            for (let bc = boxCol; bc < boxCol + 3; bc++) {
                if (arr[br][bc] === v) return false;
            }
        }
        return true;
    };
    const backTrack = (arr) => {
        // 전체 셀을 진행
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {
                // 이미 값이 있는 경우는 넘어감
                if (arr[row][col] !== ".") continue;
                // 셀마다 1~9까지 지정한 조건으로 완성시켜봄
                for (let num = 1; num <= 9; num++) {
                    if (validation(arr, row, col, String(num))) {
                        // 빈칸이면 채울 수 있는값 찾아서 넣음
                        arr[row][col] = String(num);
                        // 넣은 값을 가진 게임판으로 게임 진행
                        if (backTrack(arr)) return true;
                        // 중간에 못채웠으면 해당 값 날리고 다음 값으로 다시 진행
                        arr[row][col] = ".";
                    }
                }
                // 다 넣어봐도 답이 없음
                return false;
            }
        }

        return true;
    };
    backTrack(board);
};

const tcList = [
    [
        [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
        [
            ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
            ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
            ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
            ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
            ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
            ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
            ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
            ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
            ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
        ],
    ],
    [
        [
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ],
        [],
    ],
    [
        [
            [".", ".", "9", "7", "4", "8", ".", ".", "."],
            ["7", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", "2", ".", "1", ".", "9", ".", ".", "."],
            [".", ".", "7", ".", ".", ".", "2", "4", "."],
            [".", "6", "4", ".", "1", ".", "5", "9", "."],
            [".", "9", "8", ".", ".", ".", "3", ".", "."],
            [".", ".", ".", "8", ".", "3", ".", "2", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "6"],
            [".", ".", ".", "2", "7", "5", "9", ".", "."],
        ],
        [],
    ],
];
tcList.forEach((tc) => {
    solveSudoku(tc[0]);
    console.log(JSON.stringify(tc[0]) === JSON.stringify(tc[1]));
});
