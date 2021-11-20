// My Code
function printerError(s) {
    var errorCount = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] < 'a' || s[i] > 'm') errorCount++;
    }    
    return errorCount + '/' + s.length;
}

// Best Practices
// Clever
// 정규식 사용.. 익숙해지도록 하자..
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}