/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    let result = [];
    
    function balance(open, close, index, comb = "") {
        
        if (index == 2*n) {
            result.push(comb);
            return;
        }
        
        if (open < n) {
            balance(open+1, close, index+1, comb+"(");
        }
        
        if (close < open) {
            balance(open, close+1, index+1, comb+")");
        }
    }
    
    balance(0, 0, 0);
    
    return result;
};

