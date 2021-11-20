/**
 * 문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

입출력 예
numbers	return
"17"	    3
"011"	    2

입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
 */


/**
 * 소수 특징 정리
 * 1과 자신으로만 나누어짐
 * 1은 소수 아님
 * 2를 제외하고 모두 홀수임
 * 특정 소수를 검사하기 위해선 그 값의 루트 이하까지만 검사하면 된다
 */

function solution(numbers) {

    // 순열 만들기
    const permArr = [];
    const createPermutation = (n, arr) => {
        if (typeof n !== 'number') n = 0;
        arr.forEach((v, i, arr) => {
            const curKey = parseInt(n + '' + v);
            if (curKey > 1) permArr.push(curKey);
            const nextArr = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
            createPermutation(curKey, nextArr);
        });
    }
    createPermutation(0, numbers.split('').map(x => parseInt(x)));
    
    // 정렬(asc), 중복 제거
    const map = permArr.sort((a, b) => a - b).reduce((p, c) => { 
        p[c] = true; 
        return p; 
    }, {}); // or Array.from
    const sorted = Object.keys(map).map((v) => parseInt(v));

    // 최댓값 이상의 수가 나올때까지 소수 기록
    const max = sorted[sorted.length - 1];
    const primeDict = {};
    const isPrimeNumber = (num) => {
        for (let i = 2; i * i <= num; i += 2) {
            if (num % i === 0) return false;
            if (i === 2) i--; // 홀수만 진행하도록
        }
        return true;
    }
    for (let i = 2; i <= max; i++) {
        if (isPrimeNumber(i)) primeDict[i] = true;
    }

    // 계산된 소수 정보와 배열 비교하여 일치하는 개수 찾기
    const pNumCount = sorted.filter((v) => primeDict[v]).length;

    return pNumCount;
}

// 변수가 별로 없어서 TC 작성을 소홀히 함 ㅎ
[
    { param: "17", expect: 3 },
    { param: "011", expect: 2 },
].forEach(tc => {
    const result = solution(tc.param);
    const expect = tc.expect;
    // console.log(tc.param, tc.expect);
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
    console.log('');
});