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

exports.getSmoothButton = getSmoothButton 
exports.getClearButton = getClearButton
exports.getFontSelector = getFontSelector
exports.getCtx2d = getCtx2d
exports.getCanvas = getCanvas