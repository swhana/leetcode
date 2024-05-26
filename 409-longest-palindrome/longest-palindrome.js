/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let ret = 0;
    let flag = false;
    let stringMap = new Map();
    
    for(let i of s) {
        if(!stringMap.has(i)) stringMap.set(i, 1);
        else stringMap.set(i, stringMap.get(i) + 1);
    }

    for(let [key, value] of stringMap) {
        if(value % 2 == 0) ret += value;
        else {
            ret += value - 1;
            flag = true;
        } 
    }

    return flag ? ret + 1 : ret;
};