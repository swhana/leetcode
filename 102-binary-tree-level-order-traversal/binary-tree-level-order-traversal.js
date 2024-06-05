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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ret = [];
    if(root === null) return [];
    let queue = [root];

    while(queue.length > 0) {
        let curr = [];
        let level = queue.length;

        for(let i=0; i<level; i++){
            let node = queue.shift();
            curr.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }

        ret.push(curr);
    }

    return ret;
};

