/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var result = 0;
    var map = {};
    
    if (m == 1 || n == 1) {
        return 1;
    }
    
    var rec = function(m, n) {
        if (map[[m,n]] || m < 1 || n < 1) {
            return 0;
        }

        if (m == 1 || n == 1) {
            map[[m,n]] = 1
            return 1;
        }
        
        rec(m-1, n);
        rec(m, n-1);
        map[[m,n]] =  map[[m-1,n]] + map[[m,n-1]];
    }
    rec(m,n);    

    return map[[m,n]];
};