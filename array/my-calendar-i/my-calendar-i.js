class BST {
    constructor(start, end) {
        this.start = start;
        this.end = end
        this.left = null;
        this.right = null;
    }
    
    insert (start, end) {
        let curr = this;
        
        while (curr) {
            if (end <= curr.start) {
                if (curr.left == null) {
                    curr.left = new BST(start, end);
                    return true;
                } else {
                    curr = curr.left;
                }
            } else if (start >= curr.end){
                if (curr.right == null) {
                    curr.right = new BST(start, end);
                    return true;
                } else {
                    curr = curr.right;
                }
            } else {
                return false;
            }
        }
    }
}


var MyCalendar = function() {
    this.bst = new BST();
    
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if (this.bst.start == undefined) {
        this.bst.start = start;
        this.bst.end = end;
        return true;
    } else {
        return this.bst.insert(start, end);
    }
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */