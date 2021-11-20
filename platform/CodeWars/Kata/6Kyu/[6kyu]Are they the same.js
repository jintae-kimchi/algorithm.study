// My Code
function comp(array1, array2){
    // A의 요소가 B의 제곱근인지 검사
    // 대응되는 요소의 개수는 1:1로 일치해야 함
    
    // 예외처리(무조건 false)
    if (!array1 || !array2) return false;
    if (array1.length === 0 || array2.length === 0) return true;

    // 중복에 대한 처리가 필요하므로 값은 배열 형태로 넣자
    var arr1Dict = {};
    for (var i = 0; i < array1.length; i++) {
        var thisKey = array1[i] * array1[i];
        if (Array.isArray(arr1Dict[thisKey])) {
            arr1Dict[thisKey].push(array1[i]);
        } else {
            arr1Dict[thisKey] = [array1[i]];
        }
    }

    // 대응되는지 검사
    var flag = true;
    for (var j = 0; j < array2.length; j++) {
        // 키 값에 없으면 무적권 false
        // 키 값에 있으나 값의 길이가 0이면 false
        // 그 외에는 통과, 값 배열의 요소 하나 제거
        if (arr1Dict.hasOwnProperty(array2[j]) && 
            arr1Dict[array2[j]].length > 0) {
            arr1Dict[array2[j]].pop();
        } else {
            flag = false;
            break;
        }
    }

    return flag;
}

function sortFunc(a, b){
    return a > b ? 1 : a < b ? -1 : 0;
}

// Best Practice
// 정렬 미개하게 하지 말고 람다식으로 하자
// map으로 배열 만들기, every로 검사하기
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}