/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let lp = 0;
    let rp = x;

    while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);
        const pow = mid * mid;
        if (pow === x) return mid;
        if (pow < x) lp = mid + 1;
        if (pow > x) rp = mid - 1;
    }

    return lp - 1; //lp - 1을 return해야 소숫점일 때 내림한 값을 리턴함
};