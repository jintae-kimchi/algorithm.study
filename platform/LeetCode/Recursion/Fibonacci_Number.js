/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    var memo = new Map();
    memo.set(0, 0);
    memo.set(1, 1);
    if (n === 0) return 0;
    if (n === 1) return 1;
    var count = 2;

    var fn = function (cnt) {
        var prev = memo.get(cnt - 1);
        var prev_prev = memo.get(cnt - 2);
        var cur = prev + prev_prev;
        memo.set(cnt, cur);
        if (cnt >= n) return cur;
        return fn(cnt + 1);
    };
    return fn(count);
};

console.log(fib(0) === 0);
console.log(fib(1) === 1);
console.log(fib(2) === 1);
console.log(fib(3) === 2);
console.log(fib(4) === 3);
console.log(fib(5) === 5);
console.log(fib(6) === 8);

/**
 * 피보나치는 메모이제이션만 하면 되는 걸 생각해서 간단하게 구현함.
 * 경계값 처리만 주의하면 될듯?
 */
