/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    
    let stack = [root1];
    let leafNodes = [];
    
    while (stack.length) {
        
        let node = stack.pop();
        
        if (!node) continue;
        
        if (!node.left && !node.right) leafNodes.push(node.val);
        
        else {
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    
    stack = [root2];
    
    while (stack.length) {
        
        let node = stack.pop();
        
        if (!node) continue;
        
        if (!node.left && !node.right) {
            if (node.val != leafNodes.shift()) 
                return false;
        }
        
        else {
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    
    return leafNodes.length == 0;
};