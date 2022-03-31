// Run by Node.js

// 소수 판별하는 방법은 여러가지 있음
// 문제에서 제시한 성능은 O(root(n))

const solution = (num) => {
    if (num <= 1) return "False";

    // root num 까지만 검사하면 됨
    const limit = Math.sqrt(num);
    for (let i = 2; i < limit; i++) {
        // 현재 수가 소수가 아닌지 검사
        // 자기 자신 이외에 나누어 떨어지는지
        if (num % i === 0) return "False";
    }
    return "True";
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
    console.log(solution(num));
    process.exit();
});
