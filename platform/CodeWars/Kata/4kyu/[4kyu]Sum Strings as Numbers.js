/**
 * Sum Strings as Numbers
 * string 받아서 더하고 결과를 string으로 리턴
 */


function sumStrings(a,b) { 
    // 문자열 앞의 0 제거
    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');

    var aLen = a.length;
    var bLen = b.length;

    var result = "";
    var nextAdd = 0;
    for (var i = aLen - 1, j = bLen - 1;;) {

        // 탐색이 모두 끝난 경우
        if (i < 0 && j < 0) {
            result = nextAdd === 1 ? nextAdd + "" + result : result;
            break;
        }
        
        var sums = 0;
        if (i < 0) {
            sums = (parseInt(b[j]) + nextAdd) + "";
        } else if (j < 0) {
            sums = (parseInt(a[i]) + nextAdd) + "";
        } else {
            sums = (parseInt(a[i]) + parseInt(b[j]) + nextAdd) + "";
        }
        
        if (sums.length > 1) {
            nextAdd = 1;
            result = sums[1] + result;
        } else {
            nextAdd = 0;
            result = sums[0] + result;
        }
        
        // 인덱스 감소
        if (i > -1) i--;
        if (j > -1) j--;
    }

    return result;
}

// Best Practice
// 일단 얘네들은 반복문 조건 설정이 더 깔끔한 것 같은데
// 그냥 별 건 없는듯
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  }
  
  function sumStrings(a,b) {
    a = a.reverse(); b = b.reverse();
    var carry = 0;
    var index = 0;
    var sumDigits = [];
    while (index < a.length || index < b.length || carry != 0) {
      var aDigit = index < a.length ? parseInt(a[index]) : 0;
      var bDigit = index < b.length ? parseInt(b[index]) : 0;
      var digitSum = aDigit + bDigit + carry;
      sumDigits.push((digitSum % 10).toString());
      carry = Math.floor(digitSum / 10);
      index++;
    }
    sumDigits.reverse();
    while (sumDigits[0] == '0') sumDigits.shift();
    return sumDigits.join('');
}

// Clever
// ~~는 double Not 연산자임 Math.floor() 라고 생각하면 됨
function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c > 9;
    }
    return res.replace(/^0+/, '');
}