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

function dirReduc(arr){
    // 인접한 놈들만 고려하면 됨
    // 인접한 놈들이 빠진 결과에서 또 인접한거 빼야 함
    return reduc(arr);;
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


// Best Practice
// reduce 함수 사용
function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
    }, []);
}

// Clever
// 정규식 사용
function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}