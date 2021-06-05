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
 * @return {number[]}
 */
 var largestValues = function(root) {
    
    if (!root) return [];
    
    let result = [];
    let queue = [[root, 0]];
    
    while (queue.length) {
        
        let [node, level] = queue.shift();
        
        if (result[level] == undefined || result[level] < node.val) {
            result[level] = node.val;
        }
        
        if (node.left) queue.push([node.left, level+1]);
        if (node.right) queue.push([node.right, level+1]);        
    }
    
    return result;
};