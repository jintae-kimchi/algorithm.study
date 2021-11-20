// 같은 자리 수 연산과 올림수를 고려하는게 핵심
// 마지막 자릿수 더하기도 고려
var addTwoNumbers = function (l1, l2) {
    var result = new ListNode();
    var aa = l1;
    var bb = l2;
    var rr = result;
    var carry = 0;
    while (aa !== null || bb !== null) {
        var aval = aa ? aa.val : 0;
        var bval = bb ? bb.val : 0;
        var sum = aval + bval + carry;
        rr.next = new ListNode(sum % 10);
        rr = rr.next;
        carry = sum > 9 ? 1 : 0;
        aa = aa && aa.next;
        bb = bb && bb.next;
    }
    // 올려야 할 수가 있다면 추가
    if (carry === 1) {
        rr.next = new ListNode(1);
    }

    return result.next;
};
