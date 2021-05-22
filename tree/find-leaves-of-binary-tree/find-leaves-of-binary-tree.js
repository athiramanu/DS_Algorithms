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
 * @return {number[][]}
 */
 var findLeaves = function(root) {
    
    let leaves = [];
    
    getLeaves(root, leaves);
    
    return leaves;
};

function getLeaves(root, leaves) {
    
    if (!root) return -1;
    
    let height = 1 + Math.max(getLeaves(root.left, leaves), getLeaves(root.right, leaves));
    
    if (height == leaves.length) leaves.push([]);
    
    leaves[height].push(root.val);
    
    return height;
}