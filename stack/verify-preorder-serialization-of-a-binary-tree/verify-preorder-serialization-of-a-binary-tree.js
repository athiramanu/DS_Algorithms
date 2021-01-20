/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var stack = [{
        val : preorder[0],
        l: false,
        r: false
    }];
    preorder = preorder.split(",");
    var length = preorder.length;
    var top = 0;
    
    if (length == 1 && stack[0].val == "#") {
        return true;
    } 
    else if (length <= 1 || stack[0].val == "#") {
        return false;
    }
        
    for (var i = 1; i < length; i++) {
        
        if (top == -1) {
            return false;
        }
        
        if (stack[top].l) {
            stack.pop();
            top--;
        } else {
            stack[top].l = true;
        }
        
        if (preorder[i]!='#') {
            stack.push({
                val: preorder[i],
                l: false,
                r: false
            });
            top++;
        }
    }
    
    return !stack.length;
};