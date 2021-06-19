/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
 var mergeTriplets = function(triplets, target) {
    
    let maxTriplet = [0, 0, 0];
    
    triplets.forEach(([a,b,c]) => {
        
        if(a <= target[0] && b <= target[1] && c <= target[2]) {
            
            maxTriplet[0] = Math.max(maxTriplet[0], a);
            maxTriplet[1] = Math.max(maxTriplet[1], b);
            maxTriplet[2] = Math.max(maxTriplet[2], c);
            
            return true;
        }
        
        return false;
    });
        
    return maxTriplet.join("-") == target.join("-");
};