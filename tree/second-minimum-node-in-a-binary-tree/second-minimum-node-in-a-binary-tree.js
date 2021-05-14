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
 var findSecondMinimumValue = function(root) {
    let min = root.val;
    let secondMin = Infinity;
    let queue = [root]
    
    while (queue.length) {
        
        let node = queue.shift();
        
        if (!node) continue;
        
        if (node.val != min) secondMin = Math.min(node.val, secondMin);
        
        queue.push(node.left);
        queue.push(node.right);
    }
    
    return secondMin == Infinity ? -1 : secondMin;
    
};