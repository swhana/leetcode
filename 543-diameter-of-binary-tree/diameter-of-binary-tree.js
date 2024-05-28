/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var max = Number.MIN_SAFE_INTEGER;

    function findHeight(node) {
        if(!node) return 0;

        let left = findHeight(node.left)
        let right = findHeight(node.right);

        max = Math.max(max, left + right);

        return Math.max(left, right) + 1;
    }

    findHeight(root);

    return max;
};