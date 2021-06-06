/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    let result = [];

    assignParents(root, null);
    getNodes(target, k, result);

    return result;
};

function getNodes(node, k, result) {
    if (!node || node.visited) return;
    
    if (k == 0) result.push(node.val);
    
    node.visited = true;
    
    getNodes(node.left, k-1, result);
    getNodes(node.right, k-1, result);
    getNodes(node.parent, k-1, result);
}

function assignParents(node, parent) {
    if (!node) return;
    
    node.parent = parent;
    
    assignParents(node.left, node);
    assignParents(node.right, node);
}