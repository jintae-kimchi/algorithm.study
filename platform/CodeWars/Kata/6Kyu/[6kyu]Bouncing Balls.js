/**
 * A child is playing with a ball on the nth floor of a tall building. 
 * 꼬꼬마가 N층에서 공을 가지고 놀고 있다.
 * The height of this floor, h, is known.
 * 층의 높이는 h이다
 * He drops the ball out of the window. 
 * 꼬마는 창문 밖으로 공을 던진다.
 * The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
 * 공은 현재높이 * bounce 만큼 튕긴다
 * His mother looks out of a window 1.5 meters from the ground.
 * 걔 엄마는 1.5미터의 창문으로 바라본다.
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
 * 걔 엄마가 몇번이나 창문으로 공이 지나가는걸 볼 수 있나? (올라가고 떨어지는거 포함해서)

Three conditions must be met for a valid experiment:
유효한 실험헤서 세 가지 조건을 만나게 된다.
Float parameter "h" in meters must be greater than 0
float 타입의 h는 0보다 커야 한다.
Float parameter "bounce" must be greater than 0 and less than 1
float 타입의 bounce 는 0보다 크고 1보다 작아야 한다.
Float parameter "window" must be less than h.
float 타입의 window는 h 보다 작아야 한다.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
3가지 조건을 다 만족한다면, 양의 정수를 리턴하라, 그렇지 않으면 -1

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
튕기는 공의 높이는 무적권 window 값보다 커야 볼 수 있다.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
 */

/**
 * 영어 독해가 더 빡센 문제같았다
 * 해석만 끝나니 그냥 바로 작성됨
 * @param {*} h
 * @param {*} bounce
 * @param {*} window
 */
function bouncingBall(h, bounce, window) {
    // 파라미터가 유효하지 않은 조건 계산해서 -1 처리
    if (!(h > 0)) return -1;
    if (!(bounce > 0 && bounce < 1)) return -1;
    if (!(window < h)) return -1;

    // h 변화량
    // 3 -> 3 * bounce -> (3 * bounce)bounce -> ...
    // 한번 계산 시 window 와의 관계에 따라 count 계산
    // 튕긴 높이가 window 이하면 종료조건임
    let count = 0;
    while (h > window) {
        // 일단 고점에서 바닥으로
        count++;

        // 튕긴다

        // 튕긴높이
        h *= bounce;

        // 튕겼는데 창문높이 이하다? 끝내.
        if (h <= window) {
            break;
        }
        // 창문 넘음
        count++;

        // 다음 루프 진행
    }
    return count;
}

/**
 * 내 코드의 리펙토링 버전?
 * while문 이렇게 쓰는거 첨봄
 * while (condition) {
 *      (),() // 이런건가?
 * }
 * @param {*} h
 * @param {*} bounce
 * @param {*} window
 * @returns
 */
function bouncingBall_best_and_clever(h, bounce, window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1)
        while (h > window) (rebounds += 2), (h *= bounce);
    return rebounds;
}

[
    [[3.0, 0.66, 1.5], 3],
    [[30.0, 0.66, 1.5], 15],
].forEach((tc) =>
    bouncingBall(...tc[0]) === tc[1]
        ? console.log("pass")
        : console.error("fail", tc)
);
