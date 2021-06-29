/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    
    let stack = [], top = -1;
    
    s = s.split("");
    
    for (let sIdx = 0; sIdx < s.length; sIdx++) {
        
        if (stack[top] == s[sIdx]) {
            stack.pop();
            top--;
        }
        
        else {
            stack[++top] = s[sIdx];
        }
        
    }
    
    return stack.join("");
};