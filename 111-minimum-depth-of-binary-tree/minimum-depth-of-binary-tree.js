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




var minDepth = function (root) {
    let ret = 100000;

    function traverse(node, dep) {
        if (node.left) traverse(node.left, dep + 1);
        if (node.right) traverse(node.right, dep + 1);

        if(!node.left && !node.right) ret = Math.min(ret, dep);
    }


    if(!root) return 0;
    traverse(root, 1);
    return ret;
};

