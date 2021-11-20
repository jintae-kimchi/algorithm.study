/**
 * [6kyu]Sum of Digits / Digital Root
 * 자릿수근: 12345 -> 1 + 2 + 3 + 4 + 5 = 15 -> 1 + 5 = 6
 */

// My Code
const reducer = (acc, cur) => parseInt(acc) + parseInt(cur);

function digital_root(n) {
    return calculator(n);
}

function calculator(n) {
    var sums = Array.from(n.toString(10)).reduce(reducer);    
    return (sums > 9) ? calculator(sums) : parseInt(sums);
}

// Best Practice, Clever
// wtf
function digital_root(n) {
    return (n - 1) % 9 + 1;
}