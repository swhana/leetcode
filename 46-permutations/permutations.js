/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return perm(nums, nums.length);
};


function perm(arr, num) {
    const ret = [];
    if(num === 1) return arr.map((e) => [e]);

    arr.forEach((curr, index, array) => {
        const rest = array.filter((_, i) => index !== i)
        const perms = perm(rest, num-1);
        console.log(perms)
        const result = perms.map((p) => [curr, ...p]);

        ret.push(...result);
    })

    return ret;
}