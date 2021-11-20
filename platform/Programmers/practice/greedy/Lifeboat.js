/**
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 
 * 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 
구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

입출력 예
people	            limit	return
[70, 50, 80, 50]	100	    3
[70, 80, 50]	    100	    3
 */

/**
 * 뚱뚱한사람 순으로 태우고 남는 자리에 날씬한 사람 넣기?
 * 가장 무거운사람을 태우고 같이 탈 수 있는 가장 무거운 사람 찾는 식으로 짜봤으나..
 * 성능 테스트에서 무너졌다
 * 그런데 이 문제에서는 그냥 정렬 후 양끝부터 태우는식으로만 해도 정답이 나왔다
 * 
 * 후..
 */

/**
 * @param {Array} people [x <= limit].length: 1 ~ 50000
 * @param {Number} limit 40 ~ 240
 */
function solution(people, limit) {
    let ordered = people.sort((a, b) => b - a);
    // head tail idx 조절하면서 answer 계산
    let head = 0;
    let tail = ordered.length - 1;
    let boat = ordered[head];
    let answer = boat ? 1 : 0;
    while (head < tail) {
        const tailVal = ordered[tail];
        if (boat === 0) boat = ordered[head];
        if (boat + tailVal > limit) {
            boat = 0;
            answer += 1;
            head += 1;
        } else {
            boat += tailVal;
            tail -= 1;
        }
    }
    return answer;
}

[
    { param: [[70, 50, 80, 50], 100], expect: 3 },
    { param: [[70, 80, 50], 100], expect: 3 },
    { param: [[10,20,30,40,50,60,70,80,90], 100], expect: 5 },
    { param: [[40,40,40], 100], expect: 2 },
    { param: [[240,240,240,240,240,240,240,240,240,], 240], expect: 9 },
    { param: [[40,40,40,40,40,40,], 240], expect: 1 },
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