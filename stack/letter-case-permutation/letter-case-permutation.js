/**
 * @param {string} S
 * @return {string[]}
 */
 var letterCasePermutation = function(S) {
    var stack1 = [];
    var stack2 = [];
    var length = S.length;
    
    if (length == 0) {
        return;
    }
    
    stack2 = addElement('', S[0], stack2);
    
    for (var i = 1; i < length; i++) {
        stack1 = stack2;
        stack2 = [];
        
        while (stack1.length) {
            var top = stack1.pop();
            stack2 = addElement(top, S[i], stack2);
        }
    }    
    
    return stack2;
};


var addElement = function(top, ch, stack) {
    if (isNaN(ch)) {
        stack.push(top + ch.toLowerCase());
        stack.push(top + ch.toUpperCase()); 
    }
    else {
        stack.push(top + ch);
    }
    return stack
};