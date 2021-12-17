/**
 * https://stanford.edu/~cpiech/karel/lessons.html#/english/unit12/lesson1
 * 코딩게임
 */

//Make Karel fill the world
//with beepers
function main_8_5() {
    //your code here
    while (frontIsClear()) {
        putBeeperLine();
        goNextRow();
    }
}

function putBeeperLine() {
    putBeeper();
    while (frontIsClear()) {
        move();
        putBeeper();
    }
}
function goNextRow() {
    turnLeft();
    if (frontIsClear()) {
        move();
        turnLeft();
        while (frontIsClear()) {
            move();
        }
        turnAround();
    } else {
        turnRight();
    }
}

////////////////////////////////////////////
//Karel must help rebuild
//broken columns. Make a
//column of beepers above
//each beeper you find on
//the first row
function main() {
    while (frontIsClear()) {
        if (beepersPresent()) {
            column();
        }
        move();
    }
}
function column() {
    turnLeft();
    while (frontIsClear()) {
        move();
        putBeeper();
    }
    turnAround();
    while (frontIsClear()) {
        move();
    }
    turnLeft();
}
////////////////////////////////////////////
//Your final task is to teach
//Karel to find the midpoint
//of any world. You can assume
//that all worlds are square.
function main_12_1() {
    // 일단 와리가리하면서 깔고
    // 끝난 위치부터 왼쪽 정리
    // 그다음 가운데로 이동후
    // 오른쪽 정리
    while (noBeepersPresent()) {
        warigari();
    }
    while (frontIsClear()) {
        pickBeeper();
        move();
    }
    pickBeeper();
    turnAround();
    while (noBeepersPresent()) {
        move();
    }
    while (frontIsClear()) {
        move();
        pickBeeper();
    }
}
function warigari() {
    while (frontIsClear()) {
        move();
    }
    turnAround();
    while (beepersPresent()) {
        move();
    }
    putBeeper();
    move();
}
