/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * 10 미만의 3 또는 5의 배수인 수를 나열하면 3, 5, 6, 9 가 된다.
 * The sum of these multiples is 23.
 * 이것들의 합은 23이다.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * 주어진 숫자 미만의 모든 3, 5 배수들을 찾아 합하도록 하라.
 * Additionally, if the number is negative, return 0 (for languages that do have them).
 * 추가로, 숫자가 음수이면 0을 리턴한다.
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 * 3 또는 5의 배수인 경우 한번만 카운트해야 함
 */

/**
 * 여러 방법이 있지만 순회하는건 결국 다 이런 논리임
 * @param {*} number
 * @returns
 */
function solution(number) {
    let sums = 0;
    if (number <= 0) return 0;
    for (let n = 0; n < number; n++) {
        if (n % 3 === 0 || n % 5 === 0) {
            sums += n;
        }
    }
    return sums;
}

/**
 * Best Clever Practice
 * 아 ㅋㅋ
 * @param {*} number
 * @returns
 */
function solution(number) {
    var n3 = Math.floor(--number / 3),
        n5 = Math.floor(number / 5),
        n15 = Math.floor(number / 15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}

[
    [10, 23],
    [-1, 0],
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 3],
    [5, 3],
    [6, 8],
].forEach((tc) =>
    solution(tc[0]) === tc[1] ? console.log("pass") : console.error("fail", tc)
);
