/**
 * Maximum subarray sum
 * 인접한 합이 가장 큰 값을 구해야 함
 * 합이 음수이면 0 리턴
 * 빈 배열도 0
 */

// 졸라 쉽게 짠 거 O(n^3)
var maxSequence = function(arr){
    if (arr.length === 0) return 0;

    var max = 0;
    // 길이가 범위크기
    for (var i = 0; i < arr.length; i++) {
        // 현재 범위로 내부의 모든 합을 구함
        for (var j = 0; j + i < arr.length; j++) {
            var sums = 0;
            // arr[j] ~ arr[j+i] 까지의 요소 합함
            sums = arr.slice(j, (j + i + 1)).reduce((prev, curr) => prev += curr);
            // max 값 갱신
            max = (max > sums) ? max : sums;
        }
    }

    return max;
}


// Best Practice, Clever
// for 문 하나로 줄였다
// 하나씩 진행하면서 손절할거 바로 손절하는 로직으로 짜여있음
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
}
