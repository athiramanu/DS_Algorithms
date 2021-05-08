/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    
    if (secret.length != guess.length) return "0A0B";

    let numbersMap = {};
    let bulls = 0;
    let cows = 0;
    
    for (let numIdx in guess) {
          
        let secretNum = secret[numIdx];
        let guessNum = guess[numIdx];
        
        if (secretNum == guessNum) {
            bulls++;
            continue;
        }
        
        if (!(secretNum in numbersMap)) numbersMap[secretNum] = 0;
        if (!(guessNum in numbersMap)) numbersMap[guessNum] = 0;

        if (numbersMap[secretNum]++ < 0) cows++;
        if (numbersMap[guessNum]-- > 0) cows++;
    }
    
    return bulls + "A" + cows + "B";
};