/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
 * 윌 스미스 아들 제이든 스미스는 가라데 키드와 after earth 에 출연한 스타입니다.
 * Jaden is also known for some of his philosophy that he delivers via Twitter.
 * 제이든은 트위터로 그의 철학을 전달하는것으로도 유명합니다.
 * When writing on Twitter, he is known for almost always capitalizing every word.
 * 트윗을 할 때 그는 모든 단어를 대문자로 쓰는 것으로도 유명합니다.
 * For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
 * 단순하게 말해 당신은 각 단어를 대문자로 만들어야 합니다. 아래 예를 통해 contractions이 어떻게 예상는지 확인하세요
 *
 * Your task is to convert strings to how they would be written by Jaden Smith.
 * 당신의 임무는 문자열을 제이든의 것처럼 바꾸는 것입니다.
 * The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 * 문자열은 실제 제이든의 인용문이지만 제이든화하지 않았습니다.
 *
 * Example:
 *
 * Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 * Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

String.prototype.toJadenCase = function () {
    // A: 65, Z: 90
    // a: 97, z: 122
    // this = ['a', 'b', 'c'];
    let toUpper = false;
    let result = "";
    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        if (i === 0 || toUpper) val = this[i].toUpperCase();
        result += val;
        toUpper = this[i] === " ";
    }
    return result;
};

/**
 * 원래 이렇게 하려 했는데 this가 vscode 디버거에서 먼가 이상한 모양이라 착각해서 this의 인덱스 순회하면서 모음(혓바닥이 길다)
 * @returns
 */
String.prototype.toJadenCase_refactored = function () {
    return this.split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(" ");
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
console.log(
    "How can mirrors be real if our eyes aren't real".toJadenCase_refactored()
);
