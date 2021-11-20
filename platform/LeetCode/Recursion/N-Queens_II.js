/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    var ans = 0;
    return ans;
};
Array.from({ length: 9 }, (_, i) => i + 1).forEach((v) => {
    console.log(v, totalNQueens(v));
});
debugger;
/**
 * n * n 게임판이 주어졌을 때 n 개의 퀸을 배치할 수 있는 경우의 수
 * 1 <= n <= 9
 *
 * back-traking 더 탐색해도 해가 없으면 다음 검사로 넘어가면서 탐색횟수를 줄임
 * 유망하지 않으면 가지치기(pruning)
 * 상태공간트리 => 실제 트리없이 트리 형태로 취급하는거?
 *
 * GG
 */
