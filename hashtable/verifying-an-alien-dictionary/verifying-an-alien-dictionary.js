var createRankDict = function(map, order) {
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i+1;
    }
}

var rankWord = function(map, word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        if (!word2[i]) {
            return false;
        }
        if (map[word1[i]] < map[word2[i]]) {
            return true;
        } else if (map[word1[i]] > map[word2[i]]) {
            return false
        }
    }
    
    return true;
}

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = {};
    createRankDict(map, order);
    if (words[1] == undefined) return true;
    
    for (let i = 1; i < words.length; i++) {
        let result = rankWord(map, words[i-1], words[i]);
        if (!result) return false;
    }
    
    return true;
};