/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    var buildPostorder = function (preHead, preTail, inHead, inTail) {
        // console.log('arg: ', preHead, preTail, inHead, inTail);
        if (preTail - preHead < 0 || inTail - inHead < 0) return null;
        if (preTail === preHead || inTail === inHead) {
            return new TreeNode(preorder[preHead]);
        }

        var curVal = preorder[preHead];
        var inorderSplitIdx = 0;
        for (var i = inHead; i <= inTail; i++) {
            if (inorder[i] === curVal) {
                inorderSplitIdx = i;
                break;
            }
        }
        // console.log('find: ', inorderSplitIdx, '-', inHead);
        var leftLen = inorderSplitIdx - inHead;
        var rightLen = inTail - inorderSplitIdx;
        // console.log('len: ', leftLen, rightLen);
        // console.log('next left: (',
        //             preHead + 1,
        //             preHead + leftLen,
        //             inHead,
        //             inHead + leftLen - 1,
        //             ')');
        // console.log('next right: (',
        //             preHead + leftLen + 1,
        //             preHead + leftLen + rightLen,
        //             inorderSplitIdx + 1,
        //             inorderSplitIdx + rightLen,
        //             ')');
        var node = new TreeNode(
            curVal,
            // left child
            buildPostorder(
                preHead + 1,
                preHead + leftLen,
                inHead,
                inHead + leftLen - 1,
            ),
            // right child
            buildPostorder(
                preHead + leftLen + 1,
                preHead + leftLen + rightLen,
                inorderSplitIdx + 1,
                inorderSplitIdx + rightLen,
            ),
        );
        return node;
    };

    return buildPostorder(0, preorder.length - 1, 0, inorder.length - 1);
};
// 정신나갈것같애정신나갈것같애정신나갈것같애정신나갈것같애
