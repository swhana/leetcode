
var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, [[timestamp, value]]);
    else {
        //timestamp 배열부터 먼저
        const tsArr = this.map.get(key);
        tsArr.push([timestamp, value]); //이렇게 넣어도 timestamp가 오름차순으로 입력된다는 보장이 있어서 문제없음
        this.map.set(key, tsArr); //덮어씌우기
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) return ""; //없는 값 찾을 때

    const tsArr = this.map.get(key); //timestamp 배열 가져오기
    //tsArr = [[1, "bar1"], [3, "bar2"], [7, "bar3"], ...]
    //탐색을 할 때는 tsArr[1] 이런 식으로 index로 찾는다

    let lp = 0;
    let rp = tsArr.length - 1;

    if (tsArr.length === 1) {
        if(tsArr[0][0] <= timestamp) return tsArr[0][1];
        else return "";
    }

    let res = "";

    while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);

        const [time, val] = tsArr[mid];

        if(timestamp === time) return val;
        else if(timestamp > time) {
            res = val;
            lp = mid + 1;
        } else rp = mid - 1;
    }

    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */