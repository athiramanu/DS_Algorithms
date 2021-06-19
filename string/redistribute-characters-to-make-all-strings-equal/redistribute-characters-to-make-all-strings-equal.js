/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    
    let count = {};
    let length = words.length;
    
    words.forEach((word) => {
        for (let w of word) {
            if (count[w]) count[w]++;
            else count[w] = 1;
        }
    });
        
    for (let w in count) {
        if (count[w] % length) 
            return false
    }
    
    return true;
};