// Run by Node.js
const solution = (a, b) => {
    return [a >> b, a << b];
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const nums = [];
rl.on("line", function (line) {
    nums.push(...line.split(" ").map((ch) => Number(ch)));
    rl.close();
}).on("close", function () {
    console.log(solution(...nums).join("\n"));
    process.exit();
});
