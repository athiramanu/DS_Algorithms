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
 var sumEvenGrandparent = function(root, parent = null, grandpa = null) {
    
    let sum = 0;
        
    if (!root) return 0;
    
    if (grandpa && !(grandpa.val & 1))
        sum += root.val;
    
    return sum + sumEvenGrandparent(root.left, root, parent) +
        sumEvenGrandparent(root.right, root, parent);
};