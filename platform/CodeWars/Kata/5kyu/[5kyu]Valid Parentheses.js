/**
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
 */

// ( ())((()())())
// [(]

// ( ))((()())())
// [((]

// ) )((()())())
// [(] ( + )

// ) ((()())())
// [] ( + )

// ( (()())())
// [(]

// ( ()())())
// [(, (]

// ( )())())
// [(, (, (]

// ) ())())
// [(, (] ( + )

// ( ))())
// [(, (, (]

// ) )())
// [(, (] ( + )

// ) ())
// [(] ( + )

// ( ))
// [(, (]

// ) )
// [(] ( + )

// )
// [] ( + )

/**
 * 문제가 대놓고 스택 개념이라 스택으로 풀었다.
 * @param {*} parens
 * @returns
 */
function validParentheses(parens) {
    const stack = [];
    for (let i = 0; i < parens.length; i++) {
        const char = parens[i];
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            const popped = stack.pop();
            if (popped !== "(") return false;
        }
    }
    return stack.length === 0;
}

/**
 * 근데 사실 스택에 데이터를 쌓을 필요 없이 짝이 맞는가를 보면 되는거였다.
 * push pop 대신 +, - 를 통해 괄호 닫는게 더 많아져 음수가 되는가를 보면 되었다.
 * 그리고 남은 여는괄호는 0인지를 보면 된다.
 * @param {*} parens
 * @returns
 */
function validParentheses_refactored(parens) {
    let pair = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") pair++;
        if (parens[i] === ")") pair--;
        if (pair < 0) return false;
    }
    return pair === 0;
}

[
    ["(", false],
    ["())", false],
    ["()", true],
    [")(()))", false],
    ["(", false],
    ["(())((()())())", true],
].forEach((tc) => {
    validParentheses_refactored(tc[0]) === tc[1]
        ? console.log("pass")
        : console.error("fail", arguments);
});
