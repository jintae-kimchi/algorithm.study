var test = require('../../../../util/testHelper');

// 입력받은 길이만큼 '수박' 출력

function solution(n) {
    var text = '수박';
    var answer = '';
    var tong = [];
    for (var i = 0; i < n; i += 2) {
        tong.push(text);
    }
    answer = tong.join('');
    if (n % 2 == 1) {
        answer = answer.slice(0, answer.length - 1);
    }

    return answer;
}


test.areEqualStr(solution(1), "수");
test.areEqualStr(solution(5), "수박수박수");
test.areEqualStr(solution(10), "수박수박수박수박수박");