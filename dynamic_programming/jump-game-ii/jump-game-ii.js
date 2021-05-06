/**
 * @param {number[]} array
 * @return {number}
 */
 var jump = function(array) {
    // Write your code here.

    if (array.length <= 1) return 0;

    let steps = array[0];
    let maxReach = array[0];
    let jumps = 0;

    for (let i = 1; i < array.length-1; i++) {
        steps -= 1;
        maxReach = Math.max(maxReach, array[i] + i);

        if (steps == 0) {
            steps = maxReach - i;
            jumps++;
        }
    }
    return jumps+1;
}
