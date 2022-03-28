const solution = (params) => {
    console.log("hi");
};

// case 1
(function () {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // 핵심은 line 에서 파라미터 가공하고
    // close 전에 solution에 전달
    // 여러 줄을 입력 받으면 close 처리를 적절히 조건화해야 함(입력이 끝인지)
    let data = [];
    rl.on("line", function (line) {
        data.push(line);
        // data.push(...line.split(''))
        rl.close();
    }).on("close", function () {
        solution(data);
        process.exit();
    });
})();

// case 2
(function () {
    const readline = require("readline");

    (async () => {
        let rl = readline.createInterface({ input: process.stdin });

        for await (const line of rl) {
            // case1 의 이벤트 방식에서 async await 구조 바뀐거 제외하면 동일한 구조다
            console.log("Hello Goorm! Your input is", line);
            rl.close();
        }

        process.exit();
    })();
})();

// case 3
(function () {
    const fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().split("\n");

    console.log(input);
})();
