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
 var findBottomLeftValue = function(root) {
    
    let queue = [[root, 0]];
    let currVal = root.val;
    let currDepth = 0;
    
    while (queue.length) {
        
        let [node, d]  = queue.shift();
        
        if (d > currDepth) {
            currVal = node.val;
            currDepth = d;
        }
        
        if (node.left) queue.push([node.left, d+1]);
        if (node.right) queue.push([node.right, d+1]);
    }
    
    return currVal
};