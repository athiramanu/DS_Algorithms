/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    var stack = [];
    var i, index, top = -1;
    
    for (i = 0; i < s.length; i++) {
        if (s[i] != '(' && s[i] != ')') {
            continue;
        }
       
        if (s[i] == ')' && stack.length && stack[top][0] == '(' ) {
            stack.pop();
            top--;
            continue;
        }

        stack.push([s[i], i]);
        top++;
    }
    
    while (top != -1) {
        index = stack[top][1];
        s = s.substr(0,index) + s.substr(index+1);
        stack.pop();
        top--;
    }

    return s;
};