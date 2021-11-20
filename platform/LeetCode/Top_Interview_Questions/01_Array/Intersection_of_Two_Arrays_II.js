/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // hashmap 을 이용한 방법
    var result = [];
    var map = new Map();
    nums1.forEach((v) => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });
    nums2.forEach((v) => {
        if (map.has(v) && map.get(v) > 0) {
            result.push(v);
            map.set(v, map.get(v) - 1);
        }
    });

    return result;

    // 정렬된 데이터 대상 솔루션
    // nums1.sort((a, b) => a - b);
    // nums2.sort((a, b) => a - b);
    // var result = [];
    // var maxLen = Math.max(nums1.length, nums2.length);
    // for (var i = 0, j = 0; i < maxLen && j < maxLen; ) {
    //     if (nums1[i] === nums2[j]) {
    //         result.push(nums1[i]);
    //         i++;
    //         j++;
    //     } else if (nums1[i] > nums2[j]) {
    //         j++;
    //     } else {
    //         i++;
    //     }
    // }

    // return result;
};

[
    [
        [1, 2, 2, 1],
        [2, 2],
        [2, 2],
    ],
    [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
        [4, 9],
    ],
    [
        [
            61,
            24,
            20,
            58,
            95,
            53,
            17,
            32,
            45,
            85,
            70,
            20,
            83,
            62,
            35,
            89,
            5,
            95,
            12,
            86,
            58,
            77,
            30,
            64,
            46,
            13,
            5,
            92,
            67,
            40,
            20,
            38,
            31,
            18,
            89,
            85,
            7,
            30,
            67,
            34,
            62,
            35,
            47,
            98,
            3,
            41,
            53,
            26,
            66,
            40,
            54,
            44,
            57,
            46,
            70,
            60,
            4,
            63,
            82,
            42,
            65,
            59,
            17,
            98,
            29,
            72,
            1,
            96,
            82,
            66,
            98,
            6,
            92,
            31,
            43,
            81,
            88,
            60,
            10,
            55,
            66,
            82,
            0,
            79,
            11,
            81,
        ],
        [
            5,
            25,
            4,
            39,
            57,
            49,
            93,
            79,
            7,
            8,
            49,
            89,
            2,
            7,
            73,
            88,
            45,
            15,
            34,
            92,
            84,
            38,
            85,
            34,
            16,
            6,
            99,
            0,
            2,
            36,
            68,
            52,
            73,
            50,
            77,
            44,
            61,
            48,
        ],
        [5, 4, 57, 79, 7, 89, 88, 45, 34, 92, 38, 85, 6, 0, 77, 44, 61],
    ],
].forEach((tc, i) => {
    console.time(i);
    var ans = intersect(tc[0], tc[1]);
    console.timeEnd(i);
    if (ans.sort().join(",") !== tc[2].sort().join(",")) {
        debugger;
    }
});
