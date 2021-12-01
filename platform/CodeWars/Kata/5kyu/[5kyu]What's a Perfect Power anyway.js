/**
 * 완전거듭제곱인지 검사하기
 * m^k = n
 * m = n^(1/k);
 * m 값 찾도록 계산하면 되는데 125 = 5^3 이어야 하지만
 * 실제 자바스크립트 실행 시 4.999999... 가 나온다
 * 반올림처리하니까 문제에서 설정한 TC는 다 통과함
 *
 * @param {number} n
 * @returns {array | null} [m, k]
 */
var isPP = function (n) {
    let k = 2;
    let m = Math.fround(n ** (1 / k));
    for (k + 1; k < n; k++) {
        m = Math.fround(n ** (1 / k));
        if (Number.isInteger(m)) break;
    }
    return Number.isInteger(m) ? [m, k] : null;
};

[
    [125, [5, 3]],
    [81, [9, 2]],
    [12, null],
    [4, [2, 2]],
    [8, [2, 3]],
].forEach((tc) => {
    JSON.stringify(isPP(tc[0])) === JSON.stringify(tc[1])
        ? console.log("pass")
        : console.error("fail", tc);
});
