// Run by Node.js
const solution = (arr) => {
    return arr.sort((a, b) => a - b).find((v) => true);
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let len = null;
const arr = [];
rl.on("line", function (line) {
    if (!len) {
        len = parseInt(line);
    } else {
        arr.push(...line.split(" ").map((v) => parseInt(v)));
        rl.close();
    }
}).on("close", function () {
    console.log(solution(arr));
    process.exit();
});
