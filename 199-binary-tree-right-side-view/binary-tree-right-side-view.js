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
var arr = [];
var rightSideView = function(root) {
    let res = [];
    arr = [];
    preorder(root, 0);

    // arr.sort((a, b) => a[1] - b[1]);
    
    for(const [depth, val] of arr) {
        res[depth] = val;
    }

    return res;
};

function preorder(node, depth) {
    if(!node) return;

    // console.log(node.val, depth);
    arr.push([depth, node.val]);
    if(node.left) preorder(node.left, depth+1);
    if(node.right) preorder(node.right, depth+1);
}