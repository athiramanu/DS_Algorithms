/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result  = "";
    var map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10:"X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    var div = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    for (var d of div) {        
        if (num - d >= 0) {
            let repeat = ((num - (num%d))/d);
            num -= (repeat*d);
            result += (map[d].repeat(repeat));
        }
    }

    return result;
};