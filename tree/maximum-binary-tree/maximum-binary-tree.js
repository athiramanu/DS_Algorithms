/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums, start = 0, end = nums.length) {
    if (start >= end) return null;
        
    let maxIdx = getMax(nums, start, end);
            
    return new TreeNode(
                    nums[maxIdx], 
                    constructMaximumBinaryTree(nums, start, maxIdx),
                    constructMaximumBinaryTree(nums, maxIdx+1, end)
                )
};

function getMax(nums, start, end) {
    let max = start;
    
    for (let idx = start; idx < end; idx++) {
        if (nums[idx] > nums[max]) 
            max = idx;
    }
    
    return max;
}