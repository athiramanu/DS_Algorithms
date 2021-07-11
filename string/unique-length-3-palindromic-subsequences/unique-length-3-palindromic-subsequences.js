/**
 * @param {string} s
 * @return {number}
 */
 var countPalindromicSubsequence = function(s) {
    
    let map = {}, result = 0;
    
    s = s.split('');
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] in map) map[s[i]]['last'] = i;
            
        else map[s[i]] = {'first': i};
    }   
    
    for (let char in map) {
        
        let {first, last} = map[char];
        
        if (last) result += (new Set(s.slice(first+1, last))).size;
        
    }
    
    return result;
};