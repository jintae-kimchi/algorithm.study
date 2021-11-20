/*
문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
입출력 예
genres	plays	return
[classic, pop, classic, classic, pop]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
입출력 예 설명
classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

고유 번호 3: 800회 재생
고유 번호 0: 500회 재생
고유 번호 2: 150회 재생
pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

고유 번호 4: 2,500회 재생
고유 번호 1: 600회 재생
따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.
*/

const test = require('../../../../util/testHelper');

function solution(genres, plays) {

    // 두 파라미터 조합하여 데이터 생성
    var total = {}; // 재생 수 합계
    var songs = {}; // 장르별 곡 재생 정보
    // !! genres, plays가 같은 인덱스를 가진다고 가정
    for (var i = 0; i < genres.length; i++) {
        if (!total[genres[i]]) total[genres[i]] = 0;
        total[genres[i]] += plays[i];

        if (!songs[genres[i]]) songs[genres[i]] = {};
        songs[genres[i]][i] = plays[i];
    }
    
    // 인기장르 1, 2
    var popGen = Object.keys(total)
                       .sort((x, y) => { return total[y] - total[x] });
    if (popGen.length > 1) popGen = popGen.splice(0, 2);
    // 인기장르 중 가장 인기곡 두개 인덱스
    var ans = [];
    popGen.map(g => {
        var bestSongs = Object.keys(songs[g])
            .sort((x, y) => { return songs[g][y] - songs[g][x] });
        if (bestSongs.length > 1) bestSongs = bestSongs.splice(0, 2);
        ans = ans.concat(Object.values(bestSongs)
                               .map(k => parseInt(k)));
    });
    return ans;
}

test.setTestCase([["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]], [4, 1, 3, 0], 'default');
test.setTestCase([["a", "b", "a", "b", "c"], [100, 200, 300, 400, 500]], [3, 1, 4], 'normal');
test.setTestCase([["a"], [1]], [0], 'onlyone');
test.setTestCase([["a", "a", "a"], [1, 1, 1]], [0, 1], 'onegenre');
test.setTestCase([["a", "b", "c", "b", "c", "d"], [1000, 1, 2, 3, 4, 5]], [0, 4, 2], 'onepopular');
test.setTestCase([["a", "a", "b", "b", "c", "c", "d", "d"], [1, 1, 1, 1, 1, 1, 1, 1]], [0, 1, 2, 3], 'equal');
test.setTestCase([["classic", "pop", "classic", "pop", "classic", "classic"], [400, 600, 150, 2500, 500, 500]], [3, 1, 4, 5], 'q1');
test.setTestCase([["a", "a", "b", "c", "a", "a"], [1, 2, 2, 2, 2, 2]], [1, 4, 2], 'equal2');
test.setTestCase([["a", "b", "c", "d", "e", "f"], [1, 2, 3, 4, 5, 6]], [5, 4], '2results');
test.setTestCase([["a", "a", "d", "d", "c", "b"], [5, 5, 3, 3, 5, 6]], [0, 1, 2, 3], '장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.');
test.setTestCase([["a", "a", "d", "d", "c", "b"], [5, 5, 3, 3, 500, 6]], [4, 0, 1], '장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.');

test.testCase.forEach(t => {
    console.log('');
    console.log(t.name);
    test.areEqualArr(solution(t.params[0], t.params[1]), t.result);
});
