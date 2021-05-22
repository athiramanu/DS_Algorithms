/**
 * @param {number} label
 * @return {number[]}
 */
 var pathInZigZagTree = function(label) {

    let result = [];
    let level = Math.floor(Math.log2(label)) + 1;
    
    getPath(level, result, label);
    
    return result.reverse();
};

function getPath(level, result, label) {
    
    result.push(label);
    
    if (label == 1) return;

    let smallest = Math.pow(2, level-1);
    let largest = Math.pow(2, level) - 1;
    let parent = Math.floor((largest - label + smallest)/2);
    
    getPath(level-1, result, parent)
}