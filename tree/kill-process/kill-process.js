/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
 var killProcess = function(pid, ppid, kill) {
    
    let map = {};
    let result = [];
        
    ppid.forEach((id, index) => {
        if (map[id]) {
            map[id].push(pid[index]);
        } else {
            map[id] = [pid[index]];        
        }
    });
    
    let queue = [kill];

    while (queue.length) { 
        let node = queue.pop();
        let child = map[node];
        
        result.push(node)        
        if (!child) continue;

        queue.push(...child);
    }
    
    return result;
};