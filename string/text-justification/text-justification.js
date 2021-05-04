/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    let charCount = 0;
    let result = [];
    let start, end;
    
    for (start = 0, end = 0; end < words.length; end++) {
        if ((start != end && (charCount + 1 + words[end].length) > maxWidth) || 
           (charCount + words[end].length > maxWidth)) {
            formWord(start, end-1, words, charCount, result, maxWidth);
            charCount = words[end].length;
            start = end;
        }
        else {
            if (charCount != 0) charCount++; 
            charCount += words[end].length;
        }
    }
    combineRemainingWords(start, end-1, words, result, maxWidth);
    
    return result;
};

function combineRemainingWords(start, end, words, result, maxWidth) {
    let string = "";
    for (let i = start; i <= end; i++) {
        if(i != start) {
            string = string + " " + words[i];
        } else {
            string = string + words[i];
        }
    }
    string = string + " ".repeat(maxWidth - string.length);
    result.push(string);
}

function formWord(start, end, words, charCount, result, maxWidth) {
    let numOfWords = end - start + 1;
    let numOfSpaces = end - start;
    let spaceDistribution = Math.floor((maxWidth - charCount)/numOfSpaces);
    let extraSpaces = (maxWidth - charCount)%numOfSpaces;
    let string = "";

    for (let i = start; i <= end; i++) {
        string = string + words[i];
        if(i != end) {
            string = string + " ".repeat(spaceDistribution+1);
        }
        if (extraSpaces) {
            string = string + " ";
            extraSpaces--;
        }
    }
    string = string + " ".repeat(maxWidth - string.length);
    result.push(string);    
}