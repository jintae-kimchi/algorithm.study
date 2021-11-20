/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var fn = function (node, x, y) {
        if (!node) return null;
        if (node.val === p.val || node.val === q.val) {
            return node;
        }
        var left = fn(node.left, x, y);
        var right = fn(node.right, x, y);

        if (left && right) {
            return node;
        }
        if (left) {
            return left;
        }
        if (right) {
            return right;
        }
        return null;
    };
    return fn(root, p, q);
};

// 가장 가까운 공통 조상을 찾는다
// 입력값이 조상이 될 수 있다
// val은 중복없음 => map을 쓰는 방법이 있을듯
// p, q는 무조건 있음 => root 를 시작값으로
// p !== q
// 최적 솔루션은 O(h) 라고 한다
// 루트부터 탐색하면 되는데 감이 안 안와서 솔루션 참고함
// 왼쪽 오른쪽을 찾고 양쪽 다 있으면 현재 노드가 부모
// 한쪽에만 있으면 그 노드가 부모가 되는 식

[
    [
        {
            val: 3,
            left: {
                val: 5,
                left: {
                    val: 6,
                    right: {
                        val: 2,
                        left: {
                            val: 7,
                        },
                        right: {
                            val: 4,
                        },
                    },
                },
                right: {},
            },
            right: {
                val: 1,
                left: {
                    val: 0,
                },
                right: {
                    val: 8,
                },
            },
        },
        { val: 5 },
        { val: 1 },
        3,
    ],
    [
        {
            val: 3,
            left: {
                val: 5,
                left: {
                    val: 6,
                    right: {
                        val: 2,
                        left: {
                            val: 7,
                        },
                        right: {
                            val: 4,
                        },
                    },
                },
                right: {},
            },
            right: {
                val: 1,
                left: {
                    val: 0,
                },
                right: {
                    val: 8,
                },
            },
        },
        { val: 5 },
        { val: 4 },
        5,
    ],
].forEach(([root, p, q, ans], i, a) => {
    var result = lowestCommonAncestor(root, p, q);
    if (result && result.val === ans) {
        console.log("pass");
    } else {
        console.error("fail");
    }
});
