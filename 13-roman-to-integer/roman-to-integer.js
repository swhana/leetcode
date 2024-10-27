/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let intSum = 0;

    let p = 0;

    while (p < s.length) {
        switch (s[p]) {
            case 'I':
                if (p + 1 < s.length && s[p + 1] === 'V') {
                    intSum += 4;
                    p += 2;
                } else if (p + 1 < s.length && s[p + 1] === 'X') {
                    intSum += 9;
                    p += 2;
                } else {
                    intSum += 1;
                    p++;
                }
                break;
            case 'V': {
                intSum += 5;
                p++;
            }
                break;
            case "X": if (p + 1 < s.length && s[p + 1] === 'L') {
                intSum += 40;
                p += 2;
            } else if (p + 1 < s.length && s[p + 1] === 'C') {
                intSum += 90;
                p += 2;
            } else {
                intSum += 10;
                p++;
            }
                break;
            case 'L': {
                intSum += 50;
                p++;
            }
                break;
            case 'C': if (p + 1 < s.length && s[p + 1] === 'D') {
                intSum += 400;
                p += 2;
            } else if (p + 1 < s.length && s[p + 1] === 'M') {
                intSum += 900;
                p += 2;
            } else {
                intSum += 100;
                p++;
            }
                break;
            case 'D': {
                intSum += 500;
                p++;
            }
                break;
            case 'M': {
                intSum += 1000;
                p++;
            }
                break;
        }
    }

    return intSum;
};