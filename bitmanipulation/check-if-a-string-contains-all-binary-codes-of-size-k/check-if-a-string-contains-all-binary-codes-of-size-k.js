/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let map = {};
    let count = 0;
    
    for (var i = 0; i+k <= s.length; i++) {
        let sub = s.substring(i, i+k);
        !map[sub] && count++;
        map[sub] = true;
    }
        
    return count == 2 << k-1
};