// 재귀로 풀었는데 정답이 아니라고 나왔다. 원인은 더미노드를 prev로 가진 상태로 head 노드 리턴해서 그럤었다..
// 왜 안되는지 찾아보다가 솔루션을 발견했는데 풀이법은 완전 달랐다.
// -> 스택 형태로 next, child 쌓으면서 pop해주면 됨
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) return null;
    var stack = [head];
    var res = new Node();
    var resHead = res;

    while (stack.length) {
        var node = stack.pop();

        res.next = node;
        node.prev = res;
        res = node;

        if (node.next) stack.push(node.next);
        if (node.child) stack.push(node.child);
        res.child = null;
        node.child = null;
    }

    var ans = resHead.next;
    ans.prev = null;
    return ans;
};
