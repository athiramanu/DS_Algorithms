/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var flipBinaryTree = function(root, leaf) {
    reverse(leaf, null);
    return leaf;
};

function reverse(leaf, parent) {
    
    let oldParent = leaf.parent;
    leaf.parent = parent;
    
    if (!oldParent) return;

    if (leaf.left) leaf.right = leaf.left;
    leaf.left = oldParent;
    
    if (oldParent.left == leaf) oldParent.left = null;
    else oldParent.right = null;
          
    reverse(oldParent, leaf);
}