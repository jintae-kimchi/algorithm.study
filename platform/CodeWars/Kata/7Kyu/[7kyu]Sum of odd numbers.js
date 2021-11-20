// My Code
function rowSumOddNumbers(n) {
    // 홀수만으로 이루어진 피라미드
    // 마지막 바닥을 구성하는 수의 총 합 리턴

    // 1 ~ n 까지의 합
    // A) for문 사용
    // var sumOfIndex = 0;
    // for (var i = 1; i <= n; i++) {
    //     sumOfIndex += i;
    // }
    // B) recursive 사용
    var accumulator = function(num) {
        return num === 0 ? num : num + accumulator(num - 1);
    };
    var sumOfIndex = accumulator(n);

    // 실제로 더해야 할 개수 = n
    // 마지막 수 = sumOfIndex * 2 -1
    var result = 0;
    for (var j = 0; j < n; j++) {
        result += (sumOfIndex * 2 - 1) - (j * 2);
    }

    return result;
}

// Best Practice, Clever
// '이것이 알고리즘이다' 절망편
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}