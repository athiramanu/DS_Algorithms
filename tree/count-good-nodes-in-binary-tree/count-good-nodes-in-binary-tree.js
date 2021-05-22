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
 var goodNodes = function(root, max = -Infinity) {
    let count = 0;
    
    if (!root) return 0;
    
    if (root.val >= max) {
        max = root.val;
        count++;
    }
    
    count += goodNodes(root.left, max) + goodNodes(root.right, max);
    
    return count;
};