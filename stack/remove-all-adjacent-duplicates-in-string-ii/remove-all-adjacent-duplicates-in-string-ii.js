/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let arr = s.split('');
    let stack = [], top = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (top > -1 && stack[top][0] == arr[i]) {
            stack[top][1]++;
        } else {
            stack.push([arr[i], 1]);
            top++;
        }
        
        if (stack[top][1] == k) {
            stack.pop();
            top--;
        }
    }
    
    return stack.map(curr => curr[0].repeat(curr[1])).join('');
};