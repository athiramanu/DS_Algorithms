/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var sum = [0];
    var min = 0;
    
    for (var i = 1; i <= nums.length; i++) {
        sum.push(sum[i-1] + nums[i-1]);
    }
    sum.shift();
    for (i = sum.length-1; i >= 0 && sum[i] >= s; i--) {
        var index = binarysearch(sum, 0, sum.length, sum[i] - s);
        min = min != 0 && min < (i-index+1) ? min : i-index+1;
    }
        
    return min;
};

var binarysearch = function(arr, s, e, t) {
    var m;
    while (s <= e) {
        if (arr[e] < t) {
            break;
        }
        m = Math.floor((s+e)/2);
        if (arr[m] == t) {
            return m+1;
        }
        else if (arr[m] > t) {
            e = m -1;
        }
        else {
            s = m + 1;
        } 
    }
    return m;
}