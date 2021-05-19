/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
 var copyRandomBinaryTree = function(root, visited = new Map()) {
    
    if (!root) return null;
    
    if (visited.has(root)) return visited.get(root);
        
    let newNode = new NodeCopy(root.val);
    
    visited.set(root, newNode);
    
    newNode.left = copyRandomBinaryTree(root.left, visited); 
    newNode.right = copyRandomBinaryTree(root.right, visited);
    newNode.random = copyRandomBinaryTree(root.random, visited)
    
    
    return newNode;
}