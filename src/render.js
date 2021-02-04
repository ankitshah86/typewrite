var drawingboard = document.getElementById("drawingboard")
drawingboard.width = 200
drawingboard.height = 200
var pathBegin
var prevX, prevY

var pathVec = []
var fontFamily = "Times New Roman"

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @returns {CanvasRenderingContext2D}
 */
var getCtx2d = function (canvas) {
    return canvas.getContext("2d")
}

/**
 * @returns {HTMLSelectElement}
 */
var getFontSelector = function () {
    return document.getElementById("fontSelector")
}
var fontSelector = getFontSelector()

fontSelector.onchange = function () {
    let idx = this[this.selectedIndex].text
    fontFamily = idx
    clear()
}
/**
 * 
 * @returns {HTMLButtonElement} 
 */
var getClearButton = function () {
    return document.getElementById("clear")
}

var clear = function () {
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
    ctx.lineWidth = 3
}


var ctx = getCtx2d(drawingboard)
var clearButton = getClearButton()

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
    ctx.lineWidth = 3;

    pathBegin = false
    clear()
}

var drawGuideLines = function () {
    ctx.strokeStyle = "rgb(200,200,250)";
    ctx.lineWidth = 2
    ctx.moveTo(0, 50)
    ctx.lineTo(200, 50)
    ctx.moveTo(0, 150)
    ctx.lineTo(200, 150)
    ctx.stroke()
}

init(ctx)


drawingboard.addEventListener(("mousedown"),function(ev){
    pathVec.push({event : "mousedown"})
})

drawingboard.addEventListener(("mouseup"), function(ev){
    pathVec.push({event:"mouseup"})
})

drawingboard.addEventListener(('mousemove'), function (ev) {
    let x = ev.pageX - drawingboard.offsetLeft
    let y = ev.pageY - drawingboard.offsetTop



    
    if (ev.ctrlKey || ev.buttons == 1) {
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