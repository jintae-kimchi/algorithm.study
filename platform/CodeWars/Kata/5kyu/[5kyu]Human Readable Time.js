/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 * 함수를 작성하라, 음수가 아닌 정수를 받았을때 인간이 읽을 수 있는 포맷으로(HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function humanReadable(seconds) {
    const hh = parseInt(seconds / 60 ** 2); // 359999 / 60 ** 2 = 99
    const hh_remained = seconds - hh * 60 ** 2; // 359999 - 356400 = 3599
    const mm = parseInt(hh_remained / 60); // 3599 / 60 = 59
    const ss = hh_remained - mm * 60; // 3599 - 3540 = 59

    const convert = (num) => num.toString().padStart(2, 0);
    return `${convert(hh)}:${convert(mm)}:${convert(ss)}`;
}

/**
 * 난 seconds 의 불필요한 부피를 줄이려고 뺄셈을 추가했는데 그냥 이게 빠름 ㅋㅋ
 * @param {*} seconds
 */
function humanReadable_refactored(seconds) {
    const hh = parseInt(seconds / 60 ** 2);
    const mm = parseInt((seconds % 3600) / 60);
    const ss = seconds % 60;

    const convert = (num) => num.toString().padStart(2, 0);
    return `${convert(hh)}:${convert(mm)}:${convert(ss)}`;
}

function strictEqual(result, expect, desc) {
    result === expect ? console.log("pass") : console.error("fail", arguments);
}

console.time("before");
strictEqual(humanReadable(0), "00:00:00", "humanReadable(0)");
strictEqual(humanReadable(59), "00:00:59", "humanReadable(59)");
strictEqual(humanReadable(60), "00:01:00", "humanReadable(60)");
strictEqual(humanReadable(90), "00:01:30", "humanReadable(90)");
strictEqual(humanReadable(3599), "00:59:59", "humanReadable(3599)");
strictEqual(humanReadable(3600), "01:00:00", "humanReadable(3600)");
strictEqual(humanReadable(45296), "12:34:56", "humanReadable(45296)");
strictEqual(humanReadable(86399), "23:59:59", "humanReadable(86399)");
strictEqual(humanReadable(86400), "24:00:00", "humanReadable(86400)");
strictEqual(humanReadable(359999), "99:59:59", "humanReadable(359999)");
console.timeEnd("before");

console.log("and refactored");
console.time("after");
strictEqual(humanReadable_refactored(0), "00:00:00", "humanReadable(0)");
strictEqual(humanReadable_refactored(59), "00:00:59", "humanReadable(59)");
strictEqual(humanReadable_refactored(60), "00:01:00", "humanReadable(60)");
strictEqual(humanReadable_refactored(90), "00:01:30", "humanReadable(90)");
strictEqual(humanReadable_refactored(3599), "00:59:59", "humanReadable(3599)");
strictEqual(humanReadable_refactored(3600), "01:00:00", "humanReadable(3600)");
strictEqual(
    humanReadable_refactored(45296),
    "12:34:56",
    "humanReadable(45296)"
);
strictEqual(
    humanReadable_refactored(86399),
    "23:59:59",
    "humanReadable(86399)"
);
strictEqual(
    humanReadable_refactored(86400),
    "24:00:00",
    "humanReadable(86400)"
);
strictEqual(
    humanReadable_refactored(359999),
    "99:59:59",
    "humanReadable(359999)"
);
console.timeEnd("after");
