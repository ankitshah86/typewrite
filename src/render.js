var drawingboard = document.getElementById("drawingboard")
var ctx = drawingboard.getContext("2d")

drawingboard.addEventListener(('mousemove'),function(ev) {
    var ctx = drawingboard.getContext("2d")
    console.log({x : ev.x,y : ev.y})
    ctx.fillStyle = "orange"
    ctx.fillStyle = 'rgb(255, 165, 35)';
    ctx.fillRect(ev.clientX - drawingboard.offsetLeft, ev.clientY - drawingboard.offsetTop, 5, 5)
})