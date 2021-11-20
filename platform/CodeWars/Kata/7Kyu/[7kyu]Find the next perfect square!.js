// My Code
function findNextSquare(sq) {
    var sqrtNum = Math.sqrt(sq);
    if (sqrtNum - parseInt(sqrtNum) > 0) {
      return -1;
    } else {
      return Math.pow(sqrtNum + 1, 2);
    }  
}

// Best Practices, Clever
// 제곱근 검사 방법 부분을 간단하게 해결함
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}