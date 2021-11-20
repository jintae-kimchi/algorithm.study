/**
 * 문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 
체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

입출력 예
n	lost	reserve	    return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	        4
3	[3]	    [1]	        2

입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
 */

/**
 * 문제 분석
 *
 * 개수로 판단 가능함
 * 없는놈0
 * 있는놈1
 * 없고여분있는놈1
 * 여분있는놈2
 * 
 * 
 * 풀긴 풀었는데 양쪽 동시 검사 시 문제 있어서 통과 못하는 tc가 존재했음..
 * 혹시나 해서 for문 두개로 나누니 바로 제출되서 현 상태로 종료함
 */



function solution(n, lost, reserve) {
    // 학생 목록 세팅
    const students = Array.from({ length: n }, (v, i) => {
        let val = lost.includes(i + 1) ? 0 : 1;
        return reserve.includes(i + 1) ? val + 1 : val;
    });

    // 빌리는 처리
    const borrow = (arr, i) => {
        if (arr[i] === 0) {
            if (arr[i - 1] === 2 && arr[i - 1] > -1 && arr[i - 1] < 3) {
                arr[i - 1] -= 1;
                arr[i] += 1;
            } else if (arr[i + 1] === 2 && arr[i + 1] > -1 && arr[i + 1] < 3) {
                arr[i + 1] -= 1;
                arr[i] += 1;
            }
        }
        return arr;
    }

    // 탐색
    for (let i = 0; i < students.length; i++) {
        // const last = students.length - 1 - i;
        borrow(students, i);
        // borrow(students, last);
    }
    for (let i = students.length; i > 0; i--) {
        borrow(students, i);
    }

    return students.filter((v) => v >= 1).length;
}

[
    { param: [5, [2, 4], [1, 3, 5]], expect: 5 },
    { param: [5, [2, 4], [3]], expect: 4 },
    { param: [3, [3], [1]], expect: 2 },
    { param: [5, [1,3,5], [1,3,5]], expect: 5 },
    { param: [3, [1,2], [2,3]], expect: 2 },
    { param: [3, [1,3], [2]], expect: 2 },
    { param: [3, [1,2,3], [2]], expect: 1 },
    { param: [4, [1,2,3], [4]], expect: 2 },
    { param: [4, [1,2,3], [3, 4]], expect: 2 },
    { param: [4, [1,4], [2, 3]], expect: 4 },
    { param: [5, [2,3], [3,4]], expect: 4 },
    { param: [5, [1,2,3,4,5], [1]], expect: 1 },
    { param: [5, [1,2,3,4,5], [5]], expect: 1 },
    { param: [5, [1], [1,2,3,4,5]], expect: 5 },
    { param: [5, [1,2,3,4,5], [1,2,3,4,5]], expect: 5 },
    { param: [5, [1], [2]], expect: 5 },
    { param: [5, [1,3,5], [2,4]], expect: 4 },
    { param: [5, [2,4], [1,3,5]], expect: 5 },
    { param: [5, [1,2], [4,5]], expect: 3 },
    { param: [2, [1], [2]], expect: 2 },
    { param: [2, [1], [1]], expect: 2 },
    { param: [2, [2], [2]], expect: 2 },
    { param: [2, [1,2], [2]], expect: 1 },
    { param: [2, [1,2], [1]], expect: 1 },
    { param: [5, [1,2,3,4,5], [1,2,3,4,5]], expect: 5 },
    { param: [5, [1,2,3,4,5], [4,5]], expect: 2 },
].forEach(tc => {
    const result = solution(...tc.param);
    const expect = tc.expect;
    //console.log(tc.param, tc.expect);
    // console.log('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
});