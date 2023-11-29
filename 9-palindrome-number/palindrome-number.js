/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const palindrome = x.toString().split("").reverse().join("") * 1;

    if(x === palindrome) return true;

    return false;
};