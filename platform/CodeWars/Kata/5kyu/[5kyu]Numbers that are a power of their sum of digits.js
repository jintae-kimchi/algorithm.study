function powerSumDigTerm(n) {
    let num = 81;
    let count = 0;

    while (count < n) {
        let sums = String(num)
            .split("")
            .reduce((prev, cur) => prev + Number(cur), 0);
        let pow = 2;
        // 여기서 루프가
        while (sums > 1 && sums ** pow < num) {
            pow++;
        }
        val = sums ** pow;

        if (val === num) {
            count++;
        }
        num++;
    }

    return --num;
}
// num 반복횟수가 너무 많음 쓰래기 성능

// best practice 분석
// 반복할 대상을 x ** y 형태로 표현 가능한 범위까지 진행하는 식
// 그래서 계산 결과가 오름차순이 아니게 되는 것에 주의
// pow 연산에선 그렇게 큰 부하가 없는듯함 (오버플로 정도만 고려?)
// 범위가 왜 100, 42 까지인지에 대한 질문에 int 범위를 고려해서 정했다고 답변한 내용이 있음
// 다른 솔루션에선 100, 10 으로도 푼 것을 보면 테스트 케이스가 그 이하라고 추정됨
let series = [0];
for (let a = 2; a < 100; a++) {
    for (let b = 2; b < 42; b++) {
        let c = Math.pow(a, b);
        if (
            c
                .toString()
                .split("")
                .reduce((x, y) => x + parseInt(y), 0) === a
        ) {
            series.push(c);
        }
    }
}
series = series.sort((a, b) => a - b);
var powerSumDigTerm = (n) => series[n];

const powerSumDigTerm_retry = (n) => {
    const ans = [];
    for (let d = 2; d < 80; d++) {
        for (let e = 2; e < 15; e++) {
            const val = d ** e;
            const concatVal = String(val)
                .split("")
                .reduce((prev, curr) => prev + Number(curr), 0);
            if (concatVal === d) ans.push(val);
        }
    }
    ans.sort((a, b) => a - b);
    return ans[n - 1];
};

function testing(answer, expect) {
    answer === expect
        ? console.log("pass")
        : console.error("fail", answer, expect);
}
const tcList = [
    [1, 81],
    [2, 512],
    [3, 2401],
    [4, 4913],
    [5, 5832],
    [6, 17576],
    [7, 19683],
    [8, 234256],
    [9, 390625],
    [10, 614656],
    [11, 1679616],
    [12, 17210368],
    [13, 34012224],
    [20, 24794911296],
    [30, 248155780267521],
    [32, 81920000000000000],
    [33, 364375289404334900000],
    [34, 671088640000000000000],
];
tcList.forEach((tc, i) => {
    console.time(i + 1);
    testing(powerSumDigTerm_retry(tc[0]), tc[1]);
    console.timeEnd(i + 1);
});
