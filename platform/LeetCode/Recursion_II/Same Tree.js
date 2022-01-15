// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const checker = (a, b) => (!a && !b) || !(!a || !b || a.val !== b.val);

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree_recursive = function (p, q) {
    if (!p && !q) return true;
    if (!checker(p, q)) return false;
    return (
        isSameTree_recursive(p.left, q.left) &&
        isSameTree_recursive(p.right, q.right)
    );
};

const dequeue = (queue) => queue.shift();
const enqueue = (queue, val) => queue.push(val);
var isSameTree_iterate = function (p, q) {
    if (!p && !q) return true;
    if (!checker(p, q)) return false;
    const queueP = [p];
    const queueQ = [q];
    while (queueP.length) {
        const pNode = dequeue(queueP);
        const qNode = dequeue(queueQ);
        if (!pNode) continue;
        if (!checker(pNode.left, qNode.left)) return false;
        if (pNode.left) {
            enqueue(queueP, pNode.left);
            enqueue(queueQ, qNode.left);
        }
        if (!checker(pNode.right, qNode.right)) return false;
        if (pNode.right) {
            enqueue(queueP, pNode.right);
            enqueue(queueQ, qNode.right);
        }
    }
    return true;
};

// 반복문으로 하니 예외처리가 빡세다..

[
    {
        p: {
            val: 1,
            left: {
                val: 2,
            },
            right: {
                val: 3,
            },
        },
        q: {
            val: 1,
            left: {
                val: 2,
            },
            right: {
                val: 3,
            },
        },
    },
    {
        p: {
            val: 10,
            left: {
                val: 5,
            },
            right: {
                val: 15,
            },
        },
        q: {
            val: 10,
            left: {
                val: 5,
                left: {
                    left: null,
                    right: {
                        val: 15,
                    },
                },
            },
            right: null,
        },
    },
].forEach((tc) => {
    console.log(isSameTree_iterate(tc.p, tc.q));
});
