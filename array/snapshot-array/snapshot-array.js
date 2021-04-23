/**
 * @param {number} length
 */
 var SnapshotArray = function(length) {
    this.array = new Array(length).fill(0);
    this.snapIdx = 0;
    this.snapMap = [{}];
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.snapMap[this.snapIdx][index] = val;
    this.array[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapMap[this.snapIdx+1] = {};
    return this.snapIdx++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    while (snap_id >= 0 && !(this.snapMap[snap_id][index])){
        snap_id--;
    }

    return snap_id >= 0 ? this.snapMap[snap_id][index] : 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */