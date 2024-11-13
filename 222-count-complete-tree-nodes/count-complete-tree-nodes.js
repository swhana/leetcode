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
var countNodes = function (root) {

    function countnode(node) {
        if (!node) return 0;
        let left = countnode(node.left);
        let right = countnode(node.right);

        return 1 + left + right;
    }


    return countnode(root);
};

