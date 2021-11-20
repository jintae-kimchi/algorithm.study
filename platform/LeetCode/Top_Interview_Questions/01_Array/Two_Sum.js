/**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // nums의 요소를 더해 target 값이 나오는 인덱스를 배열로 리턴(순서상관없음)
    // 정답은 하나만 있다고 가정됨
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var j = nums.indexOf(target - nums[i]);
        if (i !== j && j > -1) {
            result = [i, j];
            break;
        }
    }

    return result;
};
