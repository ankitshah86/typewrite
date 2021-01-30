var drawingboard = document.getElementById("drawingboard")
drawingboard.width = 200
drawingboard.height = 200
var pathBegin
var prevX, prevY

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @returns {CanvasRenderingContext2D}
 */
var getCtx2d = function(canvas) {
    return canvas.getContext("2d")
}

var ctx = getCtx2d(drawingboard)
/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
var init = function (ctx) {

    //draw grid lines
    ctx.strokeStyle = "rgb(200,200,250)";
    ctx.lineWidth = 2
    ctx.moveTo(0,50)
    ctx.lineTo(200,50)
    ctx.moveTo(0,150)
    ctx.lineTo(200,150)
    ctx.stroke()

    ctx.fillStyle = "orange"
    ctx.fillStyle = 'rgb(255, 165, 35)';
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 3;

    pathBegin = false
}

init(ctx)

drawingboard.addEventListener(('mousemove'), function (ev) {
    let x = ev.pageX - drawingboard.offsetLeft
    let y = ev.pageY - drawingboard.offsetTop

    if (ev.ctrlKey || ev.buttons  == 1) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
    }
    prevX = x
    prevY = y


    //console.log({ x: ev.x, y: ev.y })
})