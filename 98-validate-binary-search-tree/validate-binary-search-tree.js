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
 * @return {boolean}
 */

var isValidBSTHelper = function (root, left, right) {
    if(!root) return true;

    if(root.val <= left || root.val >= right) {
        return false;
    }

    return isValidBSTHelper(root.left, left, root.val) && isValidBSTHelper(root.right, root.val, right)
}

var isValidBST = function (root) { 
    return isValidBSTHelper(root, -Infinity, Infinity); 
};