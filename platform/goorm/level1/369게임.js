// Run by Node.js
// num 범위정보가 없다
// 33=짝짝 34=짝
const solution = (num) => {
    let clap = 0;
    for (let i = 1; i < num; i++) {
        clap += `${i}`
            .split("")
            .filter((v) => ["3", "6", "9"].includes(v)).length;
    }
    return clap;
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
