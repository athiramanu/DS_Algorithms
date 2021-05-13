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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    let stack = [root];
    
    while (stack.length > 0) {
        let node = stack.pop();
        
        if (node == null)
            continue;
        
        if (node.val == subRoot.val) {
            let found = checkIfSubtree(node, subRoot);
            if (found)  return true;
        }
        
        stack.push(node.left);
        stack.push(node.right);
    }
    
    return false;
};

function checkIfSubtree(node, subRoot) {
    let nodeStack = [node];
    let subRootStack = [subRoot];
    
    while (nodeStack.length && subRootStack.length) {
        let node1 = nodeStack.pop();
        let sub1 = subRootStack.pop();
        
        if (node1 == null && sub1 == null) continue;
        
        if (node1 == null || sub1 == null) return false;
        
        if (node1.val == sub1.val) {
            nodeStack.push(node1.left);
            nodeStack.push(node1.right);
            subRootStack.push(sub1.left);
            subRootStack.push(sub1.right);
        } else {
             return false;   
        }
    } 
    
    return nodeStack.length == subRootStack.length;
}