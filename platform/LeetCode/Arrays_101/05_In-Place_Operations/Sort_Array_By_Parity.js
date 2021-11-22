/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    // 짝수, 홀수 순서로 정렬
    // 요소 값을 정렬하진 않음
    var evenArr = A.filter((num) => num % 2 === 0);
    var oddArr = A.filter((num) => num % 2 === 1);

    return evenArr.concat(oddArr);
};

// 이것도 빠르진 않네..
// 다른 배열에 담는식으로 하면 훨씬 빠른듯
// 교환으로 해결하는게 목적이니까 이걸로 넘어감
var sortArrayByParity_refactored = function (A) {
    // 교환하는 방식으로 만들어야 함
    let head = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            [A[i], A[head]] = [A[head], A[i]];
            head++;
        }
    }
    return A;
};

sortArrayByParity_refactored([3, 1, 2, 4]);
