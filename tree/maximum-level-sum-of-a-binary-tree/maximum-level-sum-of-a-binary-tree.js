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
 var maxLevelSum = function(root) {
    let sum = [];
    
    getSum(root, 0, sum);
    
    let max = Math.max(...sum);
        
    return sum.indexOf(max) + 1;
};

function getSum(root, level, sum) {
    
    if (!root) return;
    
    if (sum[level]) sum[level] += root.val;
    else sum[level] = root.val;
    
    getSum(root.left, level+1, sum);
    getSum(root.right, level+1, sum)
}