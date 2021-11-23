/**
 * Given an array of integers, find the one that appears an odd number of times.
 * 정수형 배열이 주어지면 요소가 홀수개만큼 존재하는 것을 찾아라

There will always be only one integer that appears an odd number of times.
홀수개 존재하는 요소는 배열에 유일하다고 가정

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

function findOdd(A) {
    const map = new Map();
    for (let num of A) {
        if (map.has(num)) continue;
        if (A.filter((v) => v === num).length % 2 === 1) return num;
        map.set(num, true);
    }
    return 0;
}

/**
 * 아 ㅋㅋ 낚시냐고..
 * @param {*} A
 */
function findOdd_awsome(A) {
    return A.reduce((prev, cur) => prev ^ cur);
}

[
    [[7], 7],
    [[0], 0],
    [[1, 1, 2], 2],
    [[0, 1, 0, 1, 0], 0],
    [[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4],
    [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10],
    [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1],
].forEach((tc) => {
    if (findOdd(tc[0]) === tc[1]) console.log("pass");
    else console.error("fail", tc);
});
