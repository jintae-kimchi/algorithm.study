// Run by Node.js
const mul = (a, b) => {
    return a * b;
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
    // 함수 중첩 형태로 하라고 해서 했는데..
    console.log(mul(mul(nums[0], nums[1]), mul(nums[2], nums[3])));
    process.exit();
});
