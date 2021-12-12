const Test = {
    assertSimilar: (answer, expect) =>
        JSON.stringify(answer) === JSON.stringify(expect)
            ? console.log("pass")
            : console.error("fail", answer, expect),
    strictEqual: (answer, expect) =>
        answer === expect ? console.log("pass") : console.error(answer, expect),
};
