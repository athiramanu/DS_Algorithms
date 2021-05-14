/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    
    let leafNodes1 = dfs(root1);
    let leafNodes2 = dfs(root2);
    
    while (leafNodes1.length) {
        if (leafNodes1.pop() == leafNodes2.pop()) continue;
        return false;
    };
    
    return leafNodes2.length == 0;
};

function dfs(node) {
    
    if (!node) return [];
    
    if (!node.left && !node.right) return [node.val];
    
    return [...dfs(node.left), ...dfs(node.right)];
}