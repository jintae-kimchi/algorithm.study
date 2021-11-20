// prev 를 null 로 설정하면 고통스런 예외처리가 생김을 알 수 있었다
// 그래도 퍼포먼스는 잘나옴
// runtime: 70%, memory: 91%
var removeElements = function (head, val) {
    // boundary
    if (head === null) return head;
    while (head !== null && head.val === val) head = head.next;

    var curr = head;
    var prev = null;
    while (curr !== null) {
        // remove(skip)
        if (curr.val === val) {
            while (curr != null && curr.val === val) curr = curr.next;
        }
        // go next;
        if (prev) prev.next = curr;
        prev = curr;
        if (curr) curr = curr.next;
    }

    return head;
};

// 더미노드를 활용하면 더 깔끔하게 짤 수 있다
var removeElements = function (head, val) {
    // head를 더미노드로 설정
    var prev = new ListNode();
    prev.next = head;
    head = prev;

    // 다음값이 제거될 값이면 그 다음값으로 연결
    while (prev.next !== null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return head.next;
};
