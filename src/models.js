
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

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     * @param {String} color 
     * @param {Number} width 
     */
    drawPath(ctx,color,width) {

        ctx.strokeStyle = color
        ctx.lineWidth = width

        this.points.forEach((p, i) => {
            if (p.event) {
                if (p.event == "mousedown") {
                    ctx.beginPath()
                    ctx.moveTo(pathVec[i+1].x,pathVec[i+1].y)
                } else if (p.event == "mouseup") {
    
                }
            } else {
                ctx.lineTo(p.x,p.y)
                ctx.stroke()
            }
        })
    
        ctx.closePath()
    }
}

exports.Path = Path
exports.Point = Point