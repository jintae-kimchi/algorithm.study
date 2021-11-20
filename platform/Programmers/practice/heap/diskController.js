
// for(sort)

function solution(jobs) {
    // 경과시간 적용한 요청시간 계산
    const _getActualTime = (val, t) => (val - t > 0) ? val - t : 0;
    // 다음 작업 추출
    const popNextProcess = (q, t) => {
        q.sort((a, b) => {
            // 현재 시간 적용하여 정렬
            const at = _getActualTime(a[0], t);
            const bt = _getActualTime(b[0], t);
            // 수행시작 시간이 같으면 실행시간 기준으로
            return (at === bt) ? b[1] - a[1] : bt - at;
        });
        return q.pop();
    };

    // 현재 큐 처리
    const excessFn = (job, t, s) => {        
        const idle = job[0] - t > 0 ? job[0] - t : 0; // 비는 시간 계산
        s += job[1] + (idle > 0 ? 0 : t - job[0]); // 수행시간 누적     
        t += idle + job[1]; // 시간누적
        return { time: t, sums: s };
    };

    // 초기화
    let excessInfo = {
        time: 0, // 경과시간
        sums: 0 // 요청~수행시간 누적
    };
    const len = jobs.length;
    const queue = jobs.map(x => x); // 큐에 복사(원본 줘도 돌아감..)
    
    // 모든 작업 수행할 때까지 진행 == jobs 개수만큼
    jobs.forEach(job => {
        excessInfo = excessFn(popNextProcess(queue, excessInfo.time), excessInfo.time, excessInfo.sums);
    });

    // 소숫점 버림
    return parseInt(excessInfo.sums / len);
}

// let tcList = [
//     { p1: [[0, 3], [4, 3], [10, 3]], expect: 3 },
//     { p1: [[0, 10], [2, 3], [9, 3]], expect: 9 },
//     { p1: [[1, 10], [3, 3], [10, 3]], expect: 9 },
//     { p1: [[0, 10]], expect: 10 },
//     { p1: [[0, 10], [4, 10], [5, 11], [15, 2]], expect: 15 },
//     { p1: [[0, 1], [1, 2], [500, 6]], expect: 3 },
//     { p1: [[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]], expect: 13 },
//     { p1: [[0, 5], [1, 2], [5, 5]], expect: 6 },
// ];

// tcList.forEach(tc => {
//     // debugger;
//     const ans = solution(tc.p1);
//     if (ans === tc.expect) {
//         console.log('pass');
//     } else {
//         console.error('fail', tc.p1, ans, ' is not ', tc.expect);
//     }
//     console.log('');
// });
