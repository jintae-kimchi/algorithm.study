// solution: n만큼 탐색한 노드를 세팅 후 동시 진행하여 먼저 탐색중인 노드가 끝인 시점에 삭제 포인트가 나옴
// 구현까진 안함
var removeNthFromEnd = function (head, n) {
    // 뒤에서 n 번째 노드 제거

    // 길이 측정
    var node = head;
    var len = 0;
    for (; node.next !== null; len++) {
        node = node.next;
    }

    // 삭제할 노드 검색
    var removeIdx = len - (n - 1);
    node = head;
    var prev = null;
    for (var i = 0; node.next !== null; i++) {
        if (removeIdx === i) {
            break;
        }
        prev = node;
        node = node.next;
    }

    // 삭제처리
    // 양쪽 다 없음
    if (prev === null && node.next === null) {
        head = null;
    }
    // 이전 노드가 없음
    else if (prev === null) {
        head = node.next;
        node = null;
    }
    // 다음 노드가 없음
    else if (node.next === null) {
        prev.next = null;
        node = null;
    }
    // 일반적인 경우
    else {
        prev.next = node.next;
        node = null;
    }

    return head;
};
