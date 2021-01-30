var drawingboard = document.getElementById("drawingboard")
drawingboard.width = 300
drawingboard.height = 300
var ctx = drawingboard.getContext("2d")
var pathBegin
var prevX, prevY

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
var init = function (ctx) {

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