/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.sum = 0;
    this.window = size;
    this.array = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.array.push(val);
    this.sum += val;
    if (this.array.length - 1 == this.window) {
        this.sum -= this.array.shift();
    }
    
    return this.sum/this.array.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */