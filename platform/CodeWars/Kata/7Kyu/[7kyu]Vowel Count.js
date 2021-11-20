// My Code
function getCount(str) {
    return str.replace(/[^aeiou]/g, '').length;
}

// Best Practices, Clever
// 정규식 공부하자 ㅎㅎ...;
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}