/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 */

/**
 * Your runtime beats 94.13 % of javascript submissions.
 * Your memory usage beats 49.54 % of javascript submissions.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    strs.sort((a, b) => a.length - b.length);
    // 가장 짧은 단어가 접두어 최대값임
    var val = strs[0];
    var pLen = val.length;
    for (var i = 1; i < strs.length; i++) {
        for (var j = val.length - 1; j >= 0; j--) {
            if (val[j] !== strs[i][j]) {
                pLen = j;
            }
        }
        val = val.slice(0, pLen);
    }
    return val || "";
};

[
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
].forEach((tc) => {
    console.log(longestCommonPrefix(tc[0]) === tc[1]);
});
