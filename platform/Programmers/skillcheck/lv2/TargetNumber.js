/**
 * numbers 로 주어지는 배열 안에 양의 정수가 있음
 * 각 요소를 더하거나 빼서 target 값이 나오는 경우의 수를 리턴
 *
 * 모든 경우의 수를 조사하는 것으로 이해하니 금방 재귀함수가 만들어졌다.
 * 귀찮아서 테스트 케이스 추가 안한건 찔린다.
 */

function solution(numbers, target) {
    // numbers.length ** 2 가지의 경우의 수가 있다
    let answer = 0;
    const calc = (acc, arr) => {
        if (!arr.length) {
            if (acc === target) answer++;
            return;
        }

        // 재귀적으로 발산시켜서 모든 가짓수 검사하도록
        let cur = arr[0];
        calc(acc + cur, arr.slice(1));
        calc(acc + -1 * cur, arr.slice(1));
    };
    calc(0, numbers);
    return answer;
}

[[[1, 1, 1, 1, 1], 3, 5]].forEach((tc) => {
    JSON.stringify(solution(tc[0], tc[1])) === JSON.stringify(tc[2])
        ? console.log("pass")
        : console.error("fail", tc);
});
