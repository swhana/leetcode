/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    nums.sort((a, b) => a - b); //오름차순 정렬;

    const total = nums.reduce((tot, curr) => tot + curr, 0);
    if(total % 2 !== 0) return false;
   
    let dp = new Set(); //sum을 기억하기 위한 set
    dp.add(0);
    for(let i=nums.length - 1; i>=0; i--) {
        const temp = new Set(); //임시로 값을 저장하기 위한
        //dp에 저장된 값들
        for(const el of dp.values()) {
            const sum = nums[i] + el;
            if(sum === total / 2) return true; //목표한 subset이 있으므로 true
            temp.add(sum); //없으면 temp에 넣기
        }
        dp = new Set([...dp, ...temp]); //점차 더한 값들이 쌓이기 시작함
    }

    return false;
};

