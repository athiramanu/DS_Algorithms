/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 2, c;
    
    if (n == 0 || n == 1 || n == 2) {
        return n;
    }
    
    for (let i = 3; i <= n; i++) {
        c = b + a;
        a = b;
        b = c;
    }
    
    return c;
};