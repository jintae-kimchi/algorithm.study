// Run by Node.js
const solution = (teams) => {
    let ans = 0;
    for (let i = 1; i < teams; i++) {
        ans += i;
    }
    return ans;
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let v = 0;
rl.on("line", function (line) {
    v = parseInt(line);
    rl.close();
}).on("close", function () {
    console.log(solution(v));
    process.exit();
});
