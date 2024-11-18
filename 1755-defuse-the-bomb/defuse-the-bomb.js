/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const newCode = [...code, ...code, ...code];
    const ret = Array.from({ length: code.length })

    for(let i=code.length; i<code.length * 2; i++) {
        if(k > 0) ret[i - code.length] = newCode.slice(i + 1, i + k + 1).reduce((total, curr) => total + curr, 0);
        if(k < 0) ret[i - code.length] = newCode.slice(i + k, i).reduce((total, curr) => total + curr, 0);
        if(k == 0) ret[i - code.length] = 0;
    }

    return ret;
};