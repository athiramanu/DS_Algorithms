const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
}

var formCombinations = function(digits, length, result) {   
    
    let dfs = function(pos = 0, string = "") {
        if (pos == length) 
            result.push(string);
        else {
            let arr = [...map[digits[pos]]];
            for (let j of arr) 
                dfs(pos+1, string + j);
        }
    }
    
    dfs();
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let length = digits.length;
    let result = [];
    
    if (length == 0) return [];
    else if (length == 1) return map[digits[0]];
    
    formCombinations(digits, length, result);
    
    return result;
};