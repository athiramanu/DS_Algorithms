/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    var length = s.length/2;
    var vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    var count = 0;
        
    for (let i = 0; i < 2*length; i++) {
        if(vowels.has(s[i])) {
            i < length ? count++ : count--;
        }
    }
    
    return count == 0;
};