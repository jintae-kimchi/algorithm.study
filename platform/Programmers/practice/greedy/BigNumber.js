/**
 * 큰 수 만들기

 문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 
이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. 
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.

입출력 예
number	        k	return
"1924"	        2	"94"
"1231234"	    3	"3234"
"4177252841"	4	"775841"
 */

/**
 * 처음 생각한 방식으로 결과는 나왔으나 실제 성능문제 발생
 * 멘탈나가서 힌트 찾아보니 배열의 인덱스만 조작하면 되는거란걸 암
 * 
 * 이번에 느낀게 엑셀에 표 형태로 정리하니 코드로 쉽게 풀렸다
 */

/**
 * @param {String} number : 1 ~ 1,000,000
 * @param {Number} k : 1 ~ number.length
 * @returns {String}
 */
function solution(number, k) {
    let head = 0;
    let result = '';
    let remain = number.length - k;
    let tail = number.length - remain;

    for (let i = remain; i > 0; i--) {
        let curMax = null;        
        let curMaxIdx = head;
        for (let j = head; j <= tail; j++) {
            if (curMax === '9') break;
            if (!curMax || curMax < number[j]) {
                curMax = number[j];
                curMaxIdx = j;
            }
        }

        head = curMaxIdx + 1;
        tail = number.length - (i - 1);
        result += curMax;
    }

    return result.length ? result : '0';
}

[
    { param: ["1924", 2], expect: "94" },
    { param: ["1231234", 3], expect: "3234" },
    { param: ["4177252841", 4], expect: "775841" },
    { param: ["87654321", 3], expect: "87654" },
    { param: ["0000", 2], expect: "00" },
    { param: ["00010000", 3], expect: "10000" },
    { param: ["00010000", 2], expect: "010000" },
    { param: ["123", 3], expect: "0" },
].forEach(tc => {
    const result = solution(...tc.param); const expect = tc.expect;
    //console.log(tc.param, tc.expect);
    // console.log('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
});