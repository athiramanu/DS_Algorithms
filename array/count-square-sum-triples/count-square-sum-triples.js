/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
    
    let squares = {}, res = 0;
    
    for (let i = 1; i <= n; i++) squares[i*i] = 1;
        
    for (let i = 1; i < n; i++) {
        
        for (let j = i+1; i*i + j*j <= n*n; j++) {
                        
            res += (squares[i*i + j*j] ?? 0) * 2;
            
        }   
    }
    
    return res;
};