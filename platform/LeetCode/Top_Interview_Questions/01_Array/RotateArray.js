/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
   Hide Hint #1  
The easiest solution would use additional memory and that is perfectly fine.
   Hide Hint #2  
The actual trick comes when trying to solve this problem without using any additional memory. 
This means you need to use the original array somehow to move the elements around. 
Now, we can place each element in its original location and shift all the elements around it 
to adjust as that would be too costly and most likely will time out on larger input arrays.
   Hide Hint #3  
One line of thought is based on reversing the array (or parts of it) to obtain the desired result. 
Think about how reversal might potentially help us out by using an example.
   Hide Hint #4  
The other line of thought is a tad bit complicated but essentially 
it builds on the idea of placing each element in its original position while keeping track of the element originally in that position. 
Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one 
being overwritten in an additional variable. We can't do this in one linear pass and the idea here is based on cyclic-dependencies between elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 이건 타임아웃
    // for (var i = 0; i < k; i++) {
    //     nums.unshift(nums.pop());
    // }

    // 추가공간
    var sliceIdx = nums.length - (k % nums.length);
    var sliced = nums.slice(sliceIdx);
    for (var i = nums.length - 1; i >= nums.length - sliceIdx; i--) {
        nums[i] = nums[i - sliced.length];
    }
    for (var j = 0; j < sliced.length; j++) {
        nums[j] = sliced[j];
    }
};

var tcList = [
    [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
    [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
    [[-1], 2, [-1]],
    [[1, 2], 0, [1, 2]],
    [[1, 2], 3, [2, 1]],
];
tcList.forEach((tc, i) => {
    console.time(i);
    rotate(tc[0], tc[1]);
    console.timeEnd(i);
    if (tc[0].join(",") !== tc[2].join(",")) {
        debugger;
    }
});
