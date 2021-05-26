/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
 var constructFromPrePost = function(pre, post) {
    
    let seen = new Map();
    
    seen.set(pre[0], new TreeNode(pre[0]))
    
    for (let i = 0; i < pre.length; i++) {
                
        let left = pre[i+1];
        let right = post[post.indexOf(pre[i]) - 1];
        
        if(seen.has(left)) left = null;
        else if (left) seen.set(left, new TreeNode(left));
 
        if (seen.has(right)) right = null;
        else if (right) seen.set(right, new TreeNode(right));
        
        let node = seen.get(pre[i]);
        node.left = seen.get(left) || null;
        node.right = seen.get(right) || null;
    }    
    
    return seen.get(pre[0]) || null;
};