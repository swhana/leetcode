/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ret = "";
    let p = 0;

    while (p < strs[0].length) {
        const standard = strs[0][p];
        for (let str of strs) {
            if (str[p] === undefined || str[p] !== standard) return ret;
        }
        ret += standard;
        p++;
    }

    return ret;
};