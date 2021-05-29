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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
 var delNodes = function(root, to_delete) {
    
    let forest = [];
    
    let deleteSet = new Set(to_delete);
    
    getForest(root, deleteSet, forest, null);
    
    if (!deleteSet.has(root.val)) forest.push(root);
    
    return forest;
};


function getForest(root, deleteSet, forest, parent) {
    
    if (!root) return;
    
    getForest(root.left, deleteSet, forest, root);
    getForest(root.right, deleteSet, forest, root);
    
    if (deleteSet.has(root.val)) {
        
        root.left && forest.push(root.left);
        root.right && forest.push(root.right);
        root.left = null;
        root.right = null;
        if (parent) {
            if (parent.left && parent.left.val == root.val) parent.left = null;
            if (parent.right && parent.right.val == root.val) parent.right = null;
        }
    }
    
}