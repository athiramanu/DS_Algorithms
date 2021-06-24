/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    
    let result = [first], i = 0;
    
    encoded.forEach((val) => {
        result.push(result[i++]^val);
    })
  
    return result;
};