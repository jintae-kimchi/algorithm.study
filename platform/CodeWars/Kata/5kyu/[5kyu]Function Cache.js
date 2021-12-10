/**
 * If you are calculating complex things or execute time-consuming API calls, 
 * you sometimes want to cache the results. 
 * In this case we want you to create a function wrapper, 
 * which takes a function and caches its results depending on the arguments, 
 * that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) {  
    //complex calculation in here  
};
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

 */

/**
 * 이런건 테스트 케이스 분석하기가 너무 어렵네..
 * @param {*} func
 * @returns
 */
function cache(func) {
    let histories = [];
    const getCache = (args) => {
        const argsStr = JSON.stringify(args);
        return histories.find((history) => {
            const { params } = history;
            return params === argsStr;
        });
    };

    return (...args) => {
        const cached = getCache(args);
        let returns = cached && cached.returns;
        if (returns != null) {
            console.log("cached");
            return returns;
        }
        returns = func(...args);
        histories.push({
            params: JSON.stringify(args),
            returns,
        });
        console.log("new call");
        return returns;
    };
}

const complexFunction = function (arg1, arg2) {
    return 0;
};
const cachedFunction = cache(complexFunction);
cachedFunction(1);
cachedFunction(2);
cachedFunction(2);
cachedFunction(1);

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });
