/**
 * Write a function that takes an integer as input,
 * and returns the number of bits that are equal to one in the binary representation of that number.
 * 정수를 입력으로 받는 함수를 기술하라,
 * 해당 숫자의 이진 표현에서 1 을 표현하는 비트의 개수를 반환하라
 *
 * You can guarantee that input is non-negative.
 * 입력은 음수가 아니라고 가정한다
 *
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 * 예: 1234의 이진표현은 10011010010 이므로,
 * 5를 리턴함
 */

/**
 * 손으로 계산하는거 코드로 옮긴거
 * @param {*} n
 * @returns
 */
var countBits = function (n) {
    let counter = 0;
    while (n > 0) {
        if (n % 2 === 1) counter++;
        n = Math.floor(n / 2);
    }
    return counter;
};

/**
 * 이진수를 활용할 일이 거의 없다보니 기본 api도 생각못했다
 * @param {*} n
 * @returns
 */
var countBits_refactoring = function (n) {
    return n.toString(2).replace(/0/gi, "").length;
};

[
    [0, 0],
    [4, 1],
    [7, 3],
    [9, 2],
    [10, 2],
    [8047639860, 21],
].forEach((tc) => {
    const pass = countBits_refactoring(tc[0]) === tc[1];
    if (pass) console.log("pass", tc);
    else console.error("fail", tc);
});
