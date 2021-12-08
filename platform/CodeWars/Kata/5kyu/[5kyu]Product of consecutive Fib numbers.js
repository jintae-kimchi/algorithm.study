/**
 * The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
 */

/**
 * 피보나치면
 * 디버그 해보니 꼬리재귀 현상이 있는 걸로 보임..
 * @param {*} prod
 * @returns
 */
function productFib(prod) {
    const fiboDict = {
        0: 0,
        1: 1,
    };
    const n = 2;
    const fib = (n) => {
        const prevprev = fiboDict[n - 2];
        const prev = fiboDict[n - 1];
        const multiply = prevprev * prev;
        if (multiply < prod) {
            fiboDict[n] = prevprev + prev;
            return fib(n + 1);
        } else {
            return [prevprev, prev, multiply === prod];
        }
    };
    return fib(n);
}

/**
 * 리턴값만 제거함
 * @param {*} prod
 * @returns
 */
function productFib_refactored(prod) {
    // 피보나치 수열 두개를 곱한다
    // 곱한값이 prod 이하면 다음 값 탐색
    // prod 값이면 해당 수열 값 두개랑 true 리턴
    // prod 값 이상이면 수열 값 두개랑 false 리턴

    // 일단 피보나치 수열을 계산하는 함수를 만들어야함
    // f(0) = 0,
    // f(1) = 1,
    // f(2) = f(0) + f(1) = 1,
    // f(3) = f(1) + f(2) = 2
    const fiboDict = {
        0: 0,
        1: 1,
    };
    const n = 2;
    let result = null;
    const fib = (n) => {
        const prevprev = fiboDict[n - 2];
        const prev = fiboDict[n - 1];
        const multiply = prevprev * prev;
        if (multiply < prod) {
            fiboDict[n] = prevprev + prev;
            fib(n + 1);
        } else {
            result = [prevprev, prev, multiply === prod];
        }
    };
    fib(n);
    return result;
}

/**
 * 아 ㅋㅋ
 * @param {} prod
 * @returns
 */
function productFib_best(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

const Test = {
    assertSimilar: (answer, expect) =>
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect),
};
console.time("aa");
Test.assertSimilar(productFib(4895), [55, 89, true]);
Test.assertSimilar(productFib(5895), [89, 144, false]);
Test.assertSimilar(productFib(74049690), [6765, 10946, true]);
Test.assertSimilar(productFib(84049690), [10946, 17711, false]);
Test.assertSimilar(productFib(193864606), [10946, 17711, true]);
Test.assertSimilar(productFib(447577), [610, 987, false]);
Test.assertSimilar(productFib(602070), [610, 987, true]);
console.timeEnd("aa");
