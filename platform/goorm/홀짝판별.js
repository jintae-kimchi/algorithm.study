/**
 * 입력된 숫자가 홀수인지 짝수인지를 판별하는 것이 목표입니다.
 * 홀수인 경우 'odd', 짝수인 경우 'even'을 출력하는 프로그램을 작성하십시오.
 */

/**
 * 예외에 대한 고려 없이 풀어도 정답처리해줌
 * @param {*} n
 * @returns
 */
const solution = function (n) {
    return n % 2 === 0 ? "even" : "odd";
};
