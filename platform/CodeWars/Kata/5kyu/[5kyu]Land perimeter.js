/**
 * Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. 
 * Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
 * Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
or


should return: "Total land perimeter: 24",
while


['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']

should return: "Total land perimeter: 18"

주어진 배열의 X로 연결된 섬 둘레 길이 구하기
 */

/**
 * 다들 나랑 비슷한 방식으로 계산해서 따로 추가는 안함
 * @param {} arr
 * @returns
 */
function landPerimeter(arr) {
    let ans = 0;
    arr.forEach((row, r, ra) => {
        row.split("").forEach((v, c, ca) => {
            if (v !== "X") return;
            // 주변 탐색
            // 좌, 우
            if (ca[c - 1] !== "X") ans++;
            if (ca[c + 1] !== "X") ans++;
            // 상, 하
            if (!ra[r - 1] || ra[r - 1][c] !== "X") ans++;
            if (!ra[r + 1] || ra[r + 1][c] !== "X") ans++;
        });
    });

    return `Total land perimeter: ${ans}`;
}

const Test = {
    assertEquals: function (answer, expect) {
        answer === expect
            ? console.log("pass")
            : console.error("fail", arguments);
    },
};
Test.assertEquals(
    landPerimeter([
        "OXOOOX",
        "OXOXOO",
        "XXOOOX",
        "OXXXOO",
        "OOXOOX",
        "OXOOOO",
        "OOXOOX",
        "OOXOOO",
        "OXOOOO",
        "OXOOXX",
    ]),
    "Total land perimeter: 60"
);
Test.assertEquals(
    landPerimeter([
        "OXOOO",
        "OOXXX",
        "OXXOO",
        "XOOOO",
        "XOOOO",
        "XXXOO",
        "XOXOO",
        "OOOXO",
        "OXOOX",
        "XOOOO",
        "OOOXO",
    ]),
    "Total land perimeter: 52"
);
Test.assertEquals(
    landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]),
    "Total land perimeter: 40"
);
Test.assertEquals(
    landPerimeter([
        "XOOOXOO",
        "OXOOOOO",
        "XOXOXOO",
        "OXOXXOO",
        "OOOOOXX",
        "OOOXOXX",
        "XXXXOXO",
    ]),
    "Total land perimeter: 54"
);
Test.assertEquals(
    landPerimeter([
        "OOOOXO",
        "XOXOOX",
        "XXOXOX",
        "XOXOOO",
        "OOOOOO",
        "OOOXOO",
        "OOXXOO",
    ]),
    "Total land perimeter: 40"
);
