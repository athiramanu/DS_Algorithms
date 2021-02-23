/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var matching;
    var map = {};
    var count, min, ch, matched = 0;
    var length = s.length;
    
    for (var i = 0; i < d.length; i++) {
        var str = d[i];
        for (var j = 0, k = 0; j < str.length; j++) {
            while(k < s.length) {
                if (s[k] == str[j]) {
                    k++;
                    j+1 == str.length && (k = 1001);
                    break;
                }
                k++;
            }
        } 
        if (j == str.length && k==1001 && (!matching || str.length >= min)) {
            if (str.length > min || !matching) {
                min = str.length;
                matching = str;
                continue
            }
            matching = matching > str ? str : matching;
        }
    }

    
    return matching ?? "";
};