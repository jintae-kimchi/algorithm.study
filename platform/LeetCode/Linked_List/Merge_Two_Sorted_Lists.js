// 솔루션이랑 동일한 논리로 진행하였으나 남은 노드 처리 방식을 무식하게 생각했다
// 남은 노드는 그냥 연결하면 끝나는거였는데..
var mergeTwoLists = function (l1, l2) {
    var nullhead = new ListNode();
    var node = nullhead;

    // 비교하면서 하나라도 다 연결될때까지 진행
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            // l2
            node.next = l2;
            l2 = l2.next;
        } else {
            // l1
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }

    // 한쪽이 끝나면 남은 노드 그대로 이으면 끝
    node.next = l1 || l2;

    return nullhead.next;
};
