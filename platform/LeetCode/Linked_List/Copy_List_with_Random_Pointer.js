// 힌트가 노드 복사하래서 슥슥 풀었는데 원본 노드의 링크정보 복구를 잊고 삽질했다..
// hashmap 방식은 원본과 복사 노드 짝을 만드는 것이 핵심. 구현은 안했음..
var copyRandomList = function (head) {
    if (!head) return null;

    // 복사부터?
    var node = head;
    while (node) {
        var copyNode = new Node();
        copyNode.next = node.next;
        copyNode.val = node.val;
        node.next = copyNode;
        node = copyNode.next;
    }
    // random 값 설정
    node = head;
    while (node) {
        if (node.random) {
            // 원본 노드의 다음 노드가 복사된 노드의 랜덤 노드가 됨
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
    // 복사된 것과 원본의 링크 수정
    // 원본의 링크정보를 복구시켜야함에 유의
    node = head;
    var copyhead = head.next;
    var copy = copyhead;
    while (node) {
        // 다음 노드를 두칸 뒤로 바라보게 함
        node.next = node.next.next;
        if (node.next) {
            copy.next = node.next.next;
        }

        // 두칸 뒤 노드로 이동
        node = node.next;
        copy = copy.next;
    }

    return copyhead;
};
