/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {    
    let op = 0, temp;
        
    for (let i = 1; i <= n; i+=2) {
        op += (n-i);
    }
    
    return op;
};