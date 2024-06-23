/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = Array.from({ length : nums.length }).fill(1);
    let suffix = Array.from({ length : nums.length }).fill(1);

    let product = Array.from({ length : nums.length }).fill(0);
    
    for(let i=1; i<nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];    
    }

    for(let i=nums.length-2; i>=0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    for(let i=0; i<product.length; i++) {
        product[i] = prefix[i] * suffix[i];
    }

    return product;
};