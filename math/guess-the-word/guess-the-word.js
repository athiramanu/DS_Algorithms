/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
 var findSecretWord = function(wordlist, master) {    
    for (let i = 0; i< 10; i++) {
        let idx = Math.floor(Math.random()*(wordlist.length-1));
        let word = wordlist[idx];
        let match = master.guess(word);
        let tempList = [];
        for (let w of wordlist) {
            if (match == getMatch(word, w)) {
                tempList.push(w);
            }
        }
        wordlist = tempList;
    }
};

function getMatch(word, w) {
    let matches = 0;
    for (let i = 0; i < 6; i++) {
        if (word[i] == w[i]) {
            matches++;
        }
    }
    return matches;
}