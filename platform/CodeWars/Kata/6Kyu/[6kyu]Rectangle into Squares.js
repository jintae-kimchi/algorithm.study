/**
 * Rectangle into Squares
 * 주어진 사각형을 그 상태에서 가능한 가장 큰 정사작형으로 자름
 * 자른 정사각형 목록을 결과값으로 반환
 * 초기값이 정사각형이면 null 리턴
 */

function sqInRect(lng, wdth){
    //  예외처리
    if (lng === wdth) return null;
    
    // 작은 값 찾음
    var small = lng > wdth ? wdth : lng;
    var big = lng < wdth ? wdth : lng;

    // 재귀형태로 결과 값 수집
    var result = [];
    popingSquare(small, big, result);

    return result;
}

function popingSquare(small, big, resultArr) {
    // 결과에 작은 값 추가
    resultArr.push(small);

    // 작은 변의 크기 찾음
    if (small !== big) {
        // 다르다?
        // (큰변-작은변, 작은변) 사각형 형태 계산
        var newBig = big - small;        
        var min = newBig > small ? small : newBig;
        var max = newBig < small ? small : newBig;

        // 현재 함수 재귀 호출
        popingSquare(min, max, resultArr);
    }
    // 같다? 리턴
    return;
}

// Best Practice, Clever
// 사각형 길이 계산, 비교 부분을 조금 더 효율적으로 작성한듯
function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
      arr.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}

// Etc
// Spread 문법 참고용으로
function sqInRect(a, b, initial = true){
    if (a === b) { return initial ? null : [a] }  
    const min = Math.min(a, b)
    const max = Math.max(a, b)
      
    return [min, ...sqInRect(max - min, min, false)]
}