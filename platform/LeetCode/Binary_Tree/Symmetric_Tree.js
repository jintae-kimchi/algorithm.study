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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // 절반으로 나누고 양쪽을 순회하는데 대칭으로 탐색, 결과 비교
    if (!root) return false;

    var searchLeft = function (node) {
        if (!node) return [null];
        return [node.val, ...searchLeft(node.left), ...searchLeft(node.right)];
    };
    var searchRight = function (node) {
        if (!node) return [null];
        return [
            node.val,
            ...searchRight(node.right),
            ...searchRight(node.left),
        ];
    };
    return (
        searchLeft(root.left).join(",") === searchRight(root.right).join(",")
    );
};
// 통과는 했는데 전체 순회 후 검사하면 쓸데없는 검사가 많아짐
// 하나씩 비교하며 중단할 수 있도록 개선
var isSymmetric = function (root) {
    if (!root) return false;
    var validate = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;

        if (!validate(left.left, right.right)) return false;
        if (!validate(left.right, right.left)) return false;

        return true;
    };

    return validate(root.left, root.right);
};
// 좀 더 개선된 결과가 나왔다
