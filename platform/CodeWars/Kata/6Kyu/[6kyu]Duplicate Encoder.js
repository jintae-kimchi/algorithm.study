/**
 * The goal of this exercise is to convert a string to a new string 
 * where each character in the new string is "(" if that character appears only once in the original string, or ")" 
 * if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

// My Code
function duplicateEncode(word) {
    // 중복: ), 중복아님: (
    // 대소문자는 같이 취급함
    word = word.toLowerCase();
    var dictionary = {};
    for (var i = 0; i < word.length; i++) {
        dictionary[word[i]]
            ? (dictionary[word[i]] = ")")
            : (dictionary[word[i]] = "(");
    }
    var result = "";
    for (var j = 0; j < word.length; j++) {
        result += dictionary[word[j]];
    }

    return result;
}

// Best Practices, Clever
// split, map 스킬 나도 써보도록 하자
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split("")
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
        })
        .join("");
}

// 과거의 내가 풀었구나..
