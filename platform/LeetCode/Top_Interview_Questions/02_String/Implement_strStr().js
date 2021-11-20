/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // indexOf 구현하기
    // 순수하게 루프만 돌리니 처참한 결과가 나옴
    if (needle.length === 0) return 0;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, needle.length) === needle) return i;
            // var match = true;
            // for (var j = 0; j < needle.length; j++) {
            //     if (haystack[i + j] !== needle[j]) {
            //         match = false;
            //         break;
            //     }
            // }
            // if (match) return i;
        }
    }
    return -1;
};

[
    ["hello", "ll", 2],
    ["aaaaa", "bba", -1],
    ["", "", 0],
].forEach((tc) => {
    if (strStr(tc[0]) !== tc[2]) break;
    else {
    }
});
