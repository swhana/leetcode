/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    for(let i=0; i<=nums.length; i++) {
        const comb = getComb(nums, i);
        res.push(...comb);
    }

    return res;
};


function getComb(arr, len) {
    if (len === 1) return arr.map(el => [el]);
    const result = [];

    arr.forEach((fixed, index, origin) => {
        // console.log("fixed: " + fixed);
        const sliced = origin.slice(index + 1);
        // console.log("sliced: " + sliced);
        const slicedComb = getComb(sliced, len - 1);
        // console.log("comb: " + slicedComb)
        const attachedComb = slicedComb.map((slice) => [fixed, ...slice]);
        result.push(...attachedComb);
    })

    return result;
}