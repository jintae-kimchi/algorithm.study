/**
 * 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.

입출력 예
name	    return
"JEROEN"	56
"JAN"	    23
 */

/**
 * 현재 커서 위치에서 최소값 찾기
 * 결국 원형 리스트 형태의 데이터에서 최소 인덱스 찾는게 핵심임..
 * 그리고 알파벳 바꾸는 비용은 바뀌지 않음
 * 그러므로 인덱스 이동을 최소하하는거만 고려하면 됨
 * 배열 분해 안하고 해도 되는데 성능 테스트 통과돼서 제출
 */

function solution(name) {
    let answer = 0;
    let startArr = Array.from({length: name.length}, () => 'A'.charCodeAt());
    let paramArr = name.split('').map((v) => v.charCodeAt());
    
    // 현재 커서 기준 바꿔야할 대상 중 가장 가까운 것
    let len = name.length;
    let i = 0;
    while (true) {
        let minIdx = null;
        let minVal = null;
        let minIdxVal = null;
        for (let j = 0; j < paramArr.length; j++) {
            // 같은 인덱스에 값이 같으면 스킵
            if (i === j && startArr[i] === paramArr[j]) continue;
            // 바꿀 필요가 없는 값은 스킵
            if (startArr[j] === paramArr[j]) continue;
            // 최소값 찾기
            let valAsc = Math.abs(startArr[j] - paramArr[j]);
            let valDesc = Math.abs(startArr[j] + 26 - paramArr[j]);
            let charVal = valAsc < valDesc ? valAsc : valDesc;
            // 최소 인덱스 찾기
            let lenValAsc = Math.abs(i - j);
            let lenValDesc = Math.abs(i + len - j);
            let lenVal = lenValAsc < lenValDesc ? lenValAsc : lenValDesc;
            // 최소값 업데이트
            let curVal = charVal + lenVal;
            // console.log(`${j}>> (${startArr[j]}, ${paramArr[j]}, ${lenVal}) => ${curVal}`);
            if (minIdxVal == null || minIdxVal > lenVal) {
                minIdxVal = lenVal;
                minVal = curVal;
                minIdx = j;
            }
        }
        // console.log(`index: ${minIdx}, val update: (${startArr[minIdx]} -> ${paramArr[minIdx]})`);
        // console.log('');

        // 최소값 찾았으면 ans에 더하고 시작배열의 값도 업데이트
        answer += minVal;
        startArr[minIdx] = paramArr[minIdx];
        i = minIdx;
        if (startArr.join(',') === paramArr.join(',')) break;
    }
    
    return answer;
}

[
    { param: ["AZAZA"], expect: 5 },
    { param: ["AAAZ"], expect: 2 },
    { param: ["JEROEN"], expect: 56 },
    { param: ["JAN"], expect: 23 },
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