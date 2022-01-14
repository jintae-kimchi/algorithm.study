/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
 * ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message) {
    //your code here
    const isSmall = (code) => 97 <= code && code <= 122;
    const isCapital = (code) => 65 <= code && code <= 90;
    const isAlphabet = (code) => isSmall(code) || isCapital(code);
    return message
        .split("")
        .map((ch) => {
            const code = ch.charCodeAt();
            if (isAlphabet(code)) {
                if (isSmall(code) && !isSmall(code + 13)) {
                    return String.fromCharCode(code - 13);
                } else if (isCapital(code) && !isCapital(code + 13)) {
                    return String.fromCharCode(code - 13);
                } else {
                    return String.fromCharCode(code + 13);
                }
            }
            return ch;
        })
        .join("");
}

// string 쓸 땐 replace 로 해결하도록 노력해보자..
const rot13_bestPractice = (str) =>
    str.replace(/[a-z]/gi, (letter) =>
        String.fromCharCode(
            // 중간값으로 +13 -13 처리한 부분이 핵심
            letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
        )
    );
