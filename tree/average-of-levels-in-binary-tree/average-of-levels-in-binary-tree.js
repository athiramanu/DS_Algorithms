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
var averageOfLevels = function(root) {
    var queue = [];
    var result = [];
    
    queue = [root]
    
    while (queue.length) {
        let len = queue.length;
        let row = 0;
        
        for (let i = 0; i < len; i++) {
            root = queue.shift();
            row += root.val;
            root.left && queue.push(root.left);
            root.right && queue.push(root.right);
        }
        
        result.push(row/len);
    }
    
    return result;
};