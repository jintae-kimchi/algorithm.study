/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
    ];
};
// 너무 빨리 풀어서 어안이 벙벙~ 점수는 중간정도로 나옴
