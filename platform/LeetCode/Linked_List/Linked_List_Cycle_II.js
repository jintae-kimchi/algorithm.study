// 이전 문제랑 비교하여 시작 노드를 바꿔야했다
// 마주쳤을때 느린탐색 노드를 헤드로 이동하여 하나씩 진행하면 마주치는 지점이 링크지점
// 수학적으로 풀이한 해설들을 봤지만 이해가 안됨
var detectCycle = function (head) {
    if (head === null) return null;

    var turtle = head;
    var rabbit = head;

    var linked = false;
    while (rabbit !== null && rabbit.next !== null) {
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        if (turtle === rabbit) {
            linked = true;
            break;
        }
    }

    if (!linked) return null;

    turtle = head;
    while (turtle !== rabbit) {
        turtle = turtle.next;
        rabbit = rabbit.next;
    }

    return turtle;
};
