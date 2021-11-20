/**
 * Given a string s, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
 */

var isCharCode = function (code) {
    return (97 <= code && code <= 122) || (48 <= code && code <= 57);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var filtered = s
        .toLowerCase()
        .split("")
        .filter((c) => isCharCode(c.charCodeAt()));
    for (var i = 0; i < filtered.length / 2; i++) {
        if (filtered[i] !== filtered[filtered.length - 1 - i]) return false;
    }
    return true;
};

[
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    ["0P", false],
].forEach((tc) => {
    console.log(isPalindrome(tc[0]) === tc[1]);
});
