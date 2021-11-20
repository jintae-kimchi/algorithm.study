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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    var hasSum = false;
    var check = (node, sums) => {
        if (hasSum) return true;
        if (!node) return false;
        sums += node.val;
        if (!node.left && !node.right && sums === targetSum) {
            hasSum = true;
            return true;
        }
        return check(node.left, sums) || check(node.right, sums);
    };
    return check(root, 0);
};
// 마지막 자식까지 탐색한 상태의 누진값만 대상임
// 재귀 진행시 계속 체크할 수 있게 누진결과 넘겨야 하고
// 결과 나오면 빠져나올 수 있게 함
var result = hasPathSum(
    {
        val: 1,
        left: { val: 2, left: null, right: null },
        right: null,
    },
    1,
);
// 솔루션 중 하나를 보니 빼면서 0되는거 찾는게 더 깔끔해보였다
// 그래도 루트인 상태에서 확인하는거나 다음 재귀로 보내는 방식은 비슷해서 따로 구현은 안함
