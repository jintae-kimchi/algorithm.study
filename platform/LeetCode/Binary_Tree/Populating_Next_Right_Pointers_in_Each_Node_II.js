// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

// 이전 문제랑 비슷하지만 연결하는 조건만 변경하면 될 거라 생각했다
// 하지만 깊이 우선탐색은 이웃에 대한 탐색 없이 연결을 시도하여 잘못된 결과가 발생하였다.
var connect = function (root) {
    var fn = function (node) {
        if (!node) return;

        // 건녀편 노드 검색
        var nextNode = node.next;
        var cousin = null;
        while (nextNode && !cousin) {
            if (nextNode) {
                cousin = null || nextNode.left || nextNode.right;
            }
            nextNode = nextNode.next;
        }

        if (node.left) {
            // 오른쪽 있으면 연결 없으면 건너편 연결
            node.left.next = null || node.right || cousin;
        }

        if (node.right) {
            // 건녀편 있으면 연결
            node.right.next = null || cousin;
        }

        fn(node.left);
        fn(node.right);
    };

    fn(root);

    return root;
};

// 이웃의 정보를 계산 후 자식들에 대한 연결을 하기 위해 큐를 이용한 너비 우선 탐색으로 작성하였다.
// next 연결 시 기존 로직을 그대로 재탕하였는데 next 찾는 방식의 비효율로 점수가 좋지 않게 나왔다
var connect_BFS = function (root) {
    var queue = [root];
    var fn = function () {
        var node = queue.shift();
        if (!node) return;

        // 건녀편 노드 검색
        var nextNode = node.next;
        var cousin = null;
        while (nextNode && !cousin) {
            if (nextNode) {
                cousin = null || nextNode.left || nextNode.right;
            }
            nextNode = nextNode.next;
        }
        if (node.left) {
            // 오른쪽 있으면 연결 없으면 건너편 연결
            node.left.next = null || node.right || cousin;
            queue.push(node.left);
        }
        if (node.right) {
            // 건녀편 있으면 연결
            node.right.next = null || cousin;
            queue.push(node.right);
        }

        fn();
    };
    fn();
    return root;
};

// 큐의 특징을 이용한 솔루션 구현해보기
// 로직이 이해는 되지만 이런 아이디어를 구현하는건 어려운 것 같다..
// 큐를 사용하여 O(N), O(N) 이 됨
var connect_solution1 = function (root) {
    var queue = [root, null];
    while (queue.length) {
        var node = queue.shift();

        // next 연결
        node.next = queue[0] || queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        if (queue.length && !node.next) queue.push(null);
    }

    return root;
};

// 문제에서 재귀로 인한 공간비용 안친다고 함
// O(N) O(1) 로 구현한 코드
var connect_solution2 = function (root) {
    if (!root) return null;

    var head = root;
    while (head) {
        // 특정 레벨의 시작노드를 가리킬 더미 노드
        var dummy = new Node();
        // 현재 레벨 노드를 진행하여 자식들을 연결함 tmp에 마지막 노드를 지정
        var tmp = dummy;
        while (head) {
            if (head.left) {
                tmp.next = head.left;
                tmp = tmp.next;
            }
            if (head.right) {
                tmp.next = head.right;
                tmp = tmp.next;
            }
            head = head.next;
        }
        head = dummy.next;
    }

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
        left: null,
        right: {
            val: 7,
            next: null,
            left: null,
            right: null,
        },
    },
};
var tc2 = {
    val: 1,
    next: null,
    left: {
        val: 2,
        next: null,
        left: {
            val: 4,
            next: null,
            left: {
                val: 7,
                next: null,
                left: null,
                right: null,
            },
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
        left: null,
        right: {
            val: 6,
            next: null,
            left: null,
            right: {
                val: 8,
                next: null,
                left: null,
                right: null,
            },
        },
    },
};
var tc3 = {
    val: 2,
    left: {
        val: 1,
        left: {
            val: 0,
            left: {
                val: 2,
            },
        },
        right: {
            val: 7,
            left: {
                val: 1,
            },
            right: {
                val: 0,
                left: {
                    val: 7,
                },
            },
        },
    },
    right: {
        val: 3,
        left: {
            val: 9,
        },
        right: {
            val: 1,
            left: {
                val: 8,
            },
            right: {
                val: 8,
            },
        },
    },
};

var result = connect_solution2(tc3);
