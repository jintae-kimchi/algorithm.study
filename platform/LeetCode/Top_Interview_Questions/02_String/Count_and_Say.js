/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 

Constraints:

1 <= n <= 30
   Hide Hint #1  
The following are the terms from n=1 to n=10 of the count-and-say sequence:
 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211
   Hide Hint #2  
To generate the nth term, just count and say the n-1th term.
 */

/**
 * 배열로 변환할 필요가 없었음..
 * @param {number} n
 * @return {string}
 */
var countAndSay_fail = function (n) {
    // 이전 결과를 기준으로 뽑아냄
    // 1 => 1
    // 1 => one 1 => 11
    // 11 => two 1 => 21
    // 21 => one 2 one 1 => 1211
    // 1211 => one 1 one 2 two 1 => 111221
    // 111221 => three 1 two 2 one 1 => 312211
    // ...
    // 30까지 있음

    // 일반화 시키면
    // a !== b
    // x[a, ...], y[b, ...], ...
    // x.len, x.a, y.len, b, ...

    // n 만큼 수행 n = 1 이면 skip
    var result = ["1"];
    for (var i = 1; i < n; i++) {
        // 값 기준으로 잘라 [길이, 요소값] 계산
        var curVal = result[0];
        var curLen = 0;
        var curResult = [];
        for (var j = 0; j < result.length; j++) {
            if (curVal === result[j]) {
                curLen++;
            } else {
                curResult.push(...[curLen + "", curVal]);
                curLen = 1;
                curVal = result[j];
            }
        }
        // 마지막 셋 남는거 추가
        curResult.push(...[curLen + "", curVal]);
        // 계산결과 병합, 다음 반복값으로 설정
        result = curResult;
    }
    return result.join("");
};

var countAndSay = function (n) {
    var result = "1";
    for (var i = 1; i < n; i++) {
        var curStr = "";
        var curRes = "";
        var idx = 1;
        for (var j = 0; j < result.length; j++) {
            if (result[j] !== result[j + 1]) {
                curStr = result[j];
                curRes += `${idx}${result[j]}`;
                idx = 1;
            } else {
                idx++;
            }
        }
        result = curRes;
    }
    return result;
};

var ans = [
    "1",
    "11",
    "21",
    "1211",
    "111221",
    "312211",
    "13112221",
    "1113213211",
    "31131211131221",
    "13211311123113112211",
];
Array.from({ length: 10 }, (_, i) => i + 1).forEach((tc, idx) => {
    console.log(idx, countAndSay(tc) === ans[idx]);
});
