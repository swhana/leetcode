/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const dp = [[]];
    for(let i=1; i<=target; i++) dp[i] = [];
    dp[0].push([]);

    for(let i=1; i<=target; i++) {
        for(let j=0; j<candidates.length; j++) {
            if(candidates[j] <= i) {
                //prev는 이전 조합
                for(const prev of dp[i - candidates[j]]) {
                    const temp = prev.concat(candidates[j]).sort((a, b) => a-b);

                    if(!dp[i].some((comb) => comb.join(",") === temp.join(","))) dp[i].push(temp);
                }
            }
        }
    }

    return dp[target];
};