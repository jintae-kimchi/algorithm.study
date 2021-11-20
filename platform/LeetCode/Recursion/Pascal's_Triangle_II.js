/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var root = [1];
    if (rowIndex === 0) return root;
    var fn = function (parents, lvl) {
        var next = [];
        for (var i = 0; i < parents.length + 1; i++) {
            var left = parents[i - 1] || 0;
            var right = parents[i] || 0;
            next.push(left + right);
        }
        if (rowIndex === lvl) {
            return next;
        }
        return fn(next, lvl + 1);
    };
    var ans = fn(root, 1);
    return ans;
};
// 1로 시작
// 다음 레벨은 이전레벨 + 1
Array.from({ length: 10 }, (_, i) => i).forEach((v, i) => {
    console.log(getRow(i));
});
// 재귀 시작을 2레벨부터 하여 끝값은 계산 없이 진행하는 방법이 효율적인듯
