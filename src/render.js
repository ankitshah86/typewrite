const { getFontSelector, getCtx2d, getClearButton, getSmoothButton, getCanvas } = require("./elements")
const {Path,Point} = require("./models")


var drawingboard = getCanvas()
var ctx = getCtx2d(drawingboard)
var clearButton = getClearButton()
var smoothButton = getSmoothButton()
var fontSelector = getFontSelector()

drawingboard.width = 200
drawingboard.height = 200
var pathBegin
var prevX, prevY

var pathVec = []
var fontFamily = "Times New Roman"
var path = new Path()

fontSelector.onchange = function () {
    let idx = this[this.selectedIndex].text
    fontFamily = idx
    clear()
}

var drawPath = function () {
    path.drawPath(ctx)
}

var applySmoothing = function () {
    clearBoard()
    path.applySmoothing(ctx)
    drawPath()
}

var clearBoard = function() {
    ctx.canvas.width = ctx.canvas.width
    ctx.clearRect(0, 0, 200, 200)
    drawGuideLines()

    ctx.strokeStyle = "rgb(200,200,250)";
    ctx.lineWidth = 1;
    ctx.font = "italic 200px " + fontFamily
    ctx.textAlign = "center"
    ctx.textBaseline = "bottom"
    ctx.strokeText("a", 100, 198, 200)
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2
}

var clear = function () {
    console.log("lskdjflskjf")
    path.clear()
    ctx.canvas.width = ctx.canvas.width
    ctx.clearRect(0, 0, 200, 200)
    drawGuideLines()

    ctx.strokeStyle = "rgb(200,200,250)";
    //ctx.strokeStyle = "blue"
    ctx.lineWidth = 1;
    ctx.font = "italic 200px " + fontFamily
    ctx.textAlign = "center"
    ctx.textBaseline = "bottom"
    ctx.strokeText("a", 100, 198, 200)

    //ctx.imageSmoothingQuality = "high"
    //ctx.bezierCurveTo()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2
}

smoothButton.addEventListener("click", applySmoothing)

clearButton.addEventListener("click", clear)

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
var init = function (ctx) {

    ctx.translate(0.5, 0.5)
    //draw grid lines
    drawGuideLines()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2;

    pathBegin = false
    clear()
}

var drawGuideLines = function () {
    ctx.strokeStyle = "rgb(200,200,250)";
    ctx.lineWidth = 2
    
    ctx.closePath()
    ctx.moveTo(0, 50)
    ctx.lineTo(200, 50)
    ctx.moveTo(0, 150)
    ctx.lineTo(200, 150)
    ctx.stroke()
}

init(ctx)


drawingboard.addEventListener(("mousedown"), function (ev) {
    pathVec.push({ event: "mousedown" })
    path.addEvent("mousedown")
})

drawingboard.addEventListener(("mouseup"), function (ev) {
    pathVec.push({ event: "mouseup" })
    path.addEvent("mouseup")
})

drawingboard.addEventListener(('mousemove'), function (ev) {
    let x = ev.pageX - drawingboard.offsetLeft
    let y = ev.pageY - drawingboard.offsetTop



    if (ev.ctrlKey || ev.buttons == 1) {
        path.addPoint(x,y)
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        pathVec.push({ x, y })
        ctx.stroke();
        ctx.closePath();
    }
    prevX = x
    prevY = y


    //console.log({ x: ev.x, y: ev.y })
})



drawingboard.addEventListener(("mouseup"), (ev) => {
    //console.log(pathVec)
})