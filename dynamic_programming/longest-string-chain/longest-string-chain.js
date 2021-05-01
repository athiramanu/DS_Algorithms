/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
    let dp = {};
    let max = 0;
    
    words.sort((a,b) => a.length - b.length);
    
    for (let word of words) {
        dp[word] = 1;
        for (let i = 0; i < word.length; i++) {
            let subString = word.slice(0, i) + word.slice(i+1);
            if (subString in dp) {
                dp[word] = Math.max(dp[word], (dp[subString]||0) +1);
            }
        }
        max = Math.max(dp[word], max);
    }
    return max;
    
};