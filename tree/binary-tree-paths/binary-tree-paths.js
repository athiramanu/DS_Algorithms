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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    
    let result = [];
    
    getPath(root, result);
    
    return result;
};

function getPath(root, result, path = []) {
    
    if (!root) return;
        
    path = [...path, root.val];

    if(!root.left && !root.right) result.push(path.join("->"));
    
    getPath(root.left, result, path);
    getPath(root.right, result, path);
}