// My Code
function duplicateEncode(word){
    // 중복: ), 중복아님: (
    // 대소문자는 같이 취급함
    word = word.toLowerCase();
    var dictionary = {};
    for(var i = 0; i < word.length; i++){
        dictionary[word[i]] 
        ? dictionary[word[i]] = ')' 
        : dictionary[word[i]] = '(';
    }
    var result = '';
    for(var j = 0; j < word.length; j++) {
        result += dictionary[word[j]];
    }

    return result;
}


// Best Practices, Clever
// split, map 스킬 나도 써보도록 하자
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }