/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let result = [];
    let sums = Array(nums.length).fill(0);
    sums[0] = nums[0];

    //누적 합으로 O(n)의 시간 복잡도로 구현
    for(let i=1; i<nums.length; i++) {
        sums[i] = sums[i-1] + nums[i];
    }

    for(let i=0; i<nums.length; i++){
        const a = nums[i] * (i + 1) - sums[i]; // sum of idx 0 ~ i
        const b = sums[sums.length - 1] - sums[i] - nums[i] * (nums.length - 1 - i); // sum of idx i+1 ~ nums.length-1

        result.push(a + b);
    }

    return result;
};