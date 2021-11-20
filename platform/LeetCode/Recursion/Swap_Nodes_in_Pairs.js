/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    var fn = function (node) {
        if (!node) return;
        if (!node.next) return;
        [node.val, node.next.val] = [node.next.val, node.val];
        fn(node.next.next);
    };
    fn(head);

    return head;
};
// 메모리를 많이 쓰는 것으로 나왔는데 자바스크립트식 스왑코드를 쓰고 싶었다
