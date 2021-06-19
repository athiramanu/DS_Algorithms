/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.set = {};
    this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
    if (val in this.set) 
        return false;
   
    this.set[val] = this.values.length;
    this.values.push(val);
    
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
    if (!(val in this.set))
        return false;
    
    let index = this.set[val];
    let value = this.values.pop();
    
    delete this.set[val];
        
    if (value != val) {
        this.set[value] = index;
        this.values[index] = value;
    }
    
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */