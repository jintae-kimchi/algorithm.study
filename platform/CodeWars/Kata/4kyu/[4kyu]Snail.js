/**
 * Snail sort
 * 달팽이 껍질 모양으로 탐색한 순서 리턴
 * 좌상단 -> 우상단 -> 우하단 -> 좌상단 -> ..
 * 형태로 탐색
 * array = 
 *      [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
 */
snail = function (array) {
    // 종료 끝값 odd: 1, even: 2
    const returnArray = [];

    // 현재 사이클의 최소, 최대 인덱스
    let minIdx = 0; // 0, 1, 2, 3
    let maxIdx = array.length - 1; // 6, 5, 4, 3
    // cycleLen: 한 변의 길이
    for (let cycleLen = array.length; cycleLen > 0; cycleLen -= 2) {
        // 경계값
        if (cycleLen === 1) {
            if (array[minIdx][minIdx]) returnArray.push(array[minIdx][minIdx]);
            break;
        }

        // 초기값
        let r = minIdx;
        let c = minIdx;

        // →
        for (; c < maxIdx; c++) {
            // console.log("→", r, c);
            returnArray.push(array[r][c]);
        }
        // ↓
        for (; r < maxIdx; r++) {
            // console.log("↓", r, c);
            returnArray.push(array[r][c]);
        }
        // ←
        for (; c > minIdx; c--) {
            // console.log("←", r, c);
            returnArray.push(array[r][c]);
        }
        // ↑
        for (; r > minIdx; r--) {
            // console.log("↑", r, c);
            returnArray.push(array[r][c]);
        }
        // console.log("");
        minIdx++;
        maxIdx--;
    }

    return returnArray;
};

/**
 * 내 코드는 배열의 불변성 유지했다면 이건 배열을 분해하면서 진행함
 * 내 코드보다 효율적인 부분이라고 생각되는건
 * row 처리 시 하나씩 하지 않았다는 것 그래서 [[]] 같은 케이스의 조건처리가 필요없다
 */
snail_best_practice = function (array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = result ? result.concat(array.shift()) : array.shift();
        // Steal the right items.
        for (var i = 0; i < array.length; i++) result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
};
snail_best_practice([[]]);

// snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]);

// snail([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]);

console.log(snail([[]]));

console.log(
    snail([
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [9, 10, 11, 12, 13],
        [13, 14, 15, 16, 17],
        [13, 14, 15, 16, 17],
    ])
);
