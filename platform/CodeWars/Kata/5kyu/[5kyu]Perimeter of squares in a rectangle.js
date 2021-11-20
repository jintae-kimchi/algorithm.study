/**
 * Perimeter of squares in a rectangle
 * 피보나치 사각형
 * 1, 1, 2, 3, 5, 8, 13, ....
 * 의 변의 길이의 합 구하기
 */

function perimeter(n) {
    return Fibonacci(0, 1, 1, 0, n) * 4;
}

function Fibonacci(prev, now, sums, len, maxLen) {
    return (len >= maxLen) ? sums : Fibonacci(now, (prev + now), (sums + prev + now), (len + 1), maxLen);
}

// Best Practices, Clever
// 피보나치 배열 만들고 reduce로 가산하여 출력
// 나도 배열화 생각해봤는데 시행횟수 N 늘어나서 안했음
function perimeter(n) {
    let arr = [1, 1];
    for(let i = 0; i < n - 1; i++) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return 4 * arr.reduce((sum, num) => sum + num, 0);
}