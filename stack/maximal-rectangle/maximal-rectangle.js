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

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let memArray = [];
    let maxRect = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == 0) {
                memArray.push(matrix[i][j]);
            }
            else if (matrix[i][j] == 0 ) {
                memArray[j] = 0;
            } else {
                memArray[j] = parseInt(memArray[j]) + 1;
            }
        }
        
        let maxArea = largestRectangleArea(memArray)
        maxRect = maxRect > maxArea ? maxRect : maxArea;
    }
    return maxRect;
};