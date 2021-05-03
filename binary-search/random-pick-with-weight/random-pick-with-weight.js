var Solution = function(w) {
    this.weight = [];
    this.sum = 0;
    
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.weight.push(this.sum)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let index = Math.floor(Math.random()*this.sum);
    return this.binarySearch(index);
};

Solution.prototype.binarySearch = function(index) {
    let start = 0;
    let end = this.weight.length-1;
    
    while (start <= end) {
        let mid = Math.floor((end+start)/2);
        if (index < this.weight[mid]) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    
    return start;
   
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */