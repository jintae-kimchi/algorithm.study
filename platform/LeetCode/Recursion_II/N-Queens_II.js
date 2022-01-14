/**
 * 재귀돌릴때 배열 생성하는거 때문에 공간복잡도가 올라갔다.
 *
 * Accepted Solutions Runtime Distribution 84.76 %
 * Accepted Solutions Memory Distribution 20.12 %
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let ans = 0;
    if (n === 1) return 1;

    const isAvailablePosition = (board, position) => {
        // 현재 위치에 둘 수 있는지 확인
        // 같은 열
        const sameCol = board.includes(position);
        const curPos = {
            row: board.length,
            col: position,
        };
        // 좌측 대각
        const leftDiagonal = function () {
            let empty = true;
            let r = curPos.row - 1;
            let c = curPos.col - 1;
            while (r >= 0 && c >= 0) {
                // check
                if (board[r] === c) {
                    empty = false;
                    break;
                }
                r--;
                c--;
            }

            return empty;
        };
        // 우측 대각
        const rightDiagonal = function () {
            let empty = true;
            let r = curPos.row - 1;
            let c = curPos.col + 1;
            while (r >= 0 && c < n) {
                // check
                if (board[r] === c) {
                    empty = false;
                    break;
                }
                r--;
                c++;
            }

            return empty;
        };

        return !sameCol && leftDiagonal() && rightDiagonal();
    };
    /**
     * @param {array<number>} positions 보드에 놓인 퀸 정보(index: row, value: col)
     * @param {number} size 보드 크기
     */
    const solve = (board) => {
        for (let c = 0; c < n; c++) {
            // 현재 위치에 놓을 수 있는가
            if (isAvailablePosition(board, c)) {
                if (board.length + 1 === n) {
                    // 마지막 행이면 가능한 경우의수로 기록
                    ans += 1;
                } else {
                    // 탐색 진행
                    solve([...board, c]);
                }
            }
        }
    };

    for (let i = 0; i < n; i++) {
        // 루트는 보드 크기 수 만큼
        // 다음행 중 가능한 경우
        // 그 다음 행 진행
        solve([i]);
    }

    return ans;
};
Array.from({ length: 9 }, (_, i) => i + 1).forEach((v) => {
    console.log(v, totalNQueens(v));
});

/**
 * 실제 경우의 수 계산 결과
n:	        1	2	3	4	5	6	7	8	9	
unique:	    1	0	0	1	2	1	6	12	46	
distinct:	1	0	0	2	10	4	40	92	352	

 * 
 * n * n 게임판이 주어졌을 때 n 개의 퀸을 배치할 수 있는 경우의 수
 * 1 <= n <= 9
 *
 * back-traking 더 탐색해도 해가 없으면 다음 검사로 넘어가면서 탐색횟수를 줄임
 * 유망하지 않으면 가지치기(pruning)
 * 상태공간트리 => 실제 트리없이 트리 형태로 취급하는거?
 */
