/**
 * Given a string s, return the first non-repeating character in it and return its index. 
 * If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (var i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

[
    ["leetcode", 0],
    ["loveleetcode", 2],
    ["aabb", -1],
].forEach((tc) => {
    console.log(firstUniqChar(tc[0]) === tc[1]);
});
