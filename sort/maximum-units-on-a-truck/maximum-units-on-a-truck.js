/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    
    let totUnits = 0;
    
    boxTypes.sort((a,b) => b[1] - a[1]);
    
    for (let boxIndex = 0; boxIndex < boxTypes.length && truckSize > 0; boxIndex++) {
        
        let [boxes, units] = boxTypes[boxIndex];
        
        if (truckSize > boxes) 
            totUnits += (boxes * units);
        else 
            totUnits += (truckSize * units);
        
        truckSize -= boxes
    }
    
    return totUnits;
};