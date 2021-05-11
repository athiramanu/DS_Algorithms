/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
 var canConvert = function(str1, str2) {
    
    if (str1 == str2) return true;
    if (str1.length != str2.length || new Set([...str2]).size == 26) return false
    
    let charMap = new Map();
    
    for (let charIdx = str1.length - 1; charIdx >= 0; charIdx--) {
        let char1 = str1[charIdx];
        let char2 = str2[charIdx];
        
        if (charMap.has(char1) && charMap.get(char1) != char2)
            return false;
        charMap.set(char1,char2);
          
    }
    
    return true;
};