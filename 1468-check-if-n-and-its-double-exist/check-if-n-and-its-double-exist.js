/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const double = new Map();

    for(let i=0; i<arr.length; i++) {
        double.set(arr[i] * 2, i);
    }

    for(let i=0; i<arr.length; i++) {
        if(double.has(arr[i]) && double.get(arr[i]) !== i) return true;
    }

    return false;
};