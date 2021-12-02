/**
 * Permutations
 * 입력문자에 대한 순열 만들어 배열로 리턴
 * 결과는 sort()해서 리턴
 * 생성된 각 문자열들은 중복되지 않아야 함
 *
 * 같은 것이 있는 경우의 순열(동자순열)
 * n! / a!*b!*c!  (a+b+c=n)
 * ex) aabb: 4! / 2!*2! = 24 / 4 = 6
 */

function permutations(string) {
    var resultArr = [];
    var dict = {};
    permDictCollection(string, "", dict);
    Object.keys(dict).map(function (value) {
        resultArr.push(value);
    });
    return resultArr.sort();
}

function permDictCollection(str, val, dict) {
    if (str.length <= 1) {
        val += str;
        if (!dict[val]) dict[val] = 1;
        return;
    }
    for (var i = 0; i < str.length; i++) {
        var next = str.slice(i, str.length) + str.slice(0, i);
        permDictCollection(next.slice(1, next.length), val + next[0], dict);
    }
}

/**
 * 내가 짯다고 적혀있는데 기억도 안난다;
 * 어떻게 재귀적으로 풀었는지 분석하면서 자료구조만 바꿔보았다.
 * @param {*} string
 * @returns
 */
function permutations_refactored(string) {
    var map = new Map();
    const permDictCollection = (str, val, map) => {
        // 문자면 val 에 더하고 사전에 추가
        if (str.length <= 1) {
            val += str;
            if (!map.has(val)) map.set(val, 1);
            return;
        }
        // 현재 문자열에 대한 모든 순열을 구하고
        // 한글자 자른 결과를 계산하는 재귀 실행
        for (var i = 0; i < str.length; i++) {
            var next = str.slice(i, str.length) + str.slice(0, i);
            permDictCollection(next.slice(1, next.length), val + next[0], map);
        }
    };
    permDictCollection(string, "", map);
    return [...map.keys()].sort();
}

// Base Practice
// 내가 짠거랑 속도 차이 별로 없음
function permutations(string) {
    var arr = string.split(""),
        tmp = arr.slice(),
        heads = [],
        out = [];
    if (string.length == 1) return [string];
    arr.forEach(function (v, i, arr) {
        if (heads.indexOf(v) == -1) {
            heads.push(v);
            tmp.splice(tmp.indexOf(v), 1);
            permutations(tmp.join("")).forEach(function (w) {
                out.push(v + w);
            });
            tmp.push(v);
        }
    });
    return out;
}

// Clever
// ㅇㅇ
function permutations(string) {
    return string.length == 1
        ? [string]
        : string
              .split("")
              .map((e, i) =>
                  permutations(string.slice(0, i) + string.slice(i + 1)).map(
                      (e2) => e + e2
                  )
              )
              .reduce((r, e) => r.concat(e))
              .sort()
              .filter((e, i, a) => i == 0 || a[i - 1] != e);
}

// 속도 비교 결과
// myco: 0.43ms
// best: 0.40ms
// clev: 0.65ms
