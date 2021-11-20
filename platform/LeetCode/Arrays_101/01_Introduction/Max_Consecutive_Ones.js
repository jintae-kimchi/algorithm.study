/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * 
 * Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


Hint #1
You need to think about two things as far as any window is concerned. 
One is the starting point for the window. 
How do you detect that a new window of 1s has started? 
The next part is detecting the ending point for this window. 
How do you detect the ending point for an existing window? 
If you figure these two things out, you will be able to detect the windows of consecutive ones. 
All that remains afterward is to find the longest such window and return the size.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // 0, 1로 이루어진 배열에서 1이 연속되는 가장 큰 길이 찾기
    //let sorted = nums.join('').split('0').map(x => x.length).sort((a, b) => b - a);    
    //return sorted.length ? sorted[0] : 0;
    
    var max = 0;
    var inc = 0;
    
    for(var i = 0; i < nums.length && inc <= i; i++) {
        if (nums[i] === 1) {
            inc += 1;
        } else {
            if (inc > max) max = inc;
            inc = 0;
        }
    }
    if (inc > max) max = inc;
    
    return max;
};