/**
 * Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn.

compose(n, f1, f2, f3..., fn) // === fn(...(f3(f2(f1(n)))))
So:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11
If only a single parameter is passed in, return that parameter.

compose(n) = n
 */

/**
 * 파라미터 목록에 대해 스택 형태로 순차실행하는 솔루션
 * 첫번째 인자는 입력값
 * 그 뒤부터 순차적으로 실행
 */

var compose = function () {
    const args = [...arguments];
    let result = args.shift();
    while (args.length) {
        const curFn = args.shift();
        if (typeof curFn === "function") {
            result = curFn(result);
        }
    }
    return result;
};

// reduce 개념이긴 하네..
const compose_bestPractice = (x, ...fs) => fs.reduce((a, f) => f(a), x);

var doubleTheValue = function (v) {
    return v * 2;
};
var addOneToTheValue = function (v) {
    return v + 1;
};
var valueLength = function (v) {
    return v.length;
};

const assert = {
    strictEqual: (answer, expect) => {
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect);
    },
};
assert.strictEqual(compose(), undefined);
assert.strictEqual(compose(42), 42);
assert.strictEqual(compose("Hello, world"), "Hello, world");
assert.strictEqual(compose(5, doubleTheValue), 10);
assert.strictEqual(compose(5, doubleTheValue, addOneToTheValue), 11);
assert.strictEqual(
    compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue),
    25
);
assert.strictEqual(
    compose(
        1,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue,
        addOneToTheValue
    ),
    10
);
