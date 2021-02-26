/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    var stack = [];
    var top = -1;
    
    for (var s of S) {
        if (s == '(') {
            stack.push(s)
            top++;
            continue;
        }
        
        var elem1 = stack.pop();
        top--;
        
        if (elem1 !='(') {
            stack.pop();
            top--;
        }
        
        elem1 = isNaN(elem1) ? 1 : elem1*=2;
        
        if (top > -1) {
            isNaN(stack[top]) ? stack.push(elem1) && top++ : stack[top] += elem1;
        } else {
            stack.push(elem1);
            top++;
        }
    }
    return stack;
};