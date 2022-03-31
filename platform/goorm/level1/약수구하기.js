// Run by Node.js

const solution = (num) => {
    const limit = parseInt(num / 2);
    const result = [1];
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) result.push(i);
    }
    result.push(num);

    return result.join(" ");
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num = 0;
rl.on("line", function (line) {
    num = Number(line);
    rl.close();
}).on("close", function () {
    console.log(solution(num) + " "); // zz
    process.exit();
});

const tcList = [
    [20, "1 2 4 5 10 20 "],
    [100, "1 2 4 5 10 20 25 50 100 "],
];
