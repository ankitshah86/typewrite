class Board {

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.ctx = ctx
    }

    drawGuideLines() {
        ctx.strokeStyle = "rgb(200,200,250)";
        ctx.lineWidth = 2
        
        ctx.closePath()
        ctx.moveTo(0, 50)
        ctx.lineTo(200, 50)
        ctx.moveTo(0, 150)
        ctx.lineTo(200, 150)
        ctx.stroke()
    }

    /**
     * 
     * @param {String} letter 
     * @param {String} font 
     */
    drawLetter(letter, font) {
        this.ctx.clearRect(0, 0, 200, 200)
        this.drawGuideLines()

        this.ctx.strokeStyle = "rgb(200,200,250)";
        this.ctx.lineWidth = 1;
        this.ctx.font = "italic 200px " + font
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "bottom"
        this.ctx.strokeText(letter, 100, 198, 200)
    }

    clear() {
        this.ctx.clearRect(0, 0, 200, 200)
        this.drawGuideLines()
    }
}

exports.Board = Board