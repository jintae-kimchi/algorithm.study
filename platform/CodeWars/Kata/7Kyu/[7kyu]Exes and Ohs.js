/**
 * Check to see if a string has the same amount of 'x's and 'o's. 
 * 문자열이 같은 개수의 x, o를 가지고 있는지 확인하라
 * 
 * The method must return a boolean and be case insensitive. The string can contain any char.
 * 불리언 값으로 리턴하고, 대소문자 구분안함. 문자열은 아무 케릭터 들어올 수 있음

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

/**
 * 일단 바로 떠오르는 건 스택임
 * 짝을 만나면 pop 아니면 push
 * 남은 개수가 없으면 true
 *
 * 다른 방법은 문자열을 필터한 개수 비교하는거
 *
 * @param {*} str
 */
function XO(str) {
    return (
        str.replace(/[^o|^O]/g, "").length ===
        str.replace(/[^x|^X]/g, "").length
    );
}

function XO_refactored(str) {
    return str.replace(/[o]/gi, "").length === str.replace(/[x]/gi, "").length;
}
