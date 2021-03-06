
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
        this.points.push(new Point(x, y))
    }

    /**
     * 
     * @param {String} event 
     */
    addEvent(event) {
        this.points.push(new Point(null, null, event))
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     * @param {String} color 
     * @param {Number} width 
     */
    drawPath(ctx, color = ctx.strokeStyle, width = ctx.lineWidth) {



        ctx.strokeStyle = color
        ctx.lineWidth = width

        for (let i = 0; i < this.points.length; i++) {
            let p = this.points[i]

            if (p.event != null) {
                if (p.event == "mousedown") {
                    ctx.moveTo(this.points[i + 1].x, this.points[i + 1].y)
                    ctx.beginPath()

                } else if (p.event == "mouseup") {

                }
            } else {
                ctx.lineTo(p.x, p.y)
                ctx.stroke()
            }
        }
    }

    applySmoothing(ctx) {


        //apply running average for points
        //run this iteration 5 times
        for (let k = 0; k < 5; k++) {
            let smoothVec = []
            for (let i = 0; i < this.points.length; i++) {
                let p = this.points[i]
                smoothVec.push(p)
                if (p.event != null) {
                    if (p.event == "mousedown") {
                        ctx.beginPath()
                        ctx.moveTo(this.points[i + 1].x, this.points[i + 1].y)
                    } else if (p.event == "mouseup") {
                        ctx.closePath()
                    }
                    continue
                } else if (i > 0 && i < this.points.length - 1 && this.points[i - 1].event == null && this.points[i + 1].event == null) {
                    smoothVec[i].x = parseFloat(((smoothVec[i - 1].x + this.points[i + 1].x) / 2).toFixed(3))
                    smoothVec[i].y = parseFloat(((smoothVec[i - 1].y + this.points[i + 1].y) / 2).toFixed(3))
                }
                console.log(i)
            }
            this.points = smoothVec
            console.log(k)
        }
    }

}



exports.Path = Path
exports.Point = Point