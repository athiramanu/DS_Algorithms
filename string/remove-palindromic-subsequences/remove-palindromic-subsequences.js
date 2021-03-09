/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {    
    if (s == "") return 0;
    
    var i=0, j=s.length-1;
    
    while (i < j) {
        if (s[i] != s[j]) return 2;
        i++;
        j--;
    }
    
    return 1;
};