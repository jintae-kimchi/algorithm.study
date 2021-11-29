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
