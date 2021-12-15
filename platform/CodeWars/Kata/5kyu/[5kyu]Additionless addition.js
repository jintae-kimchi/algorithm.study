/**
 * Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.


덧셈 기호랑 Math 등 금지목록에 있는 것들 코드에 넣지 않고 덧셈 함수 구현
 */

/**
 * 비트연산이라는건 알겠는데 솔루션은 안떠올라서 찾아봄
 * 선작성 후분석 형태로 이해함.
 * 십진수끼리 비트연산하면 이진수계산이니
 * xor 연산자로 현재 자리수 합 계산하고 = 다음값 x
 * & 로 올림자릿수 계산을 한 뒤 쉬프트 연산자로 한자리씩 올림 = 다음값 y
 * 그것들을 올리는 값이 0이 될때까지 반복하면 더한 결과가 나옴
 * @param {*} x
 * @param {*} y
 * @returns
 */
function add(x, y) {
    if (y === 0) return x;
    return add(x ^ y, (x & y) << 1);
}
console.log(add(1, 2) === 3);
