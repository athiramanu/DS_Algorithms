/**
 * @param {string} s
 * @return {number}
 */
 var balancedString = function(s) {
    
    let charCount = {'Q': 0, 'W': 0, 'E': 0, 'R': 0};
    let target = s.length/4;
    let start = 0, end = 0, result = Infinity;
    
    for (let ch of s) charCount[ch] += 1;
    
        
    for (end = 0; end < s.length; end++) {
        charCount[s[end]]--;
        
        while (start < s.length && 
              charCount['Q'] <= target &&
              charCount['W'] <= target &&
              charCount['E'] <= target &&
              charCount['R'] <= target) {
            result = Math.min(result, end - start + 1);
            charCount[s[start]]++;
            start++;
        }
    }
    
    return result;
};