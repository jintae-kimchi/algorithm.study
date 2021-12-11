/**
 * We want to generate all the numbers of three digits where:

the sum of their digits is equal to 10.

their digits are in increasing order (the numbers may have two or more equal contiguous digits)

The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

Make a function that receives two arguments:

the sum of digits value

the desired number of digits for the numbers

The function should output an array with three values: [1,2,3]

1 - the total number of possible numbers

2 - the minimum number

3 - the maximum number

The example given above should be:

findAll(10, 3) => [8, "118", "334"]
If we have only one possible number as a solution, it should output a result like the one below:

findAll(27, 3) => [1, "999", "999"]
If there are no possible numbers, the function should output the empty array.

findAll(84, 4) => []
The number of solutions climbs up when the number of digits increases.

findAll(35, 6) => [123, '116999', '566666']
Features of the random tests:

Number of tests: 112
Sum of digits value between 20 and 65
Amount of digits between 2 and 17

정리하면
k 자릿수 범위의 수 중에서
자릿수 없이 각 숫자를 더했을 때 n 값이 나오는 수들을 찾는거임
근데 각 숫자를 더할 때 관계가 오름차순인거만 찾음(중복도 포함)
 */

/**
 * 
    // 일단 문제 그대로 풀었을 때
    // k 자릿수에 대한 탐색 진행
    // 이 코드는 타임아웃으로 사망하였다.
 * @param {number} n 20 <= n <= 65
 * @param {number} k 2 <= k M<= 17
 * @returns
 */
function findAll(n, k) {
    const ans = [];
    const start = 10 ** (k - 1);
    const limit = 10 ** k;
    for (let digit = start; digit < limit; digit++) {
        const parsed = digit
            .toString()
            .split("")
            .map((ch) => Number(ch));

        const curSums = parsed.reduce((acc, cur) => acc + cur);
        if (curSums === n && parsed.sort().join("") === digit.toString()) {
            ans.push(digit);
        }
    }
    return ans.length
        ? [
              // total number of possible numbers,
              ans.length,
              // min number,
              String(Math.min(...ans)),
              // max number,
              String(Math.max(...ans)),
          ]
        : [];
}

/**
 * // 그럼 접근 방법을 바꿔야 한다

    // 그냥 전체탐색만 시도해도 타임아웃임 다른 방법이 필요함
    // const start = 10 ** (k - 1);
    // const limit = 10 ** k;
    // for (let digit = start; digit < limit; digit++) {}
    // return [];

    // 아아, 와캇다
    // 11111 => 99999 형태로 하면 됨
    // 10000 은 고려할 필요 없고
    // 앞자리보다 큰 값만 필요한거임
    // 이제 데이터를 어떻게 구성해서 탐색할지 생각해보자..
    // digits 마지막부터 9가 되게
    // 현재 뒷자리가 9면?
    // 그 앞자리 1 올리고 뒷자리 "모두" 1올린 수랑 같게()
    // 1111
    // ...
    // 1119 앞자리 1 올리고 112, 뒷자리 모두 그 수랑 같게 1122
    // 1122 ... 1129 ... 1133 ... 1199
    // 1199 앞자리 1 올려야 하는데 그것도 9면 그 앞자리 올리고 뒷자리 모두 그 수랑 같게
    // 1222 ... 1229 ... 1299 ... 1333 ... 1999
    // 동일하게 적용하면
    // 2222 ... 2229 ... 2299 ... 2999 ... 9999
    // 99 => 11, 11 => 99 방식 모두 동일한 횟수 탐색함

    기본 테스트 케이스로도 개선된게 극단적으로 나타났다
    반복문 간결하게 바꾸고 리턴 배열에 값을 넣지 않고 바로 개수, 최소/최대값으로 기록하는게 효과적이었을 것이다.

    best practice를 보니 재귀형태라 역시 훨씬 간결하게 처리됐고 내 코드의 리펙토링 요소도 반영한 것을 확인할 수 있었다.
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
function findAll_retry(n, k) {
    const ans = [];
    const digits = Array.from({ length: k }, () => 1);
    let pointer = digits.length - 1;
    for (; pointer > 0; ) {
        if (digits[pointer] < 10) {
            // 일반적인 경우: 마지막 한자리 올림
            // 값 계산 후 일치하면 기록
            const sums = digits.reduce((acc, cur) => acc + cur);
            if (sums === n) {
                ans.push(Number(digits.join("")));
            }
            // 다음 값 처리
            digits[pointer] += 1;
        } else {
            for (; pointer > 0; ) {
                // 마지막이9이면? : 마지막 앞자리 올림
                if (digits[pointer - 1] === 9) {
                    // 올릴 자리가 9이면 그 앞자리를 바꾸기 위해 포인터 감소
                    pointer--;
                } else {
                    // 앞자리를 1 올리고 그 뒤 값들을 똑같은 값으로 변경
                    digits[pointer - 1] += 1;
                    const nextVal = digits[pointer - 1];
                    for (
                        let childIdx = pointer;
                        childIdx < digits.length;
                        childIdx++
                    ) {
                        digits[childIdx] = nextVal;
                    }
                    pointer = digits.length - 1;
                    break;
                }
            }
        }
    }

    return ans.length
        ? [ans.length, String(Math.min(...ans)), String(Math.max(...ans))]
        : [];
}

const Test = {
    assertSimilar: (answer, expect) => {
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect);
    },
};

const tcList = [
    [999, 2, []],
    [10, 3, [8, "118", "334"]],
    [27, 3, [1, "999", "999"]],
    [84, 4, []],
    [35, 6, [123, "116999", "566666"]],
];
console.time("before");
tcList.forEach((tc) => {
    Test.assertSimilar(findAll(tc[0], tc[1]), tc[2]);
});
console.timeEnd("before");
console.time("after");
tcList.forEach((tc) => {
    Test.assertSimilar(findAll_retry(tc[0], tc[1]), tc[2]);
});
console.timeEnd("after");

// 281 배 차이 ㅋㅋㅋㅋ

// 5
// pass
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:155
// before: 281.23388671875 ms
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:171
// before: 281.322ms
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:171
// 5
// pass
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:155
// after: 1.177001953125 ms
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:176
// after: 1.204ms
// platform/CodeWars/Kata/4kyu/[4kyu]How many numbers III.js:176
