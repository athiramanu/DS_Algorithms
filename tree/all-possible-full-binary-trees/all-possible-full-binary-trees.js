/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function(n, cache = new Map()) {
  
    if (n & 1 == 0) return [];
    if (n == 1) return [new TreeNode(0)];
    if (cache.has(n)) return cache.get(n);    
    
    let result = [];
    
    for (let i = 2; i < n; i += 2) {
    
        let leftFBT = allPossibleFBT(i-1, cache);
        let rightFBT = allPossibleFBT(n-i, cache);
        
        for (let leftRoot of leftFBT) {
            for (let rightRoot of rightFBT) {
                let newTree = new TreeNode(0);
                newTree.left = {...leftRoot};
                newTree.right = {...rightRoot};
                result.push(newTree);
            }
        }
    }
    
    cache.set(n, result);
    return result;
    
};