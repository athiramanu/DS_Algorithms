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
 * @return {TreeNode}
 */
 var lcaDeepestLeaves = function(root) {
    
    return helper(root)[1];
    
};

function helper(root) {
    
    if (!root) return [0, null];
    
    let [h1, lca1] = helper(root.left);
    let [h2, lca2] = helper(root.right);
    
    if (h1 > h2) return [h1+1, lca1];
    if (h2 > h1) return [h2+1, lca2];
    
    return [h1+1, root];
}