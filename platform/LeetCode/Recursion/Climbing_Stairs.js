/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n > 45) return null;
    var memo = new Map();
    memo.set(1, 1);
    memo.set(2, 2);
    var fn = function (cnt) {
        if (cnt > n) return memo.get(n);
        var prev = memo.get(cnt - 1);
        var prevprev = memo.get(cnt - 2);
        memo.set(cnt, prev + prevprev);
        return fn(cnt + 1);
    };
    return fn(3);
};

/**
 * n(1 ~ 45) 개의 계단을 올라가야 함
 * 계단은 한칸 또는 두칸 단위로 이동가능
 * 계단 오르는 모든 가짓수를 계산해야 함
 * 두칸으로 n 초과해서 넘으면 안되는듯
 * 손으로 노가다 해보니까 경계값 조금 다른 피보나치임 ㅋㅋ..
 */

console.log(climbStairs(1), 1);
console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5);
console.log(climbStairs(5), 8);
console.log(climbStairs(6), 13);
