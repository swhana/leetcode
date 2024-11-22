/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numMap = new Map();
    let ret = 0;

    for(const num of nums) {
        if(!numMap.has(num)) numMap.set(num, 0);
        else numMap.set(num, 1);
    }

    numMap.forEach((value, key) => {
        if(value !== 1) ret = key;
    })
    return ret;
};