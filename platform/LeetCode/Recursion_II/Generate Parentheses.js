/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
 */

// 재귀 형태로 전파시킴 n 개 괄호 다쓰는 패턴으로
// 다음 값 정할때 유효하지 않은 케이스는 걸러서 연산 줄여야 함
// 끝까지 완성시키면 결과배열에 포함

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const answer = [];
    let callCount = 0;
    const pairNum = n;
    const recursion = (str, open, close) => {
        callCount++;
        if (str.length === pairNum * 2) {
            answer.push(str);
            return;
        }
        if (open < pairNum) recursion(str + "(", open + 1, close);
        if (open > close && close < pairNum)
            recursion(str + ")", open, close + 1);
    };
    recursion("(", 1, 0);

    console.log(callCount);
    return answer;
};

// 한방에 통과시켰는데 성능은 34/66..
// 초기값을 바꿔보니 31/95 로 메모리는 향상되었다.
// 런타임 개선을 위해서는 다른 접근이 필요한듯하다
// 평균이상의 결과를 낸 솔루션 중 유사한걸 참고하여 재구현해보았다.
// 차이점은 문자열 더해서 넘겨주는 방식이 아닌 배열을 사용하는 점이다.

var generateParenthesis_refactored = function (n) {
    const answer = [];
    const pairNum = n;
    let callCount = 0;
    const recursion = (str, open, close) => {
        callCount++;
        if (str.length === pairNum * 2) {
            answer.push(str.join(""));
            return;
        }
        if (open < pairNum) {
            str.push("(");
            recursion(str, open + 1, close);
            str.pop();
        }

        if (open > close && close < pairNum) {
            str.push(")");
            recursion(str, open, close + 1);
            str.pop();
        }
    };
    recursion([], 0, 0);

    console.log(callCount);
    return answer;
};

// 클로저 참조값을 상수화하니 런타임이 갑자기 57이 되네?
// 진짜 그것 때문인지 검증하기 위해 이것저것 바꿔가면 submit 해봤지만
// 로직이 같아도 들쭉날쭉 하는거 보면 런타임은 신뢰할만한 수치가 아닌듯하다
// 메모리 사용량은 참고하되 런타임은 콘솔로 측정해보았다.
// 결과는 내 환경에선 내가 짠 코드가 15~20% 더 빨랐다?

// 따로 돌려야 정확함
console.time("before");
Array(8)
    .fill()
    .forEach((_, i) => {
        generateParenthesis(i + 1);
    });
console.timeEnd("before");

console.time("after");
Array(8)
    .fill()
    .forEach((_, i) => {
        generateParenthesis_refactored(i + 1);
    });
console.timeEnd("after");
