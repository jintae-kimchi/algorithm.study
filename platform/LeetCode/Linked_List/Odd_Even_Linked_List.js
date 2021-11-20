// 추가헤드 이용해 링크 연결 후 조합하는 방식은 바로 떠올랐다
// 하지만 뇌가 지쳐서 구현을 못해 애먹음
var oddEvenList = function (head) {
    // 홀수번째 노드들과 짝수번째 노드들 정리
    if (!head || !head.next) return head;

    var odd = head;
    var even = head.next;
    var oddHead = head;
    var evenHead = head.next;
    while (odd.next !== null && even.next !== null) {
        odd.next = even.next;
        odd = even.next;
        even.next = odd.next;
        even = odd.next;
    }
    odd.next = evenHead;

    return oddHead;
};
