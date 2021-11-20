/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    // 경계값
    if (n === 1) return 0;
    // 처음 자손까지 올라오면 k값에 따라 좌우 판별
    if (n === 2) return k === 1 ? 0 : 1;

    // (1, 2 => 1), (3, 4 => 2), (5, 6 => 3) 형태로 부모 인덱스 계산하면서 첫자손까지 올라감
    var v = kthGrammar(n - 1, Math.floor((k + 1) / 2));
    if (v === 0) {
        // 좌의 자식들의 경우
        // 짝수면 1
        return k % 2 === 0 ? 1 : 0;
    } else {
        // 우의 자식들의 경우
        // 짝수면 0
        return k % 2 === 0 ? 0 : 1;
    }
};

[
    [3, 1, "0"],
    [3, 2, "1"],
    [3, 3, "1"],
    [3, 4, "0"],
    [30, 434991989, "0"],
].forEach((tc) => {
    console.log(`expect ${tc[2]}, result ${kthGrammar(tc[0], tc[1])}`);
});

// 현재 결과를 반으로 자르면 이전 결과임
// -> 메모이제이션하여 필요한 계산만 하도록 함
// -> 응 아니야~ 메모리 터져
// K 위치에서 줄여가면서 계산을 통해 진행해야 하는데 모르겠음
// 솔루션 이해가 안되서 이것저것 찾다가 이해하기 쉬운 코드 찾아서 해설달면서 따라 풀어봄

// solution
// var kthGrammar = function (N, K) {
//     if (N == 1) return 0;
//     if (K % 2 == 0) return kthGrammar(N - 1, K / 2) == 0 ? 1 : 0;
//     else return kthGrammar(N - 1, (K + 1) / 2) == 0 ? 0 : 1;
// };
// kthGrammar(30, 434991989);
