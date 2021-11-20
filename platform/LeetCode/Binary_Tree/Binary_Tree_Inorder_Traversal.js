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
var inorderTraversal = function (root) {
    if (!root) return [];
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
    ];
};
// 개날먹 키키
// 측정결과는 버그인듯 99/20 나옴
