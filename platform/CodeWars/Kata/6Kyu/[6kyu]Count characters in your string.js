/**
 * The main idea is to count all the occurring characters in a string.
 * If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 * What if the string is empty? Then the result should be empty object literal, {}.
 * */

// string to dictionary

function count(string) {
    return string.split("").reduce((prev, cur, idx) => {
        if (prev[cur]) prev[cur]++;
        else prev[cur] = 1;
        return prev;
    }, {});
}
