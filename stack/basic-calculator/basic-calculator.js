/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var result = 0;
    var operand = '';
    var stack = [];
    var sign = 1;
    
    for (var i in s) {
        if (/\d/.test(s[i])) {
            operand += s[i];
        }
        else if (s[i] === '+') {
            result += sign * (+operand);
            sign = 1;
            operand = '';
        }
        else if (s[i] === '-') {
            result += sign * (+operand);
            sign = -1;
            operand = '';
        }
        else if (s[i] === '(') {
            stack.push(result)
            stack.push(sign);
            result = 0;
            sign = 1;
        }
        else if (s[i] === ')') {
            result += sign * (+operand);
            result *= stack.pop();
            result += stack.pop();
            operand = '';
            sign = 1;
        }
    }
    return result + sign*(+operand);
};