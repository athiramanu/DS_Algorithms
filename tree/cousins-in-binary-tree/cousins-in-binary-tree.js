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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let queue = [[root,0, null]];
    let found = [];

    while(queue.length) {
        let [node, depth, parent] = queue.shift();
        
        if (node == null) continue;
        
        if (node.val == x || node.val == y) found.push([parent, depth]);
        
        queue.push([node.left, depth+1, node], [node.right, depth+1, node]);
    }
    
    return found.length == 2 && found[0][0] != found[1][0] && found[0][1] == found[1][1];
};