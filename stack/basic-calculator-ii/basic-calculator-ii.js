var isDigit = function(c) {
    var num = {
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true
    }
    
    return num[c] ? true : false;
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var total = 0;
    var curr = 0;
    var lastop = '+';
    var length = s.length;
    
    for (var i =0; i< length; i++) {
        var c = s[i];
        
        if (isDigit(c)) {
            while (isDigit(s[i+1])) {
                c += s[i+1];
                i++;
            }
            
            c = Number(c);
            
            if (lastop == '+' || lastop == '-') {
                total += curr;
                curr = lastop == '-' ? -c : c;
            }
            
            else if (lastop == '*') {
                curr = curr * c;
            }
            
            else if (lastop == '/') {
                curr = Math.trunc(curr/c);
            }            
        } 
        
        else if (c == ' ') {
            continue;
        }
        
        else {
            lastop = c;
        }
    }

    return total += curr;
    
};