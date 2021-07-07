/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    
    let curr = fruits[0], prev = null;
    let result = 0, start = 0, end;
    
    for (end = 1; end < fruits.length; end++) {

        if (fruits[end] == curr) continue;
        
        if (prev != null && fruits[end] != prev) {
            result = Math.max(result, end - start);
            start = end;
            while (fruits[start-1] == curr) start--;
        }
        
        prev = curr;
        curr = fruits[end];
    }
    
    return Math.max(result, end-start);
};