// My Code
function longestConsec(strarr, k) {
    // k만큼의 범위로 max 값 유지하며 한바퀴 순회하는 것으로 작성

    // 예외처리
    if (strarr.length === 0) return '';
    if (strarr.length < k) return '';
    if (k <= 0) return '';

    var maxString = '';
    for (var i = 0; i <= strarr.length - k; i++) {
        var newChallenger = strarr.slice(i, i + k).join('');
        if (newChallenger.length > maxString.length){
            maxString = newChallenger;
        }
    }

    return maxString;
}

// Best Practice
// 로직은 내가 짠거랑 차이가 없음
// 대신 예외처리 코드 여부의 차이인데.. 
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

// Clever
// 위 코드들의 람다식 버전이라고 해야 하나
function longestConsec(strarr, k) {
    if( strarr.length==0 || k> strarr.length || k <1 ) return "";
    let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
        i = lens.indexOf( Math.max(...lens) );
    return strarr.slice(i,i+k).join('')
}