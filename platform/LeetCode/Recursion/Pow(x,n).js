/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    return x ** n;
};

[
    {
        x: 2.0,
        n: 10,
        r: 1024.0,
    },
    {
        x: 2.1,
        n: 3,
        r: 9.261,
    },
    {
        x: 2.0,
        n: -2,
        r: 0.25,
    },
].forEach((tc) => {
    let { x, n, r } = tc;
    let result = myPow(x, n);
    // toFixed 적용에 대한 문제가 있긴 함
    result === r ? console.log("pass") : console.error("fail");
});

/**
 * 문제가 의도한 것은 재귀함수로 지수부분을 분해하여 계산하는 것을 의도한 것 같다.
 * 다른 코드 리딩만 하고 넘어감.
 */
