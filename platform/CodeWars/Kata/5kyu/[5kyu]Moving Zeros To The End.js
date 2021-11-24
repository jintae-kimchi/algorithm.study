/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 *
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

/**
 * 성능적으로 고민한 코드를 보고 싶었는데
 * best/clever practice 가 아래 코드랑 똑같았음
 *
 * 다른 코드들
 * - concat 대신 spread 연산자로 미적으로 보기 좋게만든 코드
 * - reduce 이용하여 결과배열에 unshift, push
 *
 * @param {*} arr
 * @returns
 */
var moveZeros = function (arr) {
    return arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));
};

function assertEquals(a, b) {
    a === b ? console.log("pass") : console.error("fail");
}
assertEquals(
    JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);
