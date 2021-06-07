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
 var rightSideView = function(root) {
    
    let result = [];
    
    if (!root) return result;
    
    let queue = [[root, 0]], idx = 0;
    
    while (queue[idx] != undefined) {
        let [node, level] = queue[idx++];
                
        if (queue[idx] == undefined || queue[idx][1] != level) 
            result.push(node.val);
        
        if (node.left) queue.push([node.left, level+1]);
        if (node.right) queue.push([node.right, level+1]);
    }
    
    return result;
};