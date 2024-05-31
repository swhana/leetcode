/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let dists = new Map();

    for(let [x, y] of points) {
        const dist = x*x + y*y;
        if(!dists.has(dist)) dists.set(dist, [[x, y]]);
        else {
            let arr = dists.get(dist);
            arr.push([x, y]);
            dists.set(dist, arr);
        }
    }

    let newDists = [...dists].sort((a, b) => a[0] - b[0]); 

    let distsArray = []
    for(let i=0; i<newDists.length; i++) {
        distsArray.push(...newDists[i][1]);
    }

    return distsArray.slice(0, k);
};