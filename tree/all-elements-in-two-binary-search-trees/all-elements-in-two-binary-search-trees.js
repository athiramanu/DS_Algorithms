/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    
    let partiallySortedList = [];
    
    getList(root1, partiallySortedList);
    
    let lastIdx1 =  partiallySortedList.length - 1;
    
    getList(root2, partiallySortedList);
    
    return sort(partiallySortedList, lastIdx1);
};

function sort(partiallySortedList, midIdx) {
    let index1 = 0, index2 = midIdx+1;
    let sortedList = [];
    
    while (index1 <= midIdx && index2 < partiallySortedList.length) {
        if (partiallySortedList[index1] < partiallySortedList[index2]) 
            sortedList.push(partiallySortedList[index1++]);
        else 
            sortedList.push(partiallySortedList[index2++]);
    }
    
    while (index1 <= midIdx ) 
        sortedList.push(partiallySortedList[index1++]);
    while (index2 < partiallySortedList.length) 
        sortedList.push(partiallySortedList[index2++]);
    
    return sortedList;
}

function getList(root, result = []) {
    if (!root) return result;
    getList(root.left, result);
    result.push(root.val);
    getList(root.right, result);
    return result
}