/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
 var maximumRemovals = function(s, p, removable) {
    
    let left = 0, right = removable.length - 1;
    let backup = s.split("");
            
    while (left <= right) {
        
        let mid = Math.floor((left+right)/2);
        
        for (let i = left; i <= mid; i++)
            backup[removable[i]] = "_";

        if (check(backup, p)) {
            left = mid+1;
        } 
        else {
            for (let i = left; i <= mid; i++)
                backup[removable[i]] = s[removable[i]];
            right = mid-1;
        }
    }
    
    return left;
};

function check(s, p) {
    
    let j = 0;    
    
    s.forEach((ch) => ch == p[j] && j++);
    
    return j == p.length;
}