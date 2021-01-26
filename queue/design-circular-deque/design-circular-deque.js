/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue = new Array(k).fill(-1);
    this.front = -1;
    this.rear = -1;
    this.max = k;
    this.length = 0;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.length == this.max) {
        return false;
    }
    
    if (this.length == 0) {
        this.rear = this.front = 0;
    }
    
    else if (this.front == 0) {
        this.front = this.max - 1;
    }
    
    else {
        this.front--;
    }
    
    this.queue[this.front] = value;
    this.length++;

    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.length == this.max) {
        return false;
    }
    
    if (this.length == 0) {
        this.front = 0;
        this.rear = 0;
    }
    
    else if (this.rear == this.max - 1) {
        this.rear = 0;
    }
    
    else {
        this.rear++;
    }
    
    this.queue[this.rear] = value;
    this.length++;

    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.length == 0) {
        return false;
    }
    
    delete this.queue[this.front];
    this.length--;
    
    if (this.front == this.max - 1) {
        this.front = 0;
    }
    
    else {
        this.front++;
    }
    
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.length == 0) {
        return false;
    }

    delete this.queue[this.rear];
    this.length--;
    
    if (this.rear == 0) {
        this.rear = this.max - 1;
    }
    
    else {
        this.rear--;
    }
    
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.length == 0) {
        return -1;
    }
        
    return this.queue[this.front];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.length == 0) {
        return -1;
    }
    
    return this.queue[this.rear];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    if (this.length == 0) {
        return true;
    }
    
    return false;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    if (this.length == this.max) {
        return true;
    }
    return false;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */