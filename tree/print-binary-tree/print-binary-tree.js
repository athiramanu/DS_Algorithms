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
 * @return {string[][]}
 */

 var printTree = function(root) {
    
    let height = getHeight(root, 0); 
    let columns = (2 ** (height+1) ) - 1;
    
    let queue = [ [root, (columns-1)/2, 0] ];
    let result = [];
    
    while (queue.length) {
                
        let [node, c, r] = queue.shift();
        
        if (!result[r]) 
            result[r] = new Array(columns).fill("");
        
        result[r][c] = String(node.val);
        
        if (node.left) {
            let lpos = c - (2 ** (height-r-1));
            queue.push([node.left, lpos, r+1]);
        }
        
        if (node.right) {
            let rpos = c + (2 ** (height-r-1));
            queue.push([node.right, rpos, r+1]);
        }
    }
    
    return result;
};

function getHeight(root, h) {
    
    if (!root) return 0;
    
    return Math.max(h, getHeight(root.left, h+1), getHeight(root.right, h+1));
}