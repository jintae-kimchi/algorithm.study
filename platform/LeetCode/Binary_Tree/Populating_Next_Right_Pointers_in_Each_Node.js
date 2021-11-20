// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

// 완전 이진트리이기 때문에 조건설정이 쉬웠다
// 오른쪽과 건너편 노드 왼쪽 연결 시 부모의 다음노드의 왼쪽인 점이 솔루션
var connect = function (root) {
    var fn = function (node) {
        if (!node) return;
        if (node.next && node.right) {
            node.right.next = node.next.left;
        }
        if (node.left) {
            node.left.next = node.right;
        }

        fn(node.left);
        fn(node.right);
    };

    fn(root);

    return root;
};

var tc = {
    val: 1,
    next: null,
    left: {
        val: 2,
        next: null,
        left: {
            val: 4,
            next: null,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            next: null,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        next: null,
        left: {
            val: 6,
            next: null,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            next: null,
            left: null,
            right: null,
        },
    },
};

var result = connect(tc);
debugger;
