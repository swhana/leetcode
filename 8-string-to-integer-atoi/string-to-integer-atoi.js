/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let isPositive = true; //true = '+', false = '-'

    //1.Whitespace
    let trimed = s.trim();

    //2.Signedness
    if (trimed[0] === '-') {
        isPositive = false;
        trimed = trimed.slice(1);
    } else if (trimed[0] === '+') {
        trimed = trimed.slice(1);
    }

    //3.Conversion
    let numStr = "";
    for(let i=0; i<trimed.length; i++) {
        if(trimed[i] >= "0" && trimed[i] <= "9") {
            numStr += trimed[i];
        } else break;
    }

    //4.Rounding
    let num = Number(numStr);
    if(!isPositive) num *= (-1);

    if(num <= Math.pow(2, 31) * (-1)) num = Math.pow(2, 31) * (-1);
    else if(num >= Math.pow(2, 31)) num = Math.pow(2, 31) - 1;

    return num;
};