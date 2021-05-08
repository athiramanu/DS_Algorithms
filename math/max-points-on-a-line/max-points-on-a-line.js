/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
    if (points.length < 2) return 1;
    let max = 2;
    let pointsCount= points.length;
    
    for (let x1 = 0; x1 < pointsCount; x1++) {
        let angleMap = {};
        if (pointsCount - x1 < max) break;
        for (let x2 = x1+1; x2 < pointsCount; x2++) {
            let angle = getAngle(points[x2], points[x1]);
            if (angle in angleMap) angleMap[angle]++;
            else angleMap[angle] = 2;
            max = Math.max(max, angleMap[angle]);
        }
    }
    
    return max;
};

function getAngle(point2, point1) {
    const [x1, y1] = point1
    const [x2, y2] = point2;
    
    if (x2 == x1) {
        return Infinity;
    } else if (y2 == y1) {
        return 0;
    } else {
        return (y2 - y1)/(x2 - x1);
    }
}