/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findFrequentTreeSum = function(root) {
    let count = {};
    let result = [];
        
    let [max, _] = getFreqSum(root, count);
    
    Object.entries(count).forEach(([key, value]) => {
        if (value == max) result.push(key);
    });
        
    return result;
};

function getFreqSum(root, count) {
    
    if (!root) return [0, 0];
    
    let [lmax, lval] = getFreqSum(root.left, count);
    let [rmax, rval] = getFreqSum(root.right, count);
    
    let sum = lval + rval + root.val;
    
    count[sum] =  (count[sum] || 0) + 1;
    
    return [Math.max(lmax, rmax, count[sum]), sum];    
}