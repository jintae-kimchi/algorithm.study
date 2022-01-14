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
var isValidBST = function (root) {
    var validation = function (node, min, max) {
        if (!node) return true;

        if (min !== null && node.val <= min) return false;
        if (max !== null && node.val >= max) return false;

        if (!validation(node.left, min, node.val)) return false;
        if (!validation(node.right, node.val, max)) return false;

        return true;
    };
    return validation(root, null, null);
};
