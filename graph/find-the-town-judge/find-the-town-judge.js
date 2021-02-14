/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    var t = {};
    var u = {};
    var a,b;
    
    if (N == 1 && trust.length == 0) {
        return 1;
    }
    
    for (i = 0; i < trust.length; i++) {
        a = trust[i][0];
        b = trust[i][1];
        t[b] = t.hasOwnProperty(b) ? (t[b] + 1) : 1;
        u[a] = true;
    }
  
    for (i in t) {
        if (t[i] == N-1 && !u.hasOwnProperty(i)) {
            return i;
        }
    }
    
    return -1;
};