/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
 var cleanRoom = function(robot) {
    let visited = new Set();
    clean(robot, 0, 0, 0, visited)
};

const DIR = [[1,0], [0, -1], [-1, 0], [0, 1]];

function clean(robot, x, y, dir, visited) {
    robot.clean();

    for (let i = 0; i < 4; i++) {
        let nx = x + DIR[dir][0];
        let ny = y + DIR[dir][1];
        
        let path = nx + "-" + ny;
        
        if (!visited.has(path) && robot.move()) {
            visited.add(path);
            clean(robot, nx, ny, dir, visited)
        }
        
        robot.turnRight();
        dir = (dir + 1 ) % 4;
    }
    robot.turnLeft();
    robot.turnLeft();
    robot.move();
    robot.turnLeft();
    robot.turnLeft();
}