/**
 * Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.

   Hide Hint #1  
The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (var i = 0, j = s.length - 1; i < Math.floor(s.length / 2); ) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    // 또는 s.reverse()...
};

[
    [
        ["h", "e", "l", "l", "o"],
        ["o", "l", "l", "e", "h"],
    ],
    [
        ["H", "a", "n", "n", "a", "h"],
        ["h", "a", "n", "n", "a", "H"],
    ],
].forEach((s) => {
    reverseString(s[0]);
    console.log(s[0].join("") === s[1].join(""));
});
