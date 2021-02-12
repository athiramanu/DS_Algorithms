/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    var step = 0;
    
    while (num > 0) {
        step++;
        if (num%2 === 0) {
            num = num/2;
        } else {
            num -= 1;
        }
    }
    
    return step;
};