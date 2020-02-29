
var FreqStack = function() {
    this.stack = [];
    this.top = -1;
    this.map = {};
    
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    isNaN(this.map[val]) ? (this.map[val] = 1) : this.map[val]++;
    
    var freq = this.map[val] - 1;
    
    if(this.stack[freq] == undefined) {
        this.stack[freq] = [val];
        this.top++;
    } else {
        this.stack[freq].push(val)
    }    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    var top = this.stack[this.top];
    var popelem = top.pop();
    
    this.map[popelem]--;

    if (top.length == 0) {
        this.stack.pop();
        this.top--;
    }
    
    return popelem;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */