/**
 * 단속카메라
 * 
 * 문제 설명
고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 
모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

제한사항

차량의 대수는 1대 이상 10,000대 이하입니다.
routes에는 차량의 이동 경로가 포함되어 있으며 
routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, 
routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.

입출력 예

routes	                                    return
[[-20,15], [-14,-5], [-18,-13], [-5,-3]]	2

입출력 예 설명

-5 지점에 카메라를 설치하면 두 번째, 네 번째 차량이 카메라를 만납니다.

-15 지점에 카메라를 설치하면 첫 번째, 세 번째 차량이 카메라를 만납니다.
 */

/**
 * 내 아이디어는 무참히 짖밟혔고
 * 해결방법 찾아서 그저 코딩했을 뿐이고 ㅎ
 */


/**
 * 
 * @param {*} routes 
 */
function solution(routes) {
    let ans = 0;
    let cameras = [];
    routes.sort((a, b) => {
        // 절대값 작은 순
        let minA = a[0] < a[1] ? a[0] : a[1];
        let minB = b[0] < b[1] ? b[0] : b[1];
        return minA - minB;
    }).forEach((v, i) => {
        let start, end;
        if (v[0] < v[1]) {
            start = v[0];
            end = v[1];
        } else {
            start = v[1];
            end = v[0];
        }

        // 공통범위 존재하면 좁히고 벗어나면 새 카메라 구간으로 세팅
        if (cameras.length) {            
            if (cameras[1] < start) {
                cameras[0] = start;
                cameras[1] = end;
                ans += 1;
            } else {
                if (cameras[0] <= start && start <= cameras[1]) {
                    cameras[0] = start;
                }
                if (end < cameras[1]) {
                    cameras[1] = end;
                }
            }
        } else {
            cameras.push(start, end);
            ans += 1;
        }
    });

    return ans;
}

[
    { param: [[[-20,15], [-14,-5], [-18,-13], [-5,-3]]], expect: 2 },
    // min
    { param: [[]], expect: 0 },
    // fake max
    { param: [[[-30000, 30000]]], expect: 1 },
    { param: [[[-30000, 30000], [-30000, 30000]]], expect: 1 },
    { param: [[[-30000, 0], [0, 30000]]], expect: 1 },
    { param: [[[-30000, 0], [1, 30000]]], expect: 2 },
    // 모두 다른 구간
    { param: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expect: 4 },
    // 두 개의 그룹
    { param: [[[-30000, 0], [1, 30000], [-500, -2000], [500, 2000]]], expect: 2 },
    // 공유
    { param: [[[-2,-1], [1,2],[-3,0]]], expect: 2 },
    { param: [[[0,0],]], expect: 1 },
    { param: [[[0,1], [0,1], [1,2]]], expect: 1 },
    { param: [[[0,1], [2,3], [4,5], [6,7]]], expect: 4 },
    { param: [[[-20,-15], [-14,-5], [-18,-13], [-5,-3]]], expect: 2 },
    { param: [[[-20,15], [-14,-5], [-18,-13], [-5,-3]]], expect: 2 },
    { param: [[[-20,15], [-20,-15], [-14,-5], [-18,-13], [-5,-3]]], expect: 2 },
].forEach(tc => {
    const result = solution(...tc.param); const expect = tc.expect;
    // console.log(tc.param, tc.expect, '==?', result);
    // console.log('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
});