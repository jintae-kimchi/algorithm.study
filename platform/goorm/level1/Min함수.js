// Run by Node.js
const solution = (a, b) => {
    return Math.min(a, b);
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
    console.log(solution(nums[0], nums[1]));
    process.exit();
});
