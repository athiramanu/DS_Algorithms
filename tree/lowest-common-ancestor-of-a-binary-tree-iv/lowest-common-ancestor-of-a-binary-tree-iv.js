/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, nodes) {
    nodes = new Set(nodes);
    
    return getLowestCommonAncestor(root, nodes);  
};

function getLowestCommonAncestor(root, nodes) {
    
    if (!root) return null;
    
    if (nodes.has(root)) return root;
        
    let left = lowestCommonAncestor(root.left, nodes);
    let right = lowestCommonAncestor(root.right, nodes);
    
    if (left && right) 
        return root;
    
    else 
        return left || right;
};