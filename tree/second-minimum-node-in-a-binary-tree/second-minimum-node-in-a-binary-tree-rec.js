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
 var findSecondMinimumValue = function(root, min) {
    
    if (!root) return -1;
    
    if (min == undefined) min = root.val; 
        
    if (root.val > min) return root.val;
    
    let leftMin = findSecondMinimumValue(root.left, min);
    let rightMin = findSecondMinimumValue(root.right, min);
    
    
    return (leftMin > 0 && rightMin > 0) ? Math.min(leftMin, rightMin) : Math.max(leftMin, rightMin);
};