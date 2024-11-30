/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const bits = n.toString(2);
    let ret = 0;

    for(let i=0; i<bits.length; i++) {
        if(bits[i] === '1') ret++;
    }

    return ret;
};