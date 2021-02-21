/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var result = 0;
    var length = s.length;
    
    for (var i = 0; i < length; i++) {
        if (s[i] == 'I') {
            if (i+1 < length && (s[i+1] == 'V' || s[i+1] == 'X')) {
                i++;
                result += map[s[i]] - 1;
            } else {
                result++;
            }
        }
        else if (s[i] == 'X') {
            if (i+1 < length && (s[i+1] == 'L' || s[i+1] == 'C')) {
                i++;
                result += map[s[i]] - 10;
            } else {
                result+=10;
            }
        }
        else if (s[i] == 'C') {
            if (i+1 < length && (s[i+1] == 'D' || s[i+1] == 'M')) {
                i++;
                result += map[s[i]] - 100;
            } else {
                result+=100;
            }
        }
        else {
            result += map[s[i]];
        }
    }
    
    return result;
};