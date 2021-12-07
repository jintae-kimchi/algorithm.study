/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

const g = n => n + 1;
const f = n => n * 2;
const doStuffBetter = x => f(g(x));
doStuffBetter(20); // 42

 */

// 빨리 퇴근하고 싶어서 풀고만 감 ㅎ
// 다시 보니 답안이랑 거의 똑같다. 역시 숫자들은 팩토리 패턴으로 리펙토링 했어야했다.

function zero(fx) {
    return fx ? fx(0) : 0;
}
function one(fx) {
    return fx ? fx(1) : 1;
}
function two(fx) {
    return fx ? fx(2) : 2;
}
function three(fx) {
    return fx ? fx(3) : 3;
}
function four(fx) {
    return fx ? fx(4) : 4;
}
function five(fx) {
    return fx ? fx(5) : 5;
}
function six(fx) {
    return fx ? fx(6) : 6;
}
function seven(fx) {
    return fx ? fx(7) : 7;
}
function eight(fx) {
    return fx ? fx(8) : 8;
}
function nine(fx) {
    return fx ? fx(9) : 9;
}

function plus(n) {
    return (x) => x + n;
}
function minus(n) {
    return (x) => x - n;
}
function times(n) {
    return (x) => x * n;
}
function dividedBy(n) {
    return (x) => Math.floor(x / n);
}

console.log(zero(plus(one())));
console.log(three(minus(one())));
console.log(one(minus(three())));

// best practice

var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
    return function (l) {
        return l + r;
    };
}
function minus(r) {
    return function (l) {
        return l - r;
    };
}
function times(r) {
    return function (l) {
        return l * r;
    };
}
function dividedBy(r) {
    return function (l) {
        return l / r;
    };
}
