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
 var pseudoPalindromicPaths  = function(root, bitmask = 0) {
    
    if (!root) return 0;
    
    bitmask ^= 1 << root.val;
    
    let paths = pseudoPalindromicPaths(root.left, bitmask) + pseudoPalindromicPaths(root.right, bitmask);
    
    if (root.left == root.right && (bitmask & (bitmask-1)) == 0) paths++;
    
    return paths;
};