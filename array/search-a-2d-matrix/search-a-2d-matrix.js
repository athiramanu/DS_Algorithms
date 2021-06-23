/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    let n = matrix.length;
    let m = matrix[0].length;
    let l = 0, r = m * n - 1;
    
    while (l <= r && l >= 0) {
        let mid = (l + r)/2 >> 0;
        let row = Math.floor(mid / m);
        let col = mid % m;
                        
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] < target) l = mid + 1;
        else r = mid-1;
    }

    return false;
};