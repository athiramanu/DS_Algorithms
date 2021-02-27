/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var result = 0;
    var sign = (dividend < 0 && divisor < 0) ||(dividend > 0 && divisor > 0) ? 1 : -1;
    
    if( dividend == -2147483648 && divisor == -1)  return 2147483647

    divisor = divisor < 0 ? 0 - divisor : divisor;
    dividend = dividend < 0 ? 0 - dividend : dividend;
    
    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }
    
    result = result > 2147483647 ? (sign == 1 ? 2147483647 : 2147483648) : result;
    
    return sign == 1 ? result : 0 - result;
};