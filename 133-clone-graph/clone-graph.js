/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    let copyNode = new Node(node.val);
    let queue = [node];
    let visited = new Map();
    visited.set(node, copyNode);

    while(queue.length > 0) {
        let currNode = queue.shift();
        for(let neighbor of currNode.neighbors) {
            if(!visited.has(neighbor)){
                let copyNeighbor = new Node(neighbor.val);
                queue.push(neighbor); //탐색은 원본노드
                visited.set(neighbor, copyNeighbor);
            }
            visited.get(currNode).neighbors.push(visited.get(neighbor)); //copyNode를 가져와서 새로 구성
        }
    }

    return copyNode;
};

