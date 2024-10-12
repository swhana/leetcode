/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const counts = [0, 0, 0];
    const ret = [];

    for(const n of nums) {
        if(n === 0) counts[0]++;
        else if(n === 1) counts[1]++;
        else counts[2]++;
    }

    let idx = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<counts[i]; j++) {
            nums[idx] = i;
            idx++;
        }
    }
}