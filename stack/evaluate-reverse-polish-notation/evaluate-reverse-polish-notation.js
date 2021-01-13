/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    var num1, num2, result;
    
    for (i in tokens) {
        var token = tokens[i];
        switch(token) {
            case '+': 
                result = stack.pop() + stack.pop();
                stack.push(result);
                break;
            case '-': 
                num1  = stack.pop();
                num2 = stack.pop();
                stack.push(num2 - num1);
                break;
            case '*': 
                result = stack.pop() * stack.pop();
                stack.push(result);
                break;
            case '/': 
                num1  = stack.pop();
                num2 = stack.pop();
                result = Math.trunc(num2 / num1);
                stack.push(result);
                break;
            default: 
                stack.push(parseInt(token));
                break;
        }
    }
    
    return stack.pop();
    
};