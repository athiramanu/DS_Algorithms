/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k).fill(-1);
    this.front = -1;
    this.rear = -1;
    this.length = 0;
    this.max = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.length == this.max) {
        return false;
    }
    
    if (this.front == -1) {
        this.front = 0;
    }
    
    this.rear = (this.rear + 1) % this.max;
    this.queue[this.rear] = value;
    this.length++;
  
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.length == 0) {
        return false;
    }
    
    this.queue[this.front] = -1;
    this.front = (this.front + 1) % this.max;
    this.length--;
   
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.length == 0) {
        return -1;
    }
        
    return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.length == 0) {
        return -1;
    }
    
    return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if (this.length == 0) {
        return true;
    }
    
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if (this.length == this.max) {
        return true;
    }
    
    return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */