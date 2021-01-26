/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var sum = 0;
    var min = 0;
    var queue = [];
    var n;
    
    for (var num of nums) {
        sum += num;
        queue.push(num);

        while (sum >= s) {
            min = min < queue.length && min != 0 ? min : queue.length;
            n = queue.shift();
            sum -= n;
        }
    }
    
    return min;
};