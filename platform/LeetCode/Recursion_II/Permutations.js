/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.


결과배열 개수

case1: 1, 1             = 1
case2: 2, case1 * 2     = 2
case3: 3, case2 * 3     = 6
...
case(n-1): n-1, case(n-2) * (n-1)
case(n): n, case(n-1) * n
우린 그걸 팩토리얼이라고 부르기로 했어요..

근데 문제에서는 결과배열을 리턴해야함, 즉 실제 값을 저장해야함
일단 떠오르는 방식은 재귀형태로 발산시키면서 마지막에 결과값에 포함시키는게 떠오름
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const answer = [];
    let fnCalls = 0;
    // 특정 배열을 받으면 해당 범위 내에서 순열조합 탐색
    // 누적된 값은 prefix 값으로 전달됨
    const fn = (prefix, arr) => {
        fnCalls++;
        if (!arr.length) return;
        // 길이가 1인 배열이면 병합하고 결과에 포함
        if (arr.length === 1) {
            prefix.push(arr[0]);
            answer.push(prefix);
            return;
        }
        // 탐색할 배열이 남아있다면 현재 배열의 첫자리 기준으로 발산
        for (let i = 0; i < arr.length; i++) {
            fn(
                [...prefix, arr[i]],
                arr.filter((v) => v !== arr[i])
            );
        }
    };
    // prefix를 배열로 쓰면 너무 많은 배열을 만들게 되나?
    fn([], nums);
    console.log(fnCalls);
    return answer;
};

// 통과는 했는데 성능은 절반도 못감
// 백트래킹 기법도 적용하지 못했음
// 솔루션을 코드를 분석해보니 배열 두개로 계산하는 과정은 유사하나
// 내 코드는 재귀 파라미터로 배열생성이 들어가는게 주요 차이점 같았음
// 기존 코드 구조에 다음 prefix 파라미터를 배열 생성에서 현재 배열을 넘기는 식으로 바꾸니 바로 성능 98 나옴

const permute_refactored = (nums) => {
    const answer = [];
    const fn = (prefix, arr) => {
        if (!arr.length) {
            answer.push([...prefix]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            prefix.push(arr[i]);
            fn(
                prefix,
                arr.filter((v, idx) => idx !== i)
            );
            prefix.pop();
        }
    };
    fn([], nums);
    return answer;
};

const permute_solution = (nums) => {
    const result = [];
    const fn = (nums, set, ans) => {
        if (!nums.length) ans.push([...set]);
        for (let i = 0; i < nums.length; i++) {
            const nextNums = nums.filter((v, idx) => idx !== i);
            set.push(nums[i]);
            fn(nextNums, set, ans);
            set.pop();
        }
    };
    fn(nums, [], result);
    return result;
};

const tcList = [[1, 2, 3], [1], [0, 1]];

tcList.forEach((tc) => {
    // console.log(permute(tc));
    // console.log(permute_solution(tc));
    console.log(permute_refactored(tc));
});
