/**
 * 주어지는 배열을 분석하여 어떤 단어가 숨겨져 있는지 해독하기
 * [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
=> whatisup

비밀글자는 중복문자가 없음
각 triplet의 문자집합은 정답 순서대로 있음

// 맨 앞에 올 문자 찾기
// 그거 제외하고 맨 앞에 올 문자 찾기
// 반복..
// 제외한 순서가 실제 문자임


 */

/**
 * 조금 고민했지만 앞의 자리부터 추출하는식으로 끄적거려보니 로직이 나왔다
 * @param {*} triplets
 * @returns
 */
var recoverSecret = function (triplets) {
    // 중복되지 않는 문자 사전 준비
    // const dict = [...new Set(triplets.flat())].reduce((prev, cur) => {
    //     if (!prev[cur]) prev[cur] = true;
    //     return prev;
    // }, {});
    const dict = [
        ...new Set(triplets.reduce((x, y) => x.concat(y), [])),
    ].reduce((prev, cur) => {
        if (!prev[cur]) prev[cur] = true;
        return prev;
    }, {});

    // 첫번째 문자 찾는 로직
    const findFirstChar = (chDict, tripletArr) => {
        // 가장 왼쪽 요소들에 대해 검사
        // 각 문자가 다른 triplet 의 첫요소가 아니면 다음 문자로
        // 해당 문자가 첫 문자면 모든 triplet에서 제거(또는 첫요소 모음에서 검사할 수도 있음)
        for (let ch in chDict) {
            const isFirst = tripletArr.every(
                (triplet) => triplet.findIndex((v) => v === ch) < 1
            );
            if (isFirst) {
                tripletArr.forEach((triplet) => {
                    if (triplet[0] === ch) {
                        triplet.shift();
                    }
                });
                return ch;
            }
        }
        return "?"; // Exception
    };

    // 사전의 모든 문자 검색하면서 추출
    const result = [];
    while (Object.keys(dict).length) {
        const char = findFirstChar(dict, triplets);
        console.log(char);
        delete dict[char];
        result.push(char);
    }

    return result.join("");
};

/**
 * 비슷한 로직도 이렇게 간략하게 표현할 수 있네
 * @param {*} triplets
 * @returns
 */
var recoverSecret_best_and_clever_practice = function (triplets) {
    for (var [first] of triplets) {
        if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
            triplets
                .filter(([item]) => item == first)
                .forEach((tuple) => tuple.shift());
            return (
                first +
                recoverSecret(triplets.filter((tuple) => tuple.length > 0))
            );
        }
    }
    return "";
};

recoverSecret([
    ["t", "u", "p"],
    ["w", "h", "i"],
    ["t", "s", "u"],
    ["a", "t", "s"],
    ["h", "a", "p"],
    ["t", "i", "s"],
    ["w", "h", "s"],
]);
