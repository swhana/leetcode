/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    //numStk
    //operator를 만나면 stack에서 2개 꺼내서 계산
    //stack에서 나오는 순서 기억하기
    const operator = ["+", "-", "*", "/"];
    let numStk = [];
    let ans = undefined;

    for (let i of tokens) {
        //연산자의 경우
        if (operator.includes(i)) {
            let curr, firstNum, secondNum;

            secondNum = Number(numStk.pop());
            firstNum = Number(numStk.pop());

            switch (i) {
                case "+":
                    ans = firstNum + secondNum;
                    break;
                case "-":
                    ans = firstNum - secondNum;
                    break;
                case "*":
                    ans = firstNum * secondNum;
                    break;
                case "/":
                    ans = Math.trunc(firstNum / secondNum);
                    break;
            }
            numStk.push(ans);
        }
        //숫자의 경우
        else {
            numStk.push(i);
        }
    }

    if (numStk.length > 0) return Number(numStk.pop());

    return ans;
};