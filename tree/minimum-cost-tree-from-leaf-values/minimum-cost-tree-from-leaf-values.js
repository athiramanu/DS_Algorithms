/**
 * @param {number[]} arr
 * @return {number}
 */
 var mctFromLeafValues = function(arr) {
    
    let stack = [Infinity];
    let top = 0;
    let res = 0;
    
    for (let a of arr) {
        while(stack[top] <= a) {
            let mid = stack.pop();
            res += mid * Math.min(stack[--top], a);
        }
        stack.push(a);
        top++;
    }
        
    while(stack.length > 2) {
        res += stack.pop() * stack[top-1];
        top--;
    }
    
    return res;
};