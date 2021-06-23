/**
 * @param {number[][]} rectangle
 */
 var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
    this.updates = [];
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    this.updates.push([row1, col1, row2, col2, newValue])
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    
    for (let top = this.updates.length - 1; top >= 0; top--) {
    
        let [row1, col1, row2, col2, value] = this.updates[top];
    
        if (row1 <= row && row <= row2 && col1 <= col && col <= col2)
            return value;
    }
    
    return this.rectangle[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */