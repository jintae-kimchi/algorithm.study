// Run by Node.js
const solution = (a, oper, b) => {
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return (a / b).toFixed(2);
        default:
            throw `unknown operator: ${oper}`;
    }
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let args = [];
rl.on("line", function (line) {
    args = line.split(" ");
    args[0] = Number(args[0]);
    args[2] = Number(args[2]);
    rl.close();
}).on("close", function () {
    console.log(solution(...args));
    process.exit();
});
