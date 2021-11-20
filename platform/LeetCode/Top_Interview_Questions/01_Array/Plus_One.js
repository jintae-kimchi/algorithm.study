/**
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 마지막 자리 하나 더하는 건데 big number 표현 못하면 연산하면 안됨
    // 원하는 답안은 직접연산 회피하는 거일듯

    // plus
    digits[digits.length - 1] += 1;

    // 다음자릿수에 넘김
    for (var i = digits.length - 1; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i] = 0;
            digits[i - 1] += 1;
        } else {
            break;
        }
    }
    // 첫 자리가 10 이면 앞에 하나 붙임
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};
