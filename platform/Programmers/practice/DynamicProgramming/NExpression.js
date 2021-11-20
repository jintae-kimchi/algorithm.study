/**
 * 문제 설명
아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 
N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.

입출력 예
N	number	return
5	12	    4
2	11	    3

입출력 예 설명
예제 #1
문제에 나온 예와 같습니다.

예제 #2
11 = 22 / 2와 같이 2를 3번만 사용하여 표현할 수 있습니다.
 */

/**
 * 문제 보자마자 숨이 턱 막혀서 풀이법 검색함
 * N이 주어지면 그 수의 1 ~ 8 까지 세트를 만들고
 * number에 해당하는 값이 있는 가장 적은 세트를 뽑는 식인듯
 * 
 * 사칙연산 수행한 집합에 대해 아래와같이 계산해야함
 * 1 = 1
 * 2 = 1+1
 * 3 = 1+2, 2+1
 * 4 = 1+3, 2+2, 3+1
 * ...
 * 
 * 1N = [N]
 * 2N = [NN, 
 *  1N+1N, 1N-1N, 1N*1N, 1N/1N
 * ]
 * 3N = [NNN, 
 *  1N+2N, 1N-2N, 1N*2N, 1N/2N,
 *  2N+1N, 2N-1N, 2N*1N, 2N/1N
 * ]
 * 4N = [NNN
 *  1N+3N, 1N-3N, 1N*3N, 1N/3N,
 *  2N+2N, 2N-2N, 2N*2N, 2N/2N,
 *  3N+1N, 3N+1N, 3N*1N, 3N/1N
 * ]
 * ...
 */

/**
 * 
 * @param {*} N 
 * @param {*} number 
 */
function solution(N, number) {
    let ans = -1;
    let set = {};
    for (let i = 1; i < 9; i++) {
        let curSet = [];
        for (let j = 0; j < i; j++) {
            let xSet = set[i - j] || [];
            let ySet = set[j] || [];
            xSet.forEach((x) => {
                ySet.forEach((y) => {
                    let values = [...new Set([x + y, x - y, x * y, x !== 0 ? parseInt(x / y) : 0])];
                    let filtered = values.filter((v) => !curSet.includes(v));
                    curSet = curSet.concat(filtered);
                });
            });
        }
        curSet.push(parseInt((N + '').repeat(i)));
        set[i] = [...new Set(curSet)];

        if (Object.values(set).some((v) => v.includes(number))) {
            ans = i;
            break;
        }
    }

    return ans;
}

[
    { param: [2, 11], expect: 3 },
    { param: [5, 12], expect: 4 },
    { param: [2, 11], expect: 3 },
    { param: [5,5], expect: 1 },
    { param: [5,10], expect: 2 },
    { param: [5,31168], expect: -1 },
    { param: [3,4], expect: 3 },
    { param: [5,5555], expect: 4 },
    { param: [5,5550], expect: 5 },
    { param: [5,20], expect: 3 },
    { param: [5,30], expect: 3 },
    { param: [5,2], expect: 3 },
    { param: [1,1], expect: 1 },
    { param: [1,11], expect: 2 },
    { param: [1,111], expect: 3 },
    { param: [1,1111], expect: 4 },
    { param: [1,11111], expect: 5 },
    { param: [7,7784], expect: 5 },
    { param: [2,22222], expect: 5 },
    { param: [2,22224], expect: 6 },
    { param: [2,11111], expect: 6 },
    { param: [2,11], expect: 3 },
    { param: [2,111], expect: 4 },
    { param: [2,1111], expect: 5 },
    { param: [9,36], expect: 4 },
    { param: [9,37], expect: 6 },
    { param: [9,72], expect: 3 },
    { param: [3,18], expect: 3 },
    { param: [2,1], expect: 2 },
    { param: [5,4], expect: 3 },
    
    { param: [4,17], expect: 4 },
    { param: [6,65], expect: 4 },
    { param: [5,1010], expect: 7 },
    { param: [1,1121], expect: 7 },
    { param: [7,7776], expect: 6 },
    { param: [2,22223], expect: 7 },
].forEach(tc => {
    const result = solution(...tc.param), expect = tc.expect;
    //console.log(tc.param, tc.expect);
    // console.log('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
});