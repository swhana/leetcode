/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numMap = new Map();
    let n = 0; //size

    for(let num of nums) {
        if(!numMap.has(num)) numMap.set(num, 1);
        else numMap.set(num, numMap.get(num) + 1);
        n++;
    }
    
    for(let [key, value] of numMap) {
        if(value > Math.floor(n / 2)) return key;
    }

};