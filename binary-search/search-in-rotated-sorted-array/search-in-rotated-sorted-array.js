/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {    
    return binarySearch(0, nums.length-1, nums, target);    
};

function binarySearch(start, end, nums, target) {
    let result = -1;
    
    if (start > end) return result;
    
    let mid = Math.floor((start+end)/2);

    if (nums[mid] == target) {
        return mid;
    }
    
    else if (nums[mid] >= nums[start]) {
        if (target < nums[mid] && target >= nums[start]) {
            result = Math.max(result, binarySearch(start, mid-1, nums, target));
        } else {
            result = Math.max(result, binarySearch(mid+1, end, nums, target));
        }
    }
    
    else {
        if (target > nums[mid] && target <= nums[end]) {
            result = Math.max(result, binarySearch(mid+1, end, nums, target));
        } else {
            result = Math.max(result, binarySearch(start, mid-1, nums, target));
        }
    }
    
    return result;
}