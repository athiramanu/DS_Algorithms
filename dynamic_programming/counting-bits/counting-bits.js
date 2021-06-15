/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    
    if (n == 0) return [0];
    
    let result = new Array(n).fill(0);
    
    for (let i = 1; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    
    return result;
};