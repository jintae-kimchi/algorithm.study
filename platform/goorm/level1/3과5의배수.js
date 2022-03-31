// Run by Node.js

// n <= 1000
const solution = (n) => {
    let sums = 0;
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) sums += i;
    }
    return sums;
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
    console.log(solution(num));
    process.exit();
});
