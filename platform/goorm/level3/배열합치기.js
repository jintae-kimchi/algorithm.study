// Run by Node.js
const solution = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b);
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const param = {
    lenInfo: [],
    arrA: [],
    arrB: [],
};
let errorCheck = 0;
rl.on("line", function (line) {
    if (!param.lenInfo.length) {
        param.lenInfo = line.split(" ");
    } else if (!param.arrA.length) {
        param.arrA = line.split(" ").map((v) => Number(v));
    } else if (!param.arrB.length) {
        param.arrB = line.split(" ").map((v) => Number(v));
    } else {
        rl.close();
    }
    errorCheck++;
    if (errorCheck > 100) {
        console.log("??");
        rl.close();
    }
}).on("close", function () {
    console.log(solution(param.arrA, param.arrB).join(" ") + " ");
    process.exit();
});
