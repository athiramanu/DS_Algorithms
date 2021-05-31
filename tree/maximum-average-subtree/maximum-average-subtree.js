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
 * @return {number}
 */
 var maximumAverageSubtree = function(root) {
    
    let result = getSum(root);
    return result[2];
};

function getSum(root) {
    
    if (!root) return [0, 0, -Infinity];
    
    let [lsum, lcount, lmax] = getSum(root.left);
    let [rsum, rcount, rmax] = getSum(root.right);
    
    let sum = lsum + rsum + root.val;
    let count = lcount + rcount + 1;
    let max = Math.max(lmax, rmax, sum/count);
        
    return [sum, lcount + rcount + 1, max];
}