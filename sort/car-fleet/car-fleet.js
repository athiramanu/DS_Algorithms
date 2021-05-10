function carFleet(target, position, speed) {
    
    let timeArray = getTimeTaken(target, position, speed);
    
    timeArray.sort((pos1, pos2) => pos1[0] - pos2[0]);
    
    return getFleet(timeArray);
};


function getTimeTaken(target, position, speed) {
    
    let timeArray = [];
    
    position.forEach((pos, posIdx) => {
        
        let distance = target - pos;
        let time = distance/speed[posIdx];
        
        timeArray.push([pos, time]);
    });
    
    return timeArray;
}

function getFleet(timeArray) {
    
    let fleet = 0;
    let currMaxTime = 0;
        
    for (let posIdx = timeArray.length - 1; posIdx >= 0; posIdx--) {
        
        if (timeArray[posIdx][1] > currMaxTime) {
            currMaxTime = timeArray[posIdx][1];
            fleet++;
        }
    }
    
    return fleet;
}