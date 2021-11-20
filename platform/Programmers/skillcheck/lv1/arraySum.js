var test = require('../../../../util/testHelper');

// 배열 간 요소의 합 구하기

function solution(arr1, arr2) {
    var answer = [];

    for (var i = 0, outLen = arr1.length; i < outLen; i++) {
        // arr1[]
        var tmp = [];
        for (var j = 0, inLen = arr1[i].length; j < inLen; j++) {
            // arr1[][]
            tmp.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(tmp);
    }

    return answer;
}

test.areEqualArr(
    solution([[1, 2]], [[3, 4]]), 
             [[4, 6]]);
test.areEqualArr(
    solution([[5, 6], [7, 8, 13]], [[9, 10], [11, 12, 14]]), 
             [[14, 16], [18, 20, 27]]);