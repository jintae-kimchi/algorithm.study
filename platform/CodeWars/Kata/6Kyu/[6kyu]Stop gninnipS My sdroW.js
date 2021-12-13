/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(string) {
    return string
        .split(" ")
        .map((word) =>
            word.length < 5 ? word : word.split("").reverse().join("")
        )
        .join(" ");
}

const assert = {
    strictEqual: (answer, expect) =>
        answer === expect ? console.log("pass") : console.error(answer, expect),
};
assert.strictEqual(spinWords("Welcome"), "emocleW");
assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.strictEqual(spinWords("This is a test"), "This is a test");
assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
assert.strictEqual(
    spinWords("You are almost to the last test"),
    "You are tsomla to the last test"
);
assert.strictEqual(
    spinWords("Just kidding there is still one more"),
    "Just gniddik ereht is llits one more"
);
assert.strictEqual(
    spinWords("Seriously this is the last one"),
    "ylsuoireS this is the last one"
);
