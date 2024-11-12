/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lp = 0;
    let rp = nums.length - 1;

    while(lp <= rp) {
        const mid = Math.floor((lp + rp)/2);
        console.log(mid)

        if(nums[mid] === target) return mid;
        if(nums[mid] + 1 === target) {
            if(mid < nums.length - 1 && nums[mid + 1] !== target) return mid + 1;
            else lp = mid + 1;
        }
        if(nums[mid] - 1 === target) {
            if(mid > 0 && nums[mid - 1] !== target) return mid;
            else rp = mid - 1;
        }
        else if(nums[mid] < target) lp = mid + 1;
        else rp = mid - 1;
    }

    return lp;
};