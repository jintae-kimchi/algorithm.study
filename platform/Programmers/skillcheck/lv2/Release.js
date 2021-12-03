/**
 * 배열 두개가 주어진다 (100 이하의 길이)
 * 첫번째는 현재 개발 진척도 (100 미만)
 * 두번째는 해당 개발사항의 개발속도(100 이하 => 0이면 안끝나는데? 조건처리해야하나?)
 * 두 배열의 길이는 같으며 인덱스로 매칭됨
 * 하루 단위로 개발진척도가 올라가며
 * 하루 지날때 배포되는 항목의 개수를 리턴배열에 기록하여 모든 작업이 끝나면 배열 리턴
 *
 *
 * speed 배열도 shift 해야하는걸 잊어서 시간을 좀 날렸다
 * 사실 이게 베스트는 아니라는 확신은 들었다.
 * 배열에 값 할당하고 shift 하는 코드 대신 계산을 통해 결과를 도출하는것도 가능하다.
 * 근데 스킬 체크는 기준시간만 만족하면 통과로 보는 듯?
 */

function solution(progresses, speeds) {
    const answer = [];
    const RELEASE = 100;
    if (speeds.some((speed) => speed <= 0)) {
        console.error("프로젝트 망했다!");
        return answer;
    }
    // day loop
    for (; progresses.length > 0; ) {
        // 작업 진행률 반영
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        // 완료된 작업있으면 추출
        let releaseCounter = 0;
        for (; progresses.length && progresses[0] >= RELEASE; ) {
            progresses.shift();
            speeds.shift();
            releaseCounter++;
        }
        if (releaseCounter > 0) {
            answer.push(releaseCounter);
        }
    }

    return answer;
}

/**
 * 배열에 대한 불필요한 계산은 제거했다
 * 근데 코드가 좀 지저분하네
 * @param {*} progresses
 * @param {*} speeds
 * @returns
 */
function solution_refactored(progresses, speeds) {
    const answer = [];
    const RELEASE = 100;
    if (speeds.some((speed) => speed <= 0)) {
        console.error("프로젝트 망했다!");
        return answer;
    }
    // day loop
    let queueIdx = 0;
    let releasedToday = 0;
    for (let date = 1; queueIdx < progresses.length; ) {
        /**
         * [a, b, c]
         * [x, y, z]
         * n => lim
         * a + xn  b + yn  c + zn
         */
        // console.log(
        //     `${progresses[queueIdx]} + ${speeds[queueIdx]} * ${date} = ${
        //         progresses[queueIdx] + speeds[queueIdx] * date
        //     }`
        // );
        if (progresses[queueIdx] + speeds[queueIdx] * date >= RELEASE) {
            releasedToday++;
            queueIdx++;
        } else {
            date++;
            if (releasedToday > 0) {
                answer.push(releasedToday);
                releasedToday = 0;
            }
        }
    }
    if (releasedToday > 0) {
        answer.push(releasedToday);
    }

    return answer;
}

[
    [
        [93, 30, 55],
        [1, 30, 5],
        [2, 1],
    ],
    [
        [95, 90, 99, 99, 80, 99],
        [1, 1, 1, 1, 1, 1],
        [1, 3, 2],
    ],

    [[0], [1], [1]],

    [[99], [0], []],

    [[50, 50, 50, 50], [50, 50, 50, 50], [4]],

    [[1, 99, 99, 99], [1, 1, 1, 1], [4]],

    [
        [50, 40, 30, 20],
        [10, 10, 10, 10],
        [1, 1, 1, 1],
    ],
].forEach((tc) => {
    JSON.stringify(solution_refactored(tc[0], tc[1])) === JSON.stringify(tc[2])
        ? console.log("pass")
        : console.error("fail", tc);
});
