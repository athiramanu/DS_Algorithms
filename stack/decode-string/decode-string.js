/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {    
    let stack = [];
    
    for (var c of s) {
        
        if (c != ']') {
            stack.push(c);
            continue;
        }
        
        let cur = stack.pop();
        let str = '';
        
        while (cur != '[') {
            str = cur + str;
            cur = stack.pop()
        }
        
        cur = stack.pop();
        let num = '';
        
        while(!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }
        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    
    return stack.join('');
};