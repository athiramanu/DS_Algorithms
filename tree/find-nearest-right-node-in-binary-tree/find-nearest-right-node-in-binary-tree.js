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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
 var findNearestRightNode = function(root, u) {
    
    if (root.val == u.val) return null;
    
    let queue = [[root, 0]];
    let pos = 0;
    
    while (true) {
        
        let [node, level] = queue[pos++];
                
        if (node.val == u.val) {
            if (!queue[pos]) return null;
            
            let [rightNode, rightNodeLevel] = queue[pos];
                        
            if (rightNodeLevel == level) return rightNode
            else return null;
        }
        
        node.left && queue.push([node.left, level+1]);
        node.right && queue.push([node.right, level+1]);
    }
    
};