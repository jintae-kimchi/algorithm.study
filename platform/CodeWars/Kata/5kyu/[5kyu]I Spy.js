/**
 * In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:

Whether it was invoked
How many times it was invoked
What arguments it was called with
What contexts it was called in
What values it returned
Whether it threw an error
For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
.returned(val) — returns true if spy ever returned val, else returns false
Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false
 */

/**
 * 함수를 바인딩하고 그 함수가 실행되는 내역을 기록하는 솔루션
 * 출제자 피셜 테케에 문제있다고 함
 * 그래서 통과 못하는 것 같아서 넘어감
 *
 * NOTE: The test cases for this kata are broken, but for some reason CodeWars has locked them and I cannot edit them.
 * Specifically, the returned function is not propertly testing that old values are remembered.
 * If and when I can fix the problem, I will, but I don't see any way to do that due to the lock.
 */

function spyOn(func) {
    let calledCount = 0;
    let calledArgs = [];
    let returnedVals = [];

    // spyOn()
    const fn = (...args) => {
        calledCount++;
        calledArgs.push(...args);
        returnedVals.push(...[func(...args)]);
    };
    // returns the number of times spy has been called
    fn.callCount = () => calledCount;
    // returns true if spy was ever called with val, else returns false.
    fn.wasCalledWith = (val) => calledArgs.some((v) => v === val);
    // returns true if spy ever returned val, else returns false
    fn.returned = (val) => returnedVals.some((v) => v === val);

    return fn;
}

const Test = {
    assertEquals: (answer, expect) =>
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect),
};

function returns1() {
    return 1;
}

var spy = spyOn(returns1);
Test.assertEquals(spy.callCount(), 0);
Test.assertEquals(spy.returned(1), false);
Test.assertEquals(spy.wasCalledWith("hello"), false);

spy("hello", "hi", "howdy");
spy("goodbye", "bye", "see ya");

Test.assertEquals(spy.callCount(), 2);
Test.assertEquals(spy.returned(1), true);
Test.assertEquals(spy.wasCalledWith("hi"), true);
Test.assertEquals(spy.wasCalledWith("bye"), true);
