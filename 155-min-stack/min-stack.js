
var MinStack = function() {
    this.stack = [];
    this.minStk = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStk.length === 0) this.minStk.push(val);
    else if(this.minStk.at(-1) >= val) {
        this.minStk.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let pop = this.stack.pop();
    if(pop === this.minStk.at(-1)) {
        this.minStk.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStk.at(-1);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */