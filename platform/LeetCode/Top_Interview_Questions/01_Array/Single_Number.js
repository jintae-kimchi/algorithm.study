/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 실행시간이 구림
    // return nums.find(
    //     (num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num),
    // );

    // 짝을 검사할 땐 xor 연산자 활용을 생각하자
    return nums.reduce((prev, cur) => prev ^ cur, 0);
};

[
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1], 1],
].forEach((tc, i) => {
    console.time(i);
    if (singleNumber(tc[0]) !== tc[1]) {
        debugger;
    }
    console.timeEnd(i);
});
