/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
        
    let idx;
    
    for (idx = num.length-1; idx >= 0; idx--) {
        if (Number(num[idx]) % 2)
            break;
    }
        
    return idx >= 0 ? num.substr(0, idx+1) : "";
};