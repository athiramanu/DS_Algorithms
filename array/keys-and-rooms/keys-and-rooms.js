/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keys = rooms[0], count = 0;
    rooms[0] = null;
    
    while(keys[0]) {
        let key = keys.shift();
        if (rooms[key]==null) continue;
        count++;
        keys = keys.concat(rooms[key])
        rooms[key] = null;
    }
        
    return rooms.length === count+1;
    
};