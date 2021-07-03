/**
 * @param {string} s
 * @return {number}
 */
 var numberOfSubstrings = function(s) {
  
    let charCount = {'a': -1, 'b': -1, 'c': -1};
    let res = 0;
    
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = i;      
        res += 1 + Math.min(charCount['a'], charCount['b'], charCount['c']);
    }
    
    return res;
};