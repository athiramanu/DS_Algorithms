/**
 * Initialize your data structure here.
 */
 var RandomizedCollection = function() {
    this.valIndexMap = {};
    this.values = [];
    this.length = -1;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    if (!(val in this.valIndexMap))
        this.valIndexMap[val] = new Set();

    this.valIndexMap[val].add(this.values.length);
    this.values.push(val);
    this.length++;

    return this.valIndexMap[val].size == 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {

    if (!(val in this.valIndexMap)) return false;

    let index = this.valIndexMap[val].values().next().value; 
    let lastVal = this.values[this.length];
        
    if (lastVal != val) {
        this.values[index] = lastVal;
        this.valIndexMap[lastVal].add(index);
        this.valIndexMap[lastVal].delete(this.length);
        this.valIndexMap[val].delete(index);
    }
    else {
        this.valIndexMap[val].delete(this.length);
    }
    
    
    this.values.pop();
    this.length--;
    
    if (this.valIndexMap[val].size == 0) 
        delete this.valIndexMap[val];

    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let index = Math.floor(Math.random()*this.values.length);
    return this.values[index];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */