/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 단순하게 풀기
    // 당연히 비효율적인 결과가 나왔다
    // return s.split("").sort().join("") === t.split("").sort().join("");

    // map
    var sMap = new Map();
    for (var si = 0; si < s.length; si++) {
        if (sMap.has(s[si])) {
            sMap.set(s[si], sMap.get(s[si]) + 1);
        } else {
            sMap.set(s[si], 1);
        }
    }
    for (var ti = 0; ti < t.length; ti++) {
        if (sMap.has(t[ti]) && sMap.get(t[ti]) > 0) {
            sMap.set(t[ti], sMap.get(t[ti]) - 1);
        } else {
            return false;
        }
    }

    return [...sMap.values()].every((v) => v === 0);
};

[
    // ["anagram", "nagaram", true],
    // ["rat", "car", false],
    ["ab", "a", false],
].forEach((tc) => {
    console.log(isAnagram(tc[0], tc[1]) === tc[2]);
});
