/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 
 * 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	    return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
 */

function solution(answers) {

    // 패턴 공통화
    const idiots = [
        [1, 2, 3, 4, 5], // 5
        [2, 1, 2, 3, 2, 4, 2, 5], // 8
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10
    ];
    const lcm = 40;
    const getIdiotValue = (arr, idx) => arr[idx % arr.length];
    const idiotArr = Array.from(new Array(lcm), (v, i) => idiots.map((idiot) => getIdiotValue(idiot, i)));

    // 채점    
    const scores = [
        { key: '1', val: 0 },
        { key: '2', val: 0 },
        { key: '3', val: 0 }
    ];
    answers.forEach((v, i, a) => {
        idiotArr[i % lcm].forEach((iv, ii, ia) => {
            if (v === iv) scores[ii].val++;
        });
    });

    // 최대점수인 사람 뽑기
    const maxVal = scores.sort((a, b) => b.val - a.val)[0].val;

    // 최대점수인 사람 목록 리턴
    return scores.filter((v) => v.val === maxVal)
        .map((v) => parseInt(v.key));
}

[
    { param: [1,2,3,4,5], expect: [1] },
    { param: [1,3,2,4,2], expect: [1,2,3] },
    { param: [2, 3, 4], expect: [2,3] },
].forEach(tc => {
    const result = solution(tc.param).join(', ');
    const expect = tc.expect.join(', ');
    // console.log(tc.param, tc.expect);
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
    console.log('');
});

/**
 * 최소공배수로 공통된 답안 만들어서 반복하는 방식으로 접근함 * 
 * 다른 사람 풀이를 보니 answer.filter() 로 답안마다 따로 검사해서 정답 개수를 뽑음
 * 
 * 최댓값 뽑는 법 몰라서 정렬했는데 아래와 같음
 * Math.max.apply(null, [1, 2, 3, 4])
 * 
 * 
 */