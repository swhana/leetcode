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
 * @return {number[]}
 */

var ret = [];

var preorderTraversal = function(root) {
    let ret = [];


    function traversal(node) {
        if(!node) return;

        ret.push(node.val);
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }

    traversal(root);

    return ret;
};

