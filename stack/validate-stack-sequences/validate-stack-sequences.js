/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var stack = [], top = -1;
    var i = 0;
    
    for (var num of pushed) {
        stack.push(num);
        top++;

        while(popped[i] != undefined && stack[top] == popped[i] ){
            stack.pop();
            top--;
            i++;
        }
    }

    return popped[i] != undefined ? false : true;
};