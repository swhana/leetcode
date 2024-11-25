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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let ret = false;
    function traversal(node, sum) {
        if(!node.left && !node.right) {
            //leaf node
            if(sum === targetSum) ret = true;
            return;
        } 

        if(node.left) traversal(node.left, sum + node.left.val);
        if(node.right) traversal(node.right, sum + node.right.val);
    }
    
    if(!root) return false;
    traversal(root, root.val);

    return ret;
};


