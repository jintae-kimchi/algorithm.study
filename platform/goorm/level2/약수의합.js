// Run by Node.js

const solution = (n) => {
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) ans += i;
    }
    return ans;
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
