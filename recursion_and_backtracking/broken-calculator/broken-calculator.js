/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y, steps = 0) {    
    if (X >= Y) {
        return steps+X-Y;
    }
    
    Y%2 != 0 && Y++ && steps++
    Y  = Y/2;
    steps++;
    steps = brokenCalc(X,Y,steps);
    
    return steps;
};