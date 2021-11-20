/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    var find = null;
    var queue = [root];
    var fn = function (q) {
        if (!q.length) return;
        // bfs
        var node = q.shift();

        if (node && node.val === val) {
            find = node;
            return;
        }

        if (node) {
            q.push(node.left);
            q.push(node.right);
        }
        fn(q);
    };
    fn(queue);
    return find;
};

var tc = [
    {
        tree: {
            val: 0,
            left: {
                val: 1,
                left: {
                    val: 3,
                },
                right: {
                    val: 4,
                },
            },
            right: {
                val: 2,
                left: {
                    val: 5,
                },
                right: {
                    val: 6,
                },
            },
        },
        val: 1,
    },
];

tc.forEach(({ tree, val }) => {
    console.log(searchBST(tree, val));
});
