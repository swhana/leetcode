/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //currStr에 추가해가기
    //동시에 해시맵에도 문자 추가하기
    //최대 길이를 갱신하면서 가기
    //중복되는 문자가 나오면 맨 앞과 맨 뒤가 같은 문자일테니 앞을 제거하고 뒤를 추가하면서 다시 이어나가기
    let currStr = ""
    let strMap = new Map();
    let maxLen = 0;

    for(let word of s) {
        if(!strMap.has(word)) {
            currStr += word;
            strMap.set(word, 1);
        } else {
            //먼저 currStr에서 word의 위치를 찾아야함
            let index = currStr.indexOf(word);
            currStr = currStr.slice(index + 1, currStr.length) + word;
        }
        maxLen = Math.max(maxLen, currStr.length);
    }

    return maxLen
};