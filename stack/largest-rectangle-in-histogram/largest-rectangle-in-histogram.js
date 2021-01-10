/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    
    let heightLength = heights.length;
    let maxArea = 0;
    let stack = [];
    let top = -1;
    
    
    for (let i = 0; i < heightLength; i++) {        
        while (stack.length && heights[stack[top]] >= heights[i]) {
            let index = stack.pop();
            top--;
            let area = 0;
            if (stack.length == 0) {
                area = heights[index] * i;
            }
            else {
                area = heights[index] * (i - stack[top] -1);
            }
            maxArea = maxArea > area ? maxArea : area;
        }
        stack.push(i);
        top++;
    }
    
    return maxArea;
};