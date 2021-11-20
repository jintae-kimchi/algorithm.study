/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    // bfs 형태로 배열화
    // 완전트리가 아니므로 특정 줄기는 없을 수 있음
    // 해당 레벨의 마지막을 표시하는 값을 포함

    var arr = [];
    var queue = [root, "@"];
    var fn = function (q = []) {
        if (!q.length) return;
        if (q[0] === "@") return;

        // queue에서 추출
        var node = q.shift();
        arr.push(node ? node.val : "null");

        // 큐에 다음 값 삽입
        if (node) q.push(node.left);
        if (node) q.push(node.right);

        // 레벨 구분자가 첫 요소면 해당 레벨 완료
        // 현재 큐의 마지막에 삽입
        if (q[0] === "@") {
            arr.push(q.shift());
            q.push("@");
        }

        fn(q);
    };
    fn(queue);

    return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // 레벨 단위로 분리
    // 각 레벨마다 트리노드 생성
    var levels = data.split("@").map((lvl) =>
        lvl
            .split(",")
            .filter((v) => v !== "")
            .map((v) => (v === "null" ? null : new TreeNode(parseInt(v))))
    );

    // 현재 레벨 순회하면서 다음 레벨과 연결
    levels.forEach((lvl, i, lvls) => {
        var childIdx = 0;
        lvl.forEach((node, j) => {
            if (node === null) return;
            node.left = lvls[i + 1][childIdx];
            node.right = lvls[i + 1][childIdx + 1];
            childIdx += 2;
        });
    });

    return levels.length ? levels[0][0] : null;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */