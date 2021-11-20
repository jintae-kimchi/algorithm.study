/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
왼쪽은 항상 작은 값을 가짐
The right subtree of a node contains only nodes with keys greater than the node's key.
오른쪽은 항상 큰 값을 가짐
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 현재 노드가 inorder 방식으로 정렬되었는지 검사
// 노드의 부모 값과 비교
// 해설을 아무리 봐도 코드로 짜질 못하겠음...
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    var validation = function (node, left, right) {
        if (!node) return true;

        if (left !== null && node.val <= left) return false;
        if (right !== null && node.val >= right) return false;

        if (!validation(node.left, left, node.val)) return false;
        if (!validation(node.right, node.val, right)) return false;

        return true;
    };
    return validation(root, null, null);
};
