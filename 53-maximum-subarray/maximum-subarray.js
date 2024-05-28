/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prefix = 0;
    let ret = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<nums.length; i++ ){
        prefix += nums[i]; //누적 합
        ret = Math.max(ret, prefix);
        if(prefix < 0) prefix = 0; //0보다 작아지면 초기화
    }

    return ret;
};