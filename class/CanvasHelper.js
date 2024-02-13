import CanvasChangeChecker from './CanvasChangeChecker.js'
import CanvasRenderer from './CanvasRenderer.js'
import { failOnFalsy } from './Utility.js'

/**
 * @typedef {object} SimpleDOMRect
 * @property {number} top
 * @property {number} bottom
 * @property {number} left
 * @property {number} right
 */

/**
 * @typedef {HTMLCanvasElement & {_context?: CanvasRenderingContext2D|null|undefined}} CachedHTMLCanvasElement
 */

/**
 * @typedef {Object} CanvasImageOptions
 * @property {string} format
 * @property {'data_url'|'image'} serialization
 * @property {function(...any):any} on_load
 * @property {number|null} conversion_options
 */

/**
 * @typedef {Object} RGBASelection
 * @property {boolean} r
 * @property {boolean} g
 * @property {boolean} b
 * @property {boolean} a
 */

/**
 * @typedef {[number, number, number, number]} RGBA
 */

/**
 * @typedef {{ rgba: RGBA, count: number, index: number }} RGBACount
 */

export default class CanvasHelper {  
  /**
  * @param {HTMLCanvasElement} canvas
  * @param {() => void} onChange
  * @param {number} intervalMs
  */
  static watchCanvas(canvas, onChange, intervalMs = 1000) {
    let prevDataURL = ''
    const interval = window.setInterval(() => {
      const curDataURL = canvas.toDataURL()
      if (prevDataURL && curDataURL !== prevDataURL) {
        onChange()
      }
      prevDataURL = curDataURL
    }, intervalMs)

    return () => window.clearInterval(interval)
  }

  /**
  * @param {HTMLCanvasElement} canvas
  * @param {() => void} onChange
  * @param {string} event
  */
   static checkCanvasChangeOnEvent(canvas, onChange, event = 'mouseup') {
    const canvasChangeChecker = new CanvasChangeChecker(canvas)
    const handle = () => {
      if (canvasChangeChecker.hasChanged()) {
        onChange()
      }
    }
    canvas.addEventListener(event, handle)
    return () => canvas.removeEventListener(event, handle)
  }

  /**
   * @param {Partial<RGBASelection>} options
   */
   static RGBASelection (options) {
    return Object.assign({
      r: true,
      g: true,
      b: true,
      a: false
    }, options)
  }

  /**
   * Caching allows for higher speed.
     * @param {CachedHTMLCanvasElement} canvas
     * @return {CanvasRenderingContext2D}
     */
   static getContext (canvas) {
    // Set cache
    if (!canvas._context) {
      canvas._context = canvas.getContext('2d')
    }
    if (!canvas._context) {
      throw new Error('Unexpectedly did not assign context')
    }

    return canvas._context
  }

  /**
     * @param {HTMLCanvasElement} canvas
     * @param {number} fps
     * @return {MediaStream|boolean}
     */
   static canvasToStream (canvas, fps) {
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
   * @param {Partial<CanvasImageOptions>} options
   */
   static canvasToImage (canvas, options) {
    /**
    * @typedef {string|HTMLImageElement} CanvasImageSourceData
    */
    // Defaults
    let format = 'png'
    let serialization = 'image' // data_url
    /**
     * @type {null|((data: CanvasImageSourceData) => void)}
     */
    let onLoad = null
    /***
     * @type {number|undefined|null}
     */
    let conversionOptions = null

    // Options
    if (!options) {
      options = {}
    }
    for (let key in options) {
      const value = /** @type {any} */(options)[key]

      if (key === 'format' && value) {
        format = value
      }
      if (key === 'serialization') {
        serialization = value
      }
      if (key === 'on_load') {
        onLoad = value
      }
      if (key === 'conversion_options') {
        conversionOptions = value
      }
    }

    // Data URL
    if (serialization === 'data_url') {
      const returnData = CanvasHelper.canvasToDataURL(canvas, format, conversionOptions || undefined)
      // Onload finished
      if (onLoad) {
        onLoad(returnData)
      }
      return returnData
    } else if (serialization === 'image') {
      return CanvasHelper.canvasToImageFile(canvas, format, conversionOptions || undefined, onLoad || undefined)
    } else {
      throw new Error('Bad serialization')
    }
  }

  // Imaging
  /**
     * @param {*} drawable
     * @return {HTMLImageElement}
     */
   static drawableToImage (drawable) {
    const dataURL = CanvasHelper.drawableToDataURL(drawable)
    const image = new window.Image()
    image.src = dataURL

    return image
  }

  /**
     * @param {string} src
     * @param {(dataUrl: string) => void} onLoad
     * @param {string} format
     * @param {number|undefined} conversionOptions
     */
   static ImageSrcToDataURL (src, onLoad, format, conversionOptions) {
    const image = new window.Image()
    image.src = src
    image.onload = function () {
      const drawable = image
      const dataUrl = CanvasHelper.drawableToDataURL(drawable, format, conversionOptions)
      onLoad(dataUrl)
    }
  }

  /**
     * @param {CanvasImageSource} drawable
     * @param {undefined|HTMLCanvasElement} startCanvas
     * @return {HTMLCanvasElement}
     */
   static drawableToCanvas (drawable, startCanvas = undefined) {
    const canvas = startCanvas || document.createElement('canvas')
    // @ts-ignore
    canvas.width = drawable.width || drawable.videoWidth || 0
    // @ts-ignore
    canvas.height = drawable.height || drawable.videoHeight || 0
    failOnFalsy(CanvasHelper.getContext(canvas)).drawImage(drawable, 0, 0)

    return canvas
  }

  /**
     * @param {CanvasImageSource} drawable
     * @param {string|undefined} format
     * @param {number|undefined} conversionOptions
     * @return {string}
     */
   static drawableToDataURL (drawable, format = undefined, conversionOptions = undefined) {
    const canvas = CanvasHelper.drawableToCanvas(drawable)
    return CanvasHelper.canvasToDataURL(canvas, format, conversionOptions)
  }

  /**
     * @param {HTMLCanvasElement} canvas
     * @param {string|undefined} format
     * @param {number|undefined} encoderOptions https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
     * @return {string}
     */
   static canvasToDataURL (canvas, format = undefined, encoderOptions = undefined) {
    const dataURL = canvas.toDataURL(format, encoderOptions)
    return dataURL
  }

  /**
     * @param {HTMLCanvasElement} canvas
     * @param {string} format
     * @param {number|undefined} conversionOptions
     * @param {(image: HTMLImageElement) => void} [onLoad]
     * @return {HTMLImageElement}
     */
   static canvasToImageFile (canvas, format, conversionOptions, onLoad) {
    const img = new window.Image()
    const dataURL = CanvasHelper.canvasToDataURL(canvas, format, conversionOptions)

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
     * @param {() => void} onStop
     * @param {{interval: number}} options
     */
  static watchForCanvasStop (canvas, onStop, options) {
    const ms = options.interval || 2000

    const ctx = failOnFalsy(canvas.getContext('2d'))

    const getImageData = function () {
      return ctx.getImageData(0, 0, canvas.width, canvas.height)
    }
    let prevImgData = getImageData()

    const interval = window.setInterval(function () {
      const imgData = getImageData()
      if (CanvasHelper.isImageDataSame(imgData, prevImgData)) {
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
  static isImageDataSame (imgData1, imgData2) {
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
     * @param {Partial<RGBASelection>} rgbaOptions
     * @return {boolean}
     */
  static canvasHasColorData (canvas, rgbaOptions = {}) {
    const options = CanvasHelper.RGBASelection(rgbaOptions)
    const ctx = failOnFalsy(canvas.getContext('2d'))
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    const step = 4

    for (let i = 0; i < data.length; i += step) {
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
     * @param {SimpleDOMRect} boundingRect
     * @return {HTMLCanvasElement}
     */
  static fitCanvasToBoundingRect (canvas, boundingRect) {
    const canvas2 = document.createElement('canvas')
    canvas2.width = boundingRect.right - boundingRect.left
    canvas2.height = boundingRect.bottom - boundingRect.top
    failOnFalsy(canvas2.getContext('2d')).drawImage(canvas, boundingRect.left, boundingRect.top, canvas2.width, canvas2.height, 0, 0, canvas2.width, canvas2.height)

    canvas.width = canvas2.width
    canvas.height = canvas2.height
    failOnFalsy(canvas.getContext('2d')).drawImage(canvas2, 0, 0)

    return canvas
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  static getContextBoundingRect (ctx) {
    const boundingRect = CanvasHelper.BoundingRect()
    const canvas = ctx.canvas
    const cWidth = canvas.width
    const cHeight = canvas.height
    const data = ctx.getImageData(0, 0, cWidth, cHeight).data

    const step = 4

    for (let i = 0; i < data.length; i += step) {
      if (data[i + 0] || data[i + 1] || data[i + 2]) { // Has a color value
        const index = i / step
        const x = index % cHeight
        const y = Math.floor(index / cWidth)

        if (boundingRect.top === 0 || y < boundingRect.top) {
          boundingRect.top = y
        }
        if (boundingRect.bottom === 0 || y > boundingRect.bottom) {
          boundingRect.bottom = y
        }
        if (boundingRect.left === 0 || x < boundingRect.left) {
          boundingRect.left = x
        }
        if (boundingRect.right === 0 || x > boundingRect.right) {
          boundingRect.right = x
        }
      }
    }

    return boundingRect
  }

  /**
   * @return {SimpleDOMRect}
   */
  static BoundingRect () {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }

  /**
   * @param {MediaStream} stream
   * @param {number} updateRate
   */
  static streamToCanvasRenderer (stream, updateRate) {
    // Abstract here

    const video = document.createElement('video')
    video.srcObject = stream
    video.autoplay = true

    const settings = {
      renderable: video,
      rate: updateRate
    }

    const cRender = new CanvasHelper.CanvasRenderer(settings)
    return cRender
  }

  /**
   * @param {ImageData} imgData 
   * @param {(rgba: RGBA, index: number) => void} onPixel
   */
  static loopImageData(imgData, onPixel) {
    for (let i = 0; i < imgData.height * imgData.height; i += 4) {
      /** @type {RGBA} */
      // @ts-ignore
      const rgba = [
        ...imgData.data.slice(i, 4)
      ]
      onPixel(rgba, i)
    }
  }

  /**
   * @param {RGBA} rgba1
   * @param {RGBA} rgba2 
   */
  static diffRGBA(rgba1, rgba2) {
    const [r1, g1, b1, a1] = rgba1
    const [r2, g2, b2, a2] = rgba2

    return (
      Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2) + Math.abs(a1 - a2)
    )
  }

  /**
  * @param {ImageData} imgData
  * @param {number} [threshold]
  */
  static getMainColor(imgData, threshold = 0) {
    /** @type {RGBACount[]} */
    const colors = []
    CanvasHelper.loopImageData(imgData, (rgba, index) => {
      let exists = false
      colors.forEach(color => {
        const rgba2 = color.rgba
        const rgbaDiff = CanvasHelper.diffRGBA(rgba, rgba2)
        if (rgbaDiff === 0) {
          exists = true
        }
        if (rgbaDiff <= threshold) {
          color.count += 1
        }
      })
      if (!exists) {
        colors.push({
          rgba,
          count: 1,
          index,
        })
      }
    })
    return CanvasHelper.getMaxRGBACount(colors)
  }

  /**
   * @param {RGBACount[]} colors 
   */
  static getMaxRGBACount(colors) {
    /**
     * @type {RGBACount | null}
     */
    let max = null
    colors.forEach(color => {
      if (!max || color.count > max.count) {
        max = color
      }
    })
    // @ts-ignore
    return max ? max.rgba : null
  }

  /**
  * Similar to getMainColor, but checks from edges.
  * @param {ImageData} imgData
  */
  /*
  static getBackgroundColor(imgData) {
    // TODO
  }
  */
}
CanvasHelper.CanvasRenderer = CanvasRenderer
