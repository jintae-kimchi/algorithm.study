/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 엄청 빨리 풀긴 했는데 역시나 배열에 다음 자식들을 담는 과정이 공간낭비가 심했다.
// 특정 노드의 양쪽 자식들에 대한 재귀적 탐색을 하는 방식으로 다시 풀어보았다.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    var depth = 0;
    if (!root) return depth;
    var next = function (nodes) {
        if (!nodes.length) return;
        var childNodes = [];
        nodes.forEach((node) => {
            if (node.left) childNodes.push(node.left);
            if (node.right) childNodes.push(node.right);
        });
        depth++;
        next(childNodes);
    };
    next([root]);

    return depth;
};

// solution
// bottom-up
var maxDepth_bottomup = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
