/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {    
    
    let swapIdx = getSwapIdx(nums);
    
    if (swapIdx==-1) return nums.reverse();

    setSwapIdx(nums, swapIdx)
    
    let start = swapIdx+1;
    let end = nums.length-1;
    
    while (start < end) {
        swap(start, end, nums);
        start++;
        end--;
    }
    
    return nums;
};

function setSwapIdx(nums, swapIdx) {
    for (let j = swapIdx+1; j < nums.length; j++) {
        if (nums[j] <= nums[swapIdx]) {
            swap(swapIdx,j-1,nums);
            break;
        } else if (j == nums.length-1) {
            swap(swapIdx,j,nums)
        }
    }
}

function getSwapIdx(nums) {
    for (let i = nums.length-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) return i;
    }
    return -1;
}

function swap(i, j, nums) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}