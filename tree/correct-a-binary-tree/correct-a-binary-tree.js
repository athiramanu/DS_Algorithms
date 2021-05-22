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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
 var correctBinaryTree = function(root) {
    
    let queue = [root];
    let visited = new Set();
        
    while (queue.length) {

        let node = queue.shift();
                
        if (node.right) {
            if (node.right.right && visited.has(node.right.right.val)) {
                node.right.right = null;
                node.right = null;
                break;
            }
            visited.add(node.right.val);
            queue.push(node.right);
        }
        
        if (node.left) {
            if (node.left.right && visited.has(node.left.right.val)) {
                node.left.right = null;
                node.left = null;
                break;
            }
            visited.add(node.left.val);
            queue.push(node.left);  
        } 
    }
    
    return root;
};