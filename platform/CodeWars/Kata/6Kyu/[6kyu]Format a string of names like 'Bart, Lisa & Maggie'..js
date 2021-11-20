
// My Code
function list(names){
    var resultString = '';
    for(var i = 0; i < names.length; i++) {
      if (i === 0) {
        // 처음
        resultString = names[i].name;
      } else if (i === names.length - 1) {
        // 마지막
        resultString += ' & ' + names[i].name;
      } else {
        // 중간
        resultString += ', ' + names[i].name;
      }
    }
    return resultString;
  }




// Best Practices
function list(names){
    // Reduce 함수 사용하여 해결
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }


// Clever
function list(names) {
    // name 값 뽑아서 배열로 만들고 마지막꺼는 뽑아서 따로 처리
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }