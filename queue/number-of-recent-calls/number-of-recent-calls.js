
var RecentCounter = function() {
    this.queue = [];
    this.length = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
    this.queue.push(t);
    this.length++;
    
    while (t - 3000 > this.queue[0]) {
        this.queue.shift();
        this.length--;
    }
    
    return this.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */