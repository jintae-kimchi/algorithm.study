/**
 * 정수 삼각형
문제 설명 Triangle.png

위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 
아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 
예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.

삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 
거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

제한사항
삼각형의 높이는 1 이상 500 이하입니다.
삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
입출력 예
triangle	                                            result
[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	30
 */

/**
 * 동적계획법 - 작은 문제로 만들고 점화식을 이용한 풀이
 *                      7
 *                  3       8
 *              8       1       0
 *          2       7       4       4
 *      4       5       2       6       5
 * 
 * 
 *                      7
 * -------------------------------------------
 *                  3       8
 *                  +7      +7 
 *                  10      15
 * -------------------------------------------
 *              8       1       0
 *              +10     +15     +15
 *              18      16      15
 * -------------------------------------------
 *          2       7       4       4
 *          +18     +18     +16     +15
 *          20      25      20      19
 * -------------------------------------------
 *      4       5       2       6       5
 *      +20     +25     +25     +20     +19
 *      24      30      27      26      24
 * -------------------------------------------
 *      = 30
 * 
 * 삼각형 형태와 값 범위가 정해져서 딱히 여러 케이스도 필요없었음
 */

 /**
  * 
  * @param {Array} triangle 
  */
function solution(triangle) {
    let arr = [];
    const getParent = (pSet, idx) => {
        let left = pSet[idx-1] || 0;
        let right = pSet[idx] || 0;
        return Math.max(left, right);
    }
    for (let lvl = 0; lvl < triangle.length; lvl++) {
        let curLevel = triangle[lvl];
        arr = curLevel.map((v, i) => {
            return v + getParent(arr, i);
        });
    }
    return arr.sort((a, b) => b - a)[0];
}

[
    { param: [[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]], expect: 30 },
].forEach(tc => {
    const result = solution(...tc.param), expect = tc.expect;
    //console.log(tc.param, tc.expect);
    // console.log('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
});