/** 주어진 수가 소수인지 판별
 * example
 * is_prime(1) : false
 * is_prime(2) : true
 * is_prime(-1) : false
 * 
 * 소수 정리
 * 1와 자신으로만 나누어 떨어지는 자연수
 * 1은 아님
 * 
 * 그냥 풀면 대학교 퀴즈 수준의 결과가 나오기 때문에
 * 효율적인 방법을 찾아봤음
 * 에라토스테네스의 채
 * - 모둔 자연수는 소수들의 곱으로 표현됨
 * - N이 N의 제곱근보다 크지 않은 어떤 소수로도 나눠지지 않는다
 *      N / M (M: 2 ~ sqrt(N))
 */

function isPrime(num) {
    if (num < 2) return false;
    var sqrtFloor = parseInt(Math.sqrt(num));
    for (var i = 2; i <= sqrtFloor; i++) {
        if (num <= i) return false;
        if (num % i === 0) return false;
    }

    return true;
}

function test(num) {
    result = ' is not prime';
    if (isPrime(num)) {
        result = ' is prime';
    }

    console.log(num + result);
}

test(0);
test(1);
test(2);
test(73);
test(75);
test(-1);
test(17);
test(4);
test(6);
test(2);
test(3);
test(5);


// Best Practices, Clever
// sqrt로 탐색범위 줄일 필요가 없었음..
// function isPrime(num) {
//     for (var i = 2; i < num; i++) if (num % i == 0) return false;
//     return num >= 2; 
// }