
class Point {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} event 
     */
    constructor(x = null, y = null, event = null) {
        this.x = x
        this.y = y
        this.event = event
    }
}

class Path {
    /**
     * 
     * @param {Point[]} points 
     */
    constructor(points = []) {
        this.points = points
    }

    clear() {
        this.points = []
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    addPoint(x, y) {
        this.points.push(new Point(x,y))
    }

    /**
     * 
     * @param {String} event 
     */
    addEvent(event) {
        this.points.push(new Point(null,null,event))
    }
}

exports.Path = Path
exports.Point = Point