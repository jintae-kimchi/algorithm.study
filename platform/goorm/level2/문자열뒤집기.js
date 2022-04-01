// Run by Node.js

const solution = (str) => {
    return str.split("").reverse().join("");
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    console.log(solution(input));
    process.exit();
});
