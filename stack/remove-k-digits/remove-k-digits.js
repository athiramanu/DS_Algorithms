/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var length = num.length;
    
    if (length == k) {
        return "0";
    }

    var stack = [];
    var top = -1;
    
    for (var n of num) {
      
        while (top != -1 && n < stack[top] && k != 0) {
            stack.pop();
            top--;
            k--;
            
        }
        
        stack.push(n);
        top++;
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    while (stack[0] == "0" && stack.length > 1) {
        stack.shift();    
    }
    
    return stack.join('');
};