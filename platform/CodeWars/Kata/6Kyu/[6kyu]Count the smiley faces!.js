/**
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
 * 인자로 주어지는 배열로 완성하라 countSmileys 함수를 모든 웃는 얼굴의 숫자를

Rules for a smiling face:
웃는 얼굴에 대한 룰

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
각 웃는 얼굴은 짝이 맞는 눈을 가지공 있어야 한다. 눈은 : 또는 ; 이다
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
웃는 얼굴은 코를 가질 수 있지만 없어도 된다. 코는 - 또는 ~ 이다
Every smiling face must have a smiling mouth that should be marked with either ) or D
모든 웃는 얼굴은 웃는 입을 가져야 한다 ) 또는 D 로 표현되는.
No additional characters are allowed except for those mentioned.
언급된 문자 말고는 아무것도 허용하지 않는다.

Valid smiley face examples: :) :D ;-D :~)
웃는 얼굴의 예
Invalid smiley faces: ;( :> :} :]
잘못된 웃는 얼굴

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note
In case of an empty array return 0. 
케이스가 없으면 0을 리턴
You will not be tested with invalid input (input will always be an array). 
입력은 무조건 배열이라고 가정한다.
Order of the face (eyes, nose, mouth) elements will always be the same.
얼굴의 순서는 항상 눈 코 입 순이다.
 */

/**
 * 얼굴형태 정리, 얼굴 분석, 검사 순으로 분리하여 작성하였다.
 * @param {*} arr
 */
function countSmileys(arr) {
    const eyes = [":", ";"];
    const noses = ["", "-", "~"];
    const mouses = [")", "D"];

    return arr.filter((face) => {
        let eye, nose, mouse;
        if (face.length === 2) {
            [eye, nose, mouse] = [face[0], "", face[1]];
        } else {
            [eye, nose, mouse] = [face[0], face[1], face[2]];
        }

        return (
            eyes.includes(eye) && noses.includes(nose) && mouses.includes(mouse)
        );
    }).length;
}

/**
 * 역시 정규식으로 해결함
 * 정규표현식.test() api 는 몰랐으니 공부하자..
 * @param {*} arr
 * @returns
 */
function countSmileys_bestPractice(arr) {
    return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

function assertEquals(result, expect) {
    result === expect ? console.log("pass") : console.error("fail", arguments);
}
assertEquals(countSmileys([]), 0);
assertEquals(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
assertEquals(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
