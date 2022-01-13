/**
 * Task
You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

Example
For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z
Rules
You just need to count the uppercase letters. Any other character will be ignored.
Using * to represent the number of characters.
The order of output is form A to Z. Characters that do not appear in the string are ignored.
To beautify the histogram, there is a space between every pair of columns.
There are no extra spaces at the end of each row. Also, use "\n" to separate rows.
Happy Coding ^_^
 */

function verticalHistogramOf(s) {
    // 데이터 준비
    let maxHeight = 0;
    // A-Z 카운팅할 빈 배열 생성
    const arr = Array(26)
        .fill()
        .map((_) => 0);
    // 입력 문자에서 대문자만 필터 후 카운팅, 최대값 계산
    s.replace(/[^A-Z]/g, "")
        .split("")
        .forEach((ch) => {
            const idx = ch.charCodeAt() - 65;
            arr[idx]++;
            if (arr[idx] > maxHeight) maxHeight = arr[idx];
        });
    // 0인 요소 제외하고 사전생성
    const filteredDict = arr.reduce((prev, curr, idx) => {
        if (curr > 0) {
            prev[String.fromCharCode(idx + 65)] = curr;
        }
        return prev;
    }, {});
    // 사전 값 배열
    const filteredArr = Object.values(filteredDict);
    const maxWidth = Object.keys(filteredDict).length;
    // -------------------------------------------------------

    // 경계값 처리
    if (!filteredArr.length) return "";
    let ans = "";
    // 가장 윗 라인부터 만들어나감
    for (let line = maxHeight; line > 0; line--) {
        let curLineStr = "";
        for (let width = 0; width < maxWidth; width++) {
            if (width !== 0) {
                curLineStr += " "; // 첫 칸 제외하고 빈칸으로 beautify
            }
            curLineStr += filteredArr[width] >= line ? "*" : " "; // 현재 행에 값 추가
        }
        ans += `${line === maxHeight ? "" : "\n"}${curLineStr.trimEnd()}`; // 현재라인 결과값에 삽입, 문제에서 trim 처리 요구함
    }

    // 마지막 문자 표시 라인
    const filteredKeys = Object.keys(filteredDict);
    let lastLineStr = "\n";
    for (let width = 0; width < maxWidth; width++) {
        if (width > 0) lastLineStr += " ";
        lastLineStr += filteredKeys[width];
    }

    return ans + lastLineStr;
}

// best practice
// 가독성도 괜찮고 간결해서 퍼옴
(function () {
    const trimEnd = (str) => str.replace(/[\s\n]+$/, "");

    const arrayHistogram = (arr, pick = (el) => el) => {
        const quant = new Map();
        arr.map((obj) => {
            const el = pick(obj);
            const cnt = quant.get(el) || 0;
            quant.set(el, cnt + 1);
        });
        return quant;
    };

    function verticalHistogramOf(s) {
        const map = arrayHistogram([...s.replace(/[^A-Z]/g, "")]);
        const sorted = [...map].sort((a, b) => a[0].localeCompare(b[0]));
        const quants = sorted.map(([c, q]) => q);
        const chars = sorted.map(([c]) => c);
        const max = Math.max(...quants);
        if (max === -Infinity) return "";
        const res = [];
        for (let i = 0; i < max; ++i) {
            res.push(
                trimEnd(
                    quants.map((q) => (q > max - i - 1 ? "*" : " ")).join` `
                )
            );
        }
        res.push(chars.join` `);
        return res.join`\n`;
    }
});

const Test = {
    assertEquals: (answer, expect) =>
        answer === expect ? console.log("pass") : console.error(answer, expect),
};

Test.assertEquals(
    verticalHistogramOf("XXY YY ZZZ123ZZZ AAA BB C"),
    `          *
            *
            *
  *       * *
  * *   * * *
  * * * * * *
  A B C X Y Z`
);

Test.assertEquals(verticalHistogramOf("abc123"), "");

Test.assertEquals(
    verticalHistogramOf("AAABBC"),
    `*
  * *
  * * *
  A B C`
);
