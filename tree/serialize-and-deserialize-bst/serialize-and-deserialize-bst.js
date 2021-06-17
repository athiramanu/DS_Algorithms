/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    
    var tree = [];
    
    function traverse(root, idx = 0) {
        if (!root) 
            return;
        tree[idx] = root.val;
        traverse(root.left, 2*idx+1);
        traverse(root.right, 2*idx+2);
    }
    
    traverse(root);
    return tree;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
        
    function traverse(idx) {
        if (data[idx] == undefined) 
            return null;
                
        let tree = new TreeNode(data[idx]);
        tree.left = traverse(2*idx+1);
        tree.right = traverse(2*idx+2);
        
        return tree;
    }
    
    return traverse(0);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */