// 공간복잡도가 낮은 편으로 나왔는데 재귀+파라미터 3개라서 그런듯하다
// 그래도 로직은 거의 차이 없어서 패스
var reverseList = function (head) {
    var reverse = function (prev, cur, next) {
        if (next === null) return cur;
        var nextnext = next.next;
        cur.next = prev;
        next.next = cur;

        return reverse(cur, next, nextnext);
    };
    var node = head;

    return head && head.next ? reverse(null, head, head.next) : head;
};
