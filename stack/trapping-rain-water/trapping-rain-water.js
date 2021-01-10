/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let top = -1;
    let arrLength = height.length;
    let ans = 0;
    
    for (let i = 0; i < arrLength; i++) {
        
        while (top > -1 && height[stack[top]] < height[i]) {
            let pop_height = height[stack[top]];
            stack.pop();
            top--;
            
            if (top == -1) {
                break;
            }
            
            let minHeight = height[i] < height[stack[top]] ? height[i] : height[stack[top]];
            minHeight -= pop_height;
            
            let distance = (i - stack[top]) - 1;
            ans += distance * minHeight;            
        }
        
        stack.push(i);
        top++;
    }
    
    return ans
};