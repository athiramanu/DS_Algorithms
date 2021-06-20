/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    
    let result = [];
    
    arr.sort((num1, num2) => num1-num2);
    
    for (let i = 1; i < arr.length; i++) {
        
        let diff = arr[i] - arr[i-1];
        
        if (result.length == 0 || result[0] > diff) 
            result = [diff, [[arr[i-1], arr[i]]]];
        
        else if (result[0] == diff) 
            result[1].push([arr[i-1], arr[i]]);
    }
    
    return result.pop();
};