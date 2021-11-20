// 테스트 케이스 분석하면 설마 이건가 했더니만 솔루션이었던 방법
var getIntersectionNode = function (headA, headB) {
    // if (headA === headB) return headA;
    // var nodeA = headA;
    // var nodeB = headB;

    // var swapAtoB = false;
    // var swapBtoA = false;
    // while (nodeA.next !== null || nodeB.next !== null) {
    //     if (nodeA === nodeB) return nodeA;
    //     if (nodeA.next === null && !swapAtoB) {
    //         nodeA = headB;
    //     } else {
    //         nodeA = nodeA === null ? null : nodeA.next;
    //     }
    //     if (nodeB.next === null && !swapBtoA) {
    //         nodeB = headA;
    //     } else {
    //         nodeB = nodeB === null ? null : nodeB.next;
    //     }
    // }
    // return nodeA === nodeB ? nodeA : null;

    // 위의 구린 코드는 아래처럼 표현가능
    var nodeA = headA;
    var nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }

    return null || nodeA;
};
// 재탐색 하는 방식
// var getIntersectionNode = function (headA, headB) {
//     // tail 까지 각자 진행 후 먼저 도착하면 기다림
//     var waitA = 0;
//     var waitB = 0;
//     var nodeA = headA;
//     var nodeB = headB;
//     while (nodeA.next !== null || nodeB.next !== null) {
//         if (nodeA.next === null) {
//             waitB += 1;
//         } else if (nodeB.next === null) {
//             waitA += 1;
//         }
//         nodeA = nodeA.next || nodeA;
//         nodeB = nodeB.next || nodeB;
//     }
//     // 늦게 온 노드는 기다린 횟수만큼 먼저 진행 후 순회하면서 겹치는지 검사
//     nodeA = headA;
//     nodeB = headB;
//     while (nodeA.next !== null || nodeB.next !== null) {
//         if (nodeA === nodeB) {
//             break;
//         }
//         if (waitB === 0) {
//             nodeA = nodeA.next || nodeA;
//         } else {
//             waitB -= 1;
//         }
//         if (waitA === 0) {
//             nodeB = nodeB.next || nodeB;
//         } else {
//             waitA -= 1;
//         }
//     }
//     return nodeA === nodeB ? nodeA : null;
// };
