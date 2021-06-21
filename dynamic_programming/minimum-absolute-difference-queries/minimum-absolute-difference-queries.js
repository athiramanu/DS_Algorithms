/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var minDifference = function(nums, queries) {
    
    let frequencies = [];
    let maxLen = Math.max(...nums);
    let result = [];
    
    frequencies.push(new Array(maxLen+1).fill(0));
    
    nums.forEach((num, index) => {
        let copy = [...frequencies[index]];
        copy[num] += 1;        
        frequencies.push(copy);
    });
    
    queries.forEach(([start, end]) => {
        let diff = [];
        let min = Infinity;
              
        frequencies[start].forEach((val, index) => {
            if (frequencies[end+1][index] != val) diff.push(index);
        });
       
        for (let i = 0; i < diff.length-1; i++) {
            if (diff[i] != 0 && diff[i+1] != 0)
                min = Math.min(min, diff[i+1] - diff[i])
        }
        
        if (min == Infinity) result.push(-1);
        else result.push(min);
    });
    
    return result;
};