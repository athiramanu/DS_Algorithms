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
 * @return {number[]}
 */
 var findMode = function(root) {
    let modes = {'count': 0, 'nums': []};
    let curr = {'count': 0, 'num': undefined};
    
    traverse(root, curr, modes);
    
    if (curr['count'] > modes['count']) 
        return [curr['num']];
    else if (curr['count'] == modes['count']) 
        modes['nums'].push(curr['num']);
    
    return modes['nums'];
};

function traverse(root, curr, modes) {
    if (!root) return;
    
    traverse(root.left, curr, modes);
        
    if (curr['num'] == undefined) {
        curr['num'] = root.val;
        curr['count'] = 1;
    } 
    
    else if (curr['num'] == root.val)
        curr['count'] += 1;
    
    else 
        updateModes(curr, modes, root.val);
    
    traverse(root.right, curr, modes);
}

function updateModes(curr, modes, num) {
    
    if (curr['count'] > modes['count']) {    
        modes['count'] = curr['count'];
        modes['nums'] = [curr['num']];
    } 
    
    else if (curr['count'] == modes['count']) {
        modes['nums'].push(curr['num'] );
    }
    
    curr['num'] = num;
    curr['count'] = 1;
}