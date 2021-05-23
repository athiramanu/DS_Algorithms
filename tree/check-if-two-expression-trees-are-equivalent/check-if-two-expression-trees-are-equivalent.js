/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
 var checkEquivalence = function(root1, root2) {
    let map = new Map();
    
    return getExpression(root1, map, +1) == getExpression(root2, map, -1) && map.size == 0;
};

function getExpression(root, map, inc) {
        
    if (root.val != "+") {
        if (map.has(root.val)) {
            let newCount = map.get(root.val) + inc
            if (newCount > 0) map.set(root.val, newCount);
            else map.delete(root.val)
        }
        else map.set(root.val, 1);
        return root.val[0].charCodeAt(0);
    }
    
    return getExpression(root.left, map, inc) + getExpression(root.right, map, inc);
    
}