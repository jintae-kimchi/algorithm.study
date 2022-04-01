// Run by Node.js
// 1 ~ n 까지 배열 만들고 3의 배수면 X
const solution = (n) => {
    return Array.from({ length: n }, (_, i) => {
        const v = i + 1;
        return v % 3 === 0 ? "X" : v;
    });
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num = 0;
rl.on("line", function (line) {
    num = parseInt(line);
    rl.close();
}).on("close", function () {
    console.log(solution(num).join(" ") + " ");
    process.exit();
});
