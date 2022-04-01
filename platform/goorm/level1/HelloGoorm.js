// Run by Node.js
const solution = (n) => {
    const hello = `Hello Goorm !`;
    for (let i = 0; i < n; i++) {
        console.log(hello);
    }
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
    solution(num);
    process.exit();
});
