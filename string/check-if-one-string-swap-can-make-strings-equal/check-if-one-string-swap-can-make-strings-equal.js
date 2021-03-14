/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let i = s1.length-1, count = 0, swap = "";
    
    while (i >= 0 && count <= 2) {
        if (s1[i] == s2[i]) {
            i--;
            continue;
        }
        else if (swap == "" || swap == s2[i]) {
            count++;
            swap = s1[i];
        }
        else {
            return false;
        }
        i--;
    }
    
    return count == 0 || count == 2;
};