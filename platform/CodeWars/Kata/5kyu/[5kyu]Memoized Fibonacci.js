/**
 * Memoized Fibonacci
 * 기존 학습용 피보나치 함수는 너무 느려서 터짐
 * memorizable 하게 튜닝해봐라
 */

// 내가 짠 건 거꾸로 가는 방식이고 N 만큼의 반복이 일어남
function fibonacci(n) {
    if (n === 0) return 0;
    return _fibonacci(0, 1, 0, n);
}
function _fibonacci(prev, curr, curLen, maxLen) {
    return curLen + 1 < maxLen 
        ? _fibonacci(curr, prev + curr, curLen + 1, maxLen)
        : curr;
}


// Best Practice, Clever
// 검사한 인덱스를 키로 가지는 오브젝트로 재귀 호출 줄였네
// 이게 처음 실행은 느려도 재호출은 훨씬 빠르네
// context가 끝나도 어딘가에 캐싱되는 것 같음(아닐지도..)
var fibonacci2 = (function () {
    var cache = {};
    
    return function(n) {
      
      // Base case
      if(n==0 || n == 1)
          return n;
      
      // Recurse only if necessary
      if(cache[n-2] === undefined)
        cache[n-2] = fibonacci2(n-2);
      if(cache[n-1] === undefined)
        cache[n-1] = fibonacci2(n-1);
      
      return cache[n-1] + cache[n-2];
    };
})(); // Immediately invoke to create a closure for the cache variable

console.time('b');
fibonacci2(1000);
console.timeEnd('b');

console.time('a');
fibonacci(1000);
console.timeEnd('a');
