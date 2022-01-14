/**
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
1 <= k <= n
 */

/**
 * 1~n 범위의 배열을 만들고 k 길이만큼 부분집합목록을 리턴함
 * 부분집합 요소내용이 중복되지 않아야 함 ([[1, 2], [2, 1]]은 불가능)
 * @param {number} n 수열의 범위
 * @param {number} k 집합의 길이
 * @return {number[][]}
 */
var combine = function (n, k) {
    const arr = Array(n)
        .fill()
        .map((_, i) => i + 1);
    const result = [];
    const backTrack = (bag = [], idx) => {
        if (bag.length === k) {
            result.push(bag);
            return;
        }
        for (let i = idx; i < arr.length; i++) {
            // 현재 자리에 대한 모든 조합
            backTrack([...bag, arr[i]], i + 1);
        }
    };
    backTrack([], 0);
    return result;
};
combine(4, 2);
/**
 * 한큐에 통과하긴 했는데 역시나 배열 분해하는 부분때문인지 성능은 구렸다.
 * time45%, space21%
 * 참조배열없이 로직을 짜고
 * 구조분해를 하지 않는 방식으로 개선
 */

const combine_refactored = (n, k) => {
    const result = [];
    const backTrack = (bag, idx) => {
        if (bag.length === k) {
            result.push([...bag]);
            return;
        }
        for (let i = idx; i < n; i++) {
            // 현재 자리에 대한 모든 조합
            bag.push(i + 1);
            // 현재값을 가진 다음 값의 모든 조합
            backTrack(bag, i + 1);
            bag.pop();
        }
    };
    backTrack([], 0);
    return result;
};
console.log(JSON.stringify(combine_refactored(4, 2)));
console.log(combine_refactored(20, 9).length);
/**
 * 같은 코드로 시도했는데 90/90, 18/50, 50/50 이 나옴 ㅋㅋ
 */
