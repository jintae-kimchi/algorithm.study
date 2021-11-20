// 꼬리쪽과 끝쪽을 인간지네해서 새로운 헤드를 설정하는식으로 하였음
// 절반 조금 안되는 결과였지만 코드 구조는 크게 다르지 않았음..
var rotateRight = function (head, k) {
    // circular link로 만듬
    var len = 0;
    var node = head;
    var prev = null;
    while (node) {
        len++;
        prev = node;
        node = node.next;
    }
    if (len > 0) prev.next = head;

    // 새로운 꼬리까지 진행
    var tIdx = len - 1 - (k % len);
    node = head;
    for (var i = 0; i < tIdx; i++) {
        node = node.next;
    }

    // node가 tail
    if (!node || !node.next) return head;
    var newhead = node.next;
    node.next = null;
    return newhead;
};

var tc = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};
var tc2 = {
    val: 1,
    next: null,
};
var tc3 = {
    val: 0,
    next: {
        val: 1,
        next: { val: 2, next: null },
    },
};

rotateRight(tc, 2);
rotateRight(tc2, 1);
rotateRight(tc3, 4);
