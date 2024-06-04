/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ret = [];

    nums = nums.sort((a, b) => a-b);

    for(let i=0; i<nums.length - 2; i++) {
        const fix = nums[i];

        let lp = i + 1;
        let rp = nums.length - 1;

        if(i > 0 && nums[i-1] == nums[i]) continue;

        while(lp < rp) {
            if(nums[lp] + nums[rp] + fix === 0) {
                ret.push([fix, nums[lp], nums[rp]]);
                lp++;

                //같은 숫자에 대한 작업 스킵
                while(nums[lp-1] == nums[lp] && lp < rp) {
                    lp++;
                }

            } else if(nums[lp] + nums[rp] + fix < 0) {
                lp++;
            } else rp--;
        }
    }

    return ret;
};