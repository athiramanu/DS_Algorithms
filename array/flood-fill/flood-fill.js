/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    
    let queue = [[sr,sc]], oldVal = image[sr][sc];
    
    if (oldVal == newColor) return image;
    
    while (queue.length) {
        
        let [x, y] = queue.shift();
        
        image[x][y] = newColor;
        
        if (image[x-1] && image[x-1][y] == oldVal)
            queue.push([x-1, y]);
        
        if (image[x+1] && image[x+1][y] == oldVal)
            queue.push([x+1, y])
        
        if (image[x][y+1] == oldVal)
            queue.push([x, y+1])
        
        if (image[x][y-1] == oldVal)
            queue.push([x, y-1])   
    }
    
    return image;
};