/**
 * Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
 */

// int 형 데이터인 경우에 대해 유의해야 함

Math.round = function (number) {
    const intNum = parseInt(number);
    if (intNum === number) return number;
    return intNum + 0.5 <= number ? intNum + 1 : intNum;
};

Math.ceil = function (number) {
    const intNum = parseInt(number);
    if (intNum === number) return number;
    return parseInt(number) + 1;
};

Math.floor = function (number) {
    const intNum = parseInt(number);
    if (intNum === number) return number;
    return parseInt(number);
};
