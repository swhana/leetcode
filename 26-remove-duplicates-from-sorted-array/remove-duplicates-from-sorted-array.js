/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cacheIdx = 0;


    for(let i=0; i<nums.length; i++) {
        if(nums[i] === nums[cacheIdx]) continue;
        //다른게 나오면
        if(nums[i] !== nums[cacheIdx] && cacheIdx + 1 < nums.length) {
            nums[cacheIdx + 1] = nums[i];
            cacheIdx++;
        }
    }

    return cacheIdx + 1;

};