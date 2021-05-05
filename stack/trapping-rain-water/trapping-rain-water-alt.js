function waterArea(heights) {

    if (heights.length <= 2) return 0;

    let leftMaxArray = [0]; 
    let rightMaxArray = [0]; 
    let result = 0; 
    let idx; 
    for (idx = 1; idx < heights.length; idx++) {
        if (heights[idx - 1] > 0) {
            let maxLeft = Math.max(heights[idx - 1], leftMaxArray[idx - 1]);
            leftMaxArray.push(maxLeft);
        } else {
            leftMaxArray.push(leftMaxArray[idx - 1]);
        }
    }

    for (idx = heights.length - 2; idx >= 0; idx--) {
        if (heights[idx + 1] > 0) {
            let maxRight = Math.max(heights[idx + 1], rightMaxArray[0]);
            rightMaxArray.unshift(maxRight);
        } else {
            rightMaxArray.unshift(rightMaxArray[0]);
        }
    }

    for (idx = 0; idx < leftMaxArray.length; idx++) {
        let minHeight = Math.min(rightMaxArray[idx], leftMaxArray[idx]);
        if (heights[idx] < minHeight) {
            result += minHeight - heights[idx];
        }
    }
    return result;
}
