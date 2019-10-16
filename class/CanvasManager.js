/**
 * Collection of static canvas functions.
 * Should change to CanvasHelper??
 */
function CanvasManager () {
  var cManager = {}

  /**
   * @param {HTMLCanvasElement} canvas
   * @return {replacements}
   */
  cManager.getContext = function (canvas) {
    // SPEC: Caching allows for higher speed.

    // Set cache
    if (!canvas._context) {
      canvas._context = canvas.getContext('2d')
    }

    return canvas._context
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {number} fps
   * @return {MediaStream|boolean}
   */
  cManager.canvasToStream = function (canvas, fps) {
    if (canvas.captureStream) {
      if (fps) {
        return canvas.captureStream(fps)
      } else {
        return canvas.captureStream()
      }
    } else {
      return false
    }
  }

  /**
   * Abstract canvas to image function
   * @param {HTMLCanvasElement} canvas
   * @param {object} options
   * @return {*}
   */
  cManager.canvasToImage = function (canvas, options) {
    var returnData

    // Defaults
    var format = 'png'
    var serialization = 'image' // data_url
    var onLoad = null
    var conversionOptions = null

    // Options
    if (!options) {
      options = {}
    }
    for (var key in options) {
      if (key === 'format') {
        format = options[key]
      }
      if (key === 'serialization') {
        serialization = options[key]
      }
      if (key === 'on_load') {
        onLoad = options[key]
      }
      if (key === 'conversion_options') {
        conversionOptions = options[key]
      }
    }

    // Data URL
    if (serialization === 'data_url') {
      returnData = cManager.canvasToDataURL(canvas, format, conversionOptions)
      // Onload finished
      if (onLoad) {
        onLoad(returnData)
      }
    } else if (serialization === 'image') {
      returnData = cManager.canvasToImageFile(canvas, format, conversionOptions, onLoad)
    }

    return returnData
  }

  // Imaging
  /**
   * @param {*} drawable
   * @return {HTMLImageElement}
   */
  cManager.drawableToImage = function (drawable) {
    var dataURL = cManager.drawableToDataURL(drawable)
    var image = new window.Image()
    image.src = dataURL

    return image
  }

  /**
   * @param {string} src
   * @param {function} onLoad
   * @param {string} format
   * @param {object} conversionOptions
   */
  cManager.ImageSrcToDataURL = function (src, onLoad, format, conversionOptions) {
    var image = new window.Image()
    image.src = src
    image.onload = function () {
      var drawable = image
      var dataUrl = cManager.drawableToDataURL(drawable, format, conversionOptions)
      onLoad(dataUrl)
    }
  }

  /**
   * @param {*} drawal
   * @param {undefined|HTMLCanvasElement} canvas
   * @return {HTMLCanvasElement}
   */
  cManager.drawableToCanvas = function (drawable, canvas) {
    canvas = canvas || document.createElement('canvas')
    canvas.width = drawable.width || drawable.videoWidth
    canvas.height = drawable.height || drawable.videoHeight
    canvas.getContext('2d').drawImage(drawable, 0, 0)

    return canvas
  }

  /**
   * @param {*} drawable
   * @param {string} format
   * @param {object} conversionOptions
   * @return {string}
   */
  cManager.drawableToDataURL = function (drawable, format, conversionOptions) {
    var canvas = cManager.drawableToCanvas(drawable)
    return cManager.canvasToDataURL(canvas, format, conversionOptions)
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {string} format
   * @param {object} conversionOptions
   * @return {string}
   */
  cManager.canvasToDataURL = function (canvas, format, conversionOptions) {
    var dataURL = canvas.toDataURL(format, conversionOptions)
    return dataURL
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {string} format
   * @param {object} conversionOptions
   * @param {function }onLoad
   * @return {HTMLImageElement}
   */
  cManager.canvasToImageFile = function (canvas, format, conversionOptions, onLoad) {
    var img = new window.Image()
    var dataURL = cManager.canvasToDataURL(canvas, format, conversionOptions)

    img.onload = function () {
      console.log('worked')
      if (onLoad) {
        onLoad(img)
      }
    }
    img.onerror = function (err) {
      console.error('canvasToImageFile error', err)
    }
    img.src = dataURL

    return img
  }

  /**
   * Watches for canvas stop, usual for WebRTC connection problems in older browsers.
   * Stops on first stop.
   * @param {HTMLCanvasElement} canvas
   * @param {function} onStop
   * @param {object}
   */
  cManager.watchForCanvasStop = function (canvas, onStop, options) {
    var ms = options.interval || 2000

    var ctx = canvas.getContext('2d')

    var getImageData = function () {
      return ctx.getImageData(0, 0, canvas.width, canvas.height)
    }
    var prevImgData = getImageData()

    var interval = window.setInterval(function () {
      var imgData = getImageData()
      if (cManager.isImageDataSame(imgData, prevImgData)) {
        window.clearInterval(interval)
        onStop()
      }
      prevImgData = imgData
    }, ms)
  }

  /**
   * Returns boolean for quick imageData checking.
   * @param {ImageData} imgData1
   * @param {ImageData} imgData2
   * @return {boolean}
   */
  cManager.isImageDataSame = function (imgData1, imgData2) {
    if (imgData1.data.length !== imgData2.data.length) {
      return false
    }

    let val1, val2
    for (let i = 0; i < imgData1.data.length; i++) {
      val1 = imgData1.data[i]
      val2 = imgData2.data[i]
      if (val1 !== val2) {
        return false
      }
    }

    return true
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {object} options
   * @return {boolean}
   */
  cManager.canvasHasColorData = function (canvas, options) {
    var ctx = canvas.getContext('2d')
    var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    var step = 4

    if (!options) {
      options = {
        r: true,
        g: true,
        b: true,
        a: false
      }
    }

    for (var i = 0; i < data.length; i += step) {
      if (options.r && data[i + 0]) {
        return true
      }
      if (options.g && data[i + 1]) {
        return true
      }
      if (options.b && data[i + 2]) {
        return true
      }
      if (options.a && data[i + 3]) {
        return true
      }
    }

    // FAILED
    return false
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {DOMRect} boundingRect
   * @return {HTMLCanvasElement}
   */
  cManager.fitCanvasToBoundingRect = function (canvas, boundingRect) {
    var canvas2 = document.createElement('canvas')
    canvas2.width = boundingRect.right - boundingRect.left
    canvas2.height = boundingRect.bottom - boundingRect.top
    canvas2.getContext('2d').drawImage(canvas, boundingRect.left, boundingRect.top, canvas2.width, canvas2.height, 0, 0, canvas2.width, canvas2.height)

    canvas.width = canvas2.width
    canvas.height = canvas2.height
    canvas.getContext('2d').drawImage(canvas2, 0, 0)

    return canvas
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @return {DOMRect}
   */
  cManager.getContextBoundingRect = function (ctx) {
    var boundingRect = cManager.BoundingRect()
    var canvas = ctx.canvas
    var cWidth = canvas.width
    var cHeight = canvas.height
    var data = ctx.getImageData(0, 0, cWidth, cHeight).data

    var x, y
    var step = 4
    var index

    for (var i = 0; i < data.length; i += step) {
      if (data[i + 0] || data[i + 1] || data[i + 2]) { // Has a color value
        index = i / step
        x = index % cHeight
        y = Math.floor(index / cWidth)

        if (boundingRect.top === null || y < boundingRect.top) {
          boundingRect.top = y
        }
        if (boundingRect.bottom === null || y > boundingRect.bottom) {
          boundingRect.bottom = y
        }
        if (boundingRect.left === null || x < boundingRect.left) {
          boundingRect.left = x
        }
        if (boundingRect.right === null || x > boundingRect.right) {
          boundingRect.right = x
        }
      }
    }

    return boundingRect
  }

  /**
   * @return {DOMRect}
   */
  cManager.BoundingRect = function () {
    return {
      top: null,
      bottom: null,
      left: null,
      right: null
    }
  }

  /**
   * @param {object} settings
   * @return {object}
   */
  cManager.CanvasRenderer = function (settings) {
    /*
        SPEC:

        Canvas video rendering
        */

    var cRenderer = {}
    cRenderer.renderable = null
    cRenderer.canvas = null
    cRenderer.context = null
    cRenderer.rate = 1000 / 20
    cRenderer.interval = null
    cRenderer.muted = false // Allows for keeping rate

    /**
     * @param {object} settings
     */
    cRenderer.setup = function (settings) {
      for (var key in settings) {
        cRenderer[key] = settings[key]
      }
    }

    /**
     * @return {number}
     */
    cRenderer.start = function () {
      if (!cRenderer.interval) {
        cRenderer.interval = window.setInterval(cRenderer.render, cRenderer.rate)
      }

      return cRenderer.interval
    }

    cRenderer.mute = function () {
      cRenderer.mute = true
    }

    cRenderer.unmute = function () {
      cRenderer.mute = false
    }

    cRenderer.stop = function () {
      window.clearInterval(cRenderer.interval)
      cRenderer.interval = null
    }

    /**
     * @return {undefined|false}
     */
    cRenderer.render = function () {
      if (cRenderer.muted) {
        return false
      }

      cRenderer.renderable()
    }

    cRenderer.setup(settings)

    return cRenderer
  }

  /**
   * @param {MediaStream} stream
   * @param {number} updateRate
   * @return {object}
   */
  cManager.streamToCanvasRenderer = function (stream, updateRate) {
    // Abstract here

    var settings = {
      renderable: stream,
      rate: updateRate
    }

    var cRender = new cManager.CanvasRenderer(settings)
    return cRender
  }

  return cManager
}

if (typeof window === 'object') {
  window.CanvasManager = CanvasManager
}
if (typeof module !== 'undefined') {
  module.exports = CanvasManager
}
