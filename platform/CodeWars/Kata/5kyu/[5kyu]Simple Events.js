/**
 * Your goal is to write an Event constructor function, which can be used to make event objects.

An event object should work like this:

it has a .subscribe() method, which takes a function and stores it as its handler
it has an .unsubscribe() method, which takes a function and removes it from its handlers
it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
As this is an elementary example of events, there are some simplifications:

all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
you should not worry about the order of handlers' execution
the handlers will not attempt to modify an event object (e.g. add or remove handlers)
the context of handlers' execution is not important
each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
Also see an example test fixture for suggested usage
 */

function Event() {
    const subs = [];
    this.subscribe = function (func) {
        if (subs.every((f) => f !== func)) subs.push(func);
    };
    this.unsubscribe = function (func) {
        console.log("unsub", func);
        const i = subs.findIndex((f) => f === func);
        if (i >= 0) {
            subs.splice(i, 1);
        }
    };
    this.emit = function () {
        subs.forEach((f) => {
            if (typeof f === "function") f(...arguments);
        });
    };
}

/**
 * Set 의 delete 라는걸로 간단하게 되는구나..
 * 다음에 비슷한거 있으면 클래스로도 풀어봐야겠다
 */

class Event_best {
    constructor() {
        this.subscribers = new Set();
    }

    subscribe(func) {
        this.subscribers.add(func);
    }

    unsubscribe(func) {
        this.subscribers.delete(func);
    }

    emit(...args) {
        this.subscribers.forEach((s) => s(...args));
    }
}

function test() {
    // function f() {
    //     f.calls = (f.calls || 0) + 1;
    //     f.args = Array.prototype.slice.call(arguments);
    // }
    function _stub() {
        _stub.args = Array.prototype.slice.call(arguments);
        _stub.calls = (_stub.calls || 0) + 1;
        console.log("called");
    }
    var event = new Event();
    JSON.stringify;
    event.subscribe(_stub);
    event.subscribe(_stub);
    event.emit({ 0: 1, 1: 2, 2: 3, 3: "first", 4: undefined, 5: false });
    event.emit({ 0: 1, 1: 2, 2: 3, 3: "first", 4: undefined, 5: false });

    // Test.expect(f.calls === 1); // calls a handler
    // Test.assertSimilar(f.args, [1, "foo", true]); // passes arguments

    event.unsubscribe(_stub);
    event.emit(2);

    // Test.expect(f.calls === 1); //no second call
}
test();
