/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = [true];
    for (let i = 0; i < s.length; i++) dp.push(false); // [F,F,F,...F]

    for (let i = 1; i < dp.length; i++) {
        //dp[i] = false라면 l, le, lee.. 찾으면서 시작
        const str = s.slice(i-1); //
        if (dp[i-1]) {
            for (let j = 0; j < str.length; j++) {
                const sliced = str.slice(0, j + 1); //l, le, lee...
                if (wordDict.indexOf(sliced) !== -1) {
                    dp[i + j] = true;
                    console.log(s[i], s[i + j])
                }
            }
        }
    }
    console.log(dp)

    return dp.at(-1);
};