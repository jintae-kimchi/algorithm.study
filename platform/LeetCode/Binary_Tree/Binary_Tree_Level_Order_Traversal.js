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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    while (queue.length) {
        var curNodesVal = [];
        // 현재 큐까지 반복횟수를 설정함
        var curIdx = 0;
        var curLen = queue.length;
        for (; curIdx < curLen; curIdx++) {
            var node = queue[curIdx];
            curNodesVal.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        queue.splice(0, curIdx);
        result.push(curNodesVal);
    }
    return result;
};
// 처음에 생각한 재귀방식으로 구현이 너무 어려워 큐를 활용한 솔루션 참고함
// 큐에 계속 넣으면서 특정 레벨까지만 추출하는 것이 핵심
// 그리고 제출 후 내가 구현하고 싶은 코드를 찾아서 아래에 갈무리
// 난 왜 이걸 못짜는걸까..
var levelOrderIwanted = function (root) {
    var result = [];
    var levelAdd = function (node, depth) {
        if (!node) return;
        // init level
        if (result.length === depth) result.push([]);
        // add
        result[depth].push(node.val);
        // next level
        if (node.left) levelAdd(node.left, depth + 1);
        if (node.right) levelAdd(node.right, depth + 1);
    };
    levelAdd(root, 0);

    return result;
};
