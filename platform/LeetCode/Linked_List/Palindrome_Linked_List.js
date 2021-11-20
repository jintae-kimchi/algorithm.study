// 결과 유형이 나처럼 저장하는거 따로 만든 경우와 솔루션 두가지로 나뉘는 양상이었다.
// 원본의 링크 정보를 바꿀 수 있다는 걸 염두해 두고 솔루션을 생각보는 습관을 가지자..
var isPalindrome_bad = function (head) {
    // space: 1, time: N 으로 작성해야 함
    // 길이(가운데) 탐색을 위해선 루프 한번 돌아야 함: N
    // 가운데전까지 순서정보 스택 (정중앙은 무시해도 됨)
    // 꼬리까지 진행하며 스택제거, 회문검사
    // 비트연산은.. 잘 몰라..

    if (head === null) return false;
    if (head.next === null) return true;
    // 배열의 length와 같은 값
    var len = 0;
    var tmp = head;
    for (; tmp !== null; len++) tmp = tmp.next;
    // 가운데 전까지 탐색할 곳
    var mid = Math.floor(len / 2);
    // 가운데 스킵 여부
    var hasCenter = len % 2 === 1;
    // stack
    var stack = "";

    var node = head;
    // 가운데까지 탐색하면서 스택 쌓기
    for (var i = 0; i < mid && node !== null; i++) {
        stack = node.val + stack; // 앞에 넣어주었다
        node = node.next;
    }
    if (hasCenter) node = node.next;
    // 회문인지 검사하면서 스택제거
    for (var j = 0; j < len - mid && node !== null; j++) {
        if (stack[j] !== node.val + "") return false;
        node = node.next;
    }
    return true;
};

// 솔루션: 두 개의 포인터로 중간까지 진행한 노드를 얻는다
// 중간 노드는 다음 노드로 진행하면서 링크정보를 뒤집음
// 중간부터 양쪽으로 진행하면서 회문인지 검사
var isPalindrome = function (head) {
    var slow = head;
    var fast = head;
    var prev = null;
    while (fast !== null && fast.next !== null) {
        // 얘는 두배 속도로 진행
        fast = fast.next.next;
        // 다음 노드
        var next = slow.next;
        // 이전 노드에 연결, 첫 변경이면 null을 연결하게됨
        slow.next = prev;
        // 이전 노드를 현재 노드로 변경
        prev = slow;
        // 현재 노드는 다음노드로 변경
        slow = next;
    }
    // prev 와 slow를 하나씩 비교하면서 회문인지 검사
    // fast 짝수개면 null 홀수면 마지막 노드가 됨
    // 홀수면 slow가 중앙에 있으므로 한칸 이동시킴
    if (fast !== null) slow = slow.next;
    while (prev !== null && slow !== null) {
        if (prev.val !== slow.val) return false;
        prev = prev.next;
        slow = slow.next;
    }
    return true;
};
// odd
var h1 = { val: 0, next: { val: 1, next: { val: 0, next: null } } };
// even
var h2 = {
    val: 0,
    next: { val: 1, next: { val: 1, next: { val: 0, next: null } } },
};
isPalindrome(h1);
