// Run by Node.js

const getGrade = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    }
    return "F";
};
const solution = (nums) => {
    const score = nums.reduce((acc, cur) => acc + cur) / 3;
    return `${score.toFixed(2)} ${getGrade(score)}`;
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nums = [];
rl.on("line", function (line) {
    nums = line.split(" ").map((v) => Number(v));
    rl.close();
}).on("close", function () {
    console.log(solution(nums));
    process.exit();
});
