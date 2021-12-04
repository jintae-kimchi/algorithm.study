/**
 * 문제 해석
 *  입력으로 주어진 배열의 짝을 맞춰 배열을 최소화한다
 * (EAST, WEST), (SOUTH, NORTH) 짝을 제거하면서
 * 더 이상 최소화 할 수 없는 배열을 리턴하면 됨
 */

// My code
const east = "EAST";
const west = "WEST";
const south = "SOUTH";
const north = "NORTH";

function dirReduc(arr) {
    // 인접한 놈들만 고려하면 됨
    // 인접한 놈들이 빠진 결과에서 또 인접한거 빼야 함
    return reduc(arr);
}

function reduc(arr) {
    // 재귀 돌면서 인접한거 요소 제거
    for (var i = 0; i < arr.length; i++) {
        if (oppositeDirection(arr[i]) === arr[i + 1]) {
            arr.splice(i, 2);
            return reduc(arr);
        }
    }

    return arr;
}

// 반대 방향 값 추출
function oppositeDirection(dir) {
    switch (dir) {
        case east:
            return west;
        case west:
            return east;
        case south:
            return north;
        case north:
            return south;
        default:
            return "";
    }
}

/**
 * 오오오오래전에 풀었던거 다시 풀어보기
 * 동서, 서동, 북남, 남북 에 대한 케이스 다 제거하면 됨
 * 근데 제거한 다음 배열을 또 검사해서 제거해야 함
 *
 * patterns 를 map 형태로 관리하는게 더 깔끔했을듯
 * return할 때 문자열 분리 어케할찌 고민하다 match 함수쓰는거로 컨닝함
 * @param {*} plan
 * @returns
 */
function dirReduc_retry(arr) {
    // array 짝 제거하면서 최소화
    // 단 정렬 상태는 유지해야
    const patterns = ["SOUTHNORTH", "NORTHSOUTH", "EASTWEST", "WESTEAST"];
    const canReduce = (str = "") => {
        return patterns.some((pattern) => str.indexOf(pattern) > -1);
    };
    let arrStr = arr.join("");
    for (; canReduce(arrStr); ) {
        patterns.forEach((pattern) => {
            arrStr = arrStr.replace(new RegExp(`${pattern}`, "g"), "");
        });
    }
    return arrStr.match(/(NORTH|EAST|SOUTH|WEST)/g) || [];
}

// Best Practice
// reduce 함수 사용
function dirReduc_best(plan) {
    var opposite = {
        NORTH: "SOUTH",
        EAST: "WEST",
        SOUTH: "NORTH",
        WEST: "EAST",
    };
    return plan.reduce(function (dirs, dir) {
        if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
        else dirs.push(dir);
        return dirs;
    }, []);
}

// Clever
// 정규식 사용
function dirReduc_clever(arr) {
    var str = arr.join(""),
        pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern, "");
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
const Test = {
    assertSimilar: (answer, expect) =>
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect),
};
Test.assertSimilar(
    dirReduc_retry([
        "NORTH",
        "SOUTH",
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH",
        "WEST",
    ]),
    ["WEST"]
);
Test.assertSimilar(dirReduc_retry(["NORTH", "WEST", "SOUTH", "EAST"]), [
    "NORTH",
    "WEST",
    "SOUTH",
    "EAST",
]);
Test.assertSimilar(
    dirReduc_retry(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
    []
);
