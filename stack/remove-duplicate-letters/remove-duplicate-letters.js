/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var dict = {};
    var length = s.length;
    var stack = [];
    var stackDict = {};
    var ch;
    var top = -1;
    
    for (var i = 0; i < length; i++) {
        ch = s[i];
        if (dict[ch]) {
            dict[ch] += 1
        }
        else {
            dict[ch] = 1;
            stackDict[ch] = false;
        }
    }   
    
    for (i = 0; i < length; i++) {
        ch = s[i];
        dict[ch] -= 1;
        
        if (stackDict[ch]) {
            continue;
        }
        
        if (top !== -1) {
            while (stack[top] > ch && dict[stack[top]]) {                
                stackDict[stack[top]] = false;
                stack.pop();
                top--;
            }    
        }
        
        stack.push(ch);
        stackDict[ch] = true;
        top++;        
    }    
    
    return stack.join('')
};