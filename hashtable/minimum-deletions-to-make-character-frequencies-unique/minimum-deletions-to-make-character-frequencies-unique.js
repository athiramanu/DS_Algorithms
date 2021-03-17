/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let map = {};
    let result = 0;
    
    for (let i of s) {
        if (map[i]) map[i]++;
        else map[i] = 1;
    }
        
    for (i in map) {
        while(map[map[i]] && map[i] > 0) {
            map[i]--;
            result++;
        }
        if (map[i] >= 0) {
            map[map[i]] = i;
        } 
        delete map[i];
    }
    
    return result;
};