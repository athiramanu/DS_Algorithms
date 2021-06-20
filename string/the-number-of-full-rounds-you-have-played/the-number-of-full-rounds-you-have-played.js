/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
 var numberOfRounds = function(startTime, finishTime) {
    
    let [sH, sM] = startTime.split(":");
    let [fH, fM] = finishTime.split(":");
    let rounds = 0;
    
    sH = Number(sH);
    sM = Number(sM);
    fH = Number(fH);
    fM = Number(fM);
    
    if (sM % 15) {
        sM = ((sM+15)/15>>0)*15;
        if (sM == 60) {
            sH++;
            sM = 0;
            if (sH == 24) sH = 0;
        }
    }
    
    if (fM % 15) 
        fM = (fM/15>>0)*15;   
        
    while (!(sH == fH && sM == fM)) {
        sM += 15;
                
        if (sM == 60) {
            sH++;
            sM = 0;
            if (sH == 24) sH = 0;
        }    
        rounds++;
    }
    
    return rounds;
};