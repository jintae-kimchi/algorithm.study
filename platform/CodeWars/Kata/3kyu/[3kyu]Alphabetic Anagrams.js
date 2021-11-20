/**
 * Alphabetic Anagrams
 * 주어진 단어로 만들 수 있는 문자열을 순서를 정해
 * 입력받은 문자열의 순서값을 리턴
 * 500ms 이하로 동작해야 함
 */

var createWordObj = function(w) {
    var result = {};
    for(var i = 0; i < w.length; i++) {
        result[w[i]] ? result[w[i]]++ : result[w[i]] = 1;
    }
    return result;
}

var getFactorial = function(n) {
    var f = [];
    var factorial = function (n) {
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n-1) * n;
    }
    return factorial(n);
}

function listPosition(word) {
    
    var wordDict = createWordObj(word);

    // 입력받은 문자열 순회
    for (var i = 0; i < word.length; i++) {
        var curChar = word[i];

        // dict에서 현재 문자 나오기 전까지 돌면서 순열개수 구함
        for (var key in wordDict) {
            if (key >= curChar) break;

            
        }
    }

    return 1;
}
  


// 같은 것이 있는 경우의 순열(동자 순열)
// n! / a! * b! * c!  (a + b + c = n)
function permWithSame(word) {
    
    
    

    // 문자열 오브젝트 생성
    var wordObj = createWordObj(word);
    
    // cdba면
    // c전까지의 문자 있으면 그 뒤의 문자들 개수만큼 카운트
    // c까지 왔으면 d로 넘어감
    // d전까지의 문자 있으면 그 뒤의 문자들
}