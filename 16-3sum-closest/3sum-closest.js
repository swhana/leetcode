/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let ret = -1;
    //솔직히 nums.length <= 500이라 3중 for문 돌려도 풀림
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(ret === -1) {
                    ret = sum;
                    continue;
                }

                ret = Math.abs(target - sum) < Math.abs(target - ret) ? sum : ret;
            }
        }
    }

    return ret;
};