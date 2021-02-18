/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var area, h;
    var i = 0;
    var j = height.length - 1;
    
    while ( i < j) {
        h = height[i] < height[j] ? height[i] : height[j];
        area = h * (j-i);
        max = area > max ? area : max;
        height[i] < height[j] ? i++ : j--;
    }
 
    return max;  
};