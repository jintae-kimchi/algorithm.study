/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
 * 대시나 언더스코어 문자를 제거하고 단어를 카멜케이스로 변경하는 함수를 작성하라
 * 
 * The first word within the output should be capitalized only if the original word was capitalized 
 * 원본의 첫번째 단어가 대문자로 시작하는 경우만 대문자로 변형함
 * (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
    return str
        .split(/[-|_]/g)
        .map((word, i) => {
            if (i === 0) return word;
            return `${word[0].toUpperCase()}${word.slice(1)}`;
        })
        .join("");
}

/**
 * 진태는 정규식이 밉다
 * ("-|_" + "영문자") 형태 찾아서 뒤에것만 대문자로 변환
 * @param {*} str
 * @returns
 */
function toCamelCase_refactored(str) {
    // \w : 밑줄을 포함한 영문 문자
    return str.replace(/[_|-]\w/gi, (match) => match.charAt(1).toUpperCase());
}

function assertEquals(a, b, r) {
    if (a === b) {
        console.log("pass", a, b, r);
    } else console.error("fail", a, b, r);
}
assertEquals(
    toCamelCase_refactored(""),
    "",
    "An empty string was provided but not returned"
);
assertEquals(
    toCamelCase_refactored("the_stealth_warrior"),
    "theStealthWarrior",
    "toCamelCase('the_stealth_warrior') did not return correct value"
);
assertEquals(
    toCamelCase_refactored("The-Stealth-Warrior"),
    "TheStealthWarrior",
    "toCamelCase('The-Stealth-Warrior') did not return correct value"
);
assertEquals(
    toCamelCase_refactored("A-B-C"),
    "ABC",
    "toCamelCase('A-B-C') did not return correct value"
);
