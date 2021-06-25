/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) {
    this.queue = [homepage];
    this.currentPos = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.queue[++this.currentPos] = url;
    this.queue.length = this.currentPos + 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if (this.currentPos - steps >= 0) this.currentPos -= steps;
    else this.currentPos = 0;
    
    return this.queue[this.currentPos];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (this.currentPos + steps < this.queue.length) this.currentPos += steps;
    else this.currentPos = this.queue.length-1;
    
    return this.queue[this.currentPos];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */