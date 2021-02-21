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

/**
 * 
 * @returns {HTMLButtonElement} 
 */
var getClearButton = function () {
    return document.getElementById("clear")
}


/**
 * 
 * @returns {HTMLButtonElement} 
 */
var getSmoothButton = function () {
    return document.getElementById("smoothing")
}

/**
 * 
 * @returns {HTMLCanvasElement}
 */
var getCanvas = function() {
    return document.getElementById("drawingboard")
}


var drawingboard = getCanvas()
var ctx = getCtx2d(drawingboard)
var clearButton = getClearButton()
var smoothButton = getSmoothButton()
var fontSelector = getFontSelector()

exports.drawingboard = drawingboard
exports.ctx = ctx
exports.clearButton = clearButton
exports.smoothButton = smoothButton
exports.fontSelector = fontSelector