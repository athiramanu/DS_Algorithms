/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var result = {};
    var index = 0;
    var sum;
    var ans = [];
    
    for (var row of mat) {
        sum = 0;
        for (var col of row) {
            sum += col;
        }
        if (result.hasOwnProperty(sum)) {
            result[sum].push(index);
        } else{
            result[sum] = [index];
        }
        index++;
    }
    
    for (index in result) {
        if (ans.length >= k) {
            break;
        }
        ans = [...ans, ...result[index]];
    }
    
    return ans.splice(0,k);
};