/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var e, hashmap = {};
    
    for (e of s) {
        if (e in hashmap) {
            hashmap[e] += 1;
        } else {
            hashmap[e] = 1;
        }
    }
    
    for (e of t) {
        if (!hashmap[e]) {
            return false;
        } else if (hashmap[e] > 1) {
            hashmap[e] -= 1;
        } else {
            delete hashmap[e];
        }
    }
    
    return Object.keys(hashmap).length === 0;
};