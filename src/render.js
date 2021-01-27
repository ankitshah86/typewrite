var drawingboard = document.getElementById("drawingboard")
var contxt = drawingboard.getContext("2d")

drawingboard.addEventListener(('mousemove'),function(ev) {
    console.log({x : ev.x,y : ev.y})
})