/**
 * Class for perform actions for canvas drawing.
 * No UI should be handled here as is often extended.
 * Allows for drawing with any implementation desired(Canvas, SVG, etc.)
 * Returns implementation.
 * No events done here. Must execute functions to use.
 *
 * append: Appends to DOM.
 *
 * @param {Object} settings
 */
function Drawer (settings) {
  var drawer = {}
  drawer.args = {} // Arguments passed to drawer abstraction.
  drawer.format = 'canvas' // svg, canvas. Previous DOM was tested but removed.

  drawer.handleStartup = function (settings) {
    // Settings
    const ALLOWED_SETTINGS = [
      'format',
      'args'
    ]
    for (var key in settings) {
      if (ALLOWED_SETTINGS.indexOf(key) < 0) {
        continue
      }
      drawer[key] = settings[key]
    }

    // Abstract here
    if (drawer.format === 'svg') {
      drawer.manager = new drawer.SVGManager(drawer.args)
    } else if (drawer.format === 'canvas') {
      drawer.manager = new drawer.CanvasDrawer(drawer.args)
    } else {
      throw new Error('Invalid format')
    }

    drawer.manager._setup()

    // Allows for direct manager returning
    return drawer.manager
  }

  drawer.CommonDrawer = function (settings) {
    var manager = {}
    manager.element = null
    manager.fill = false
    manager.format = null

    /**
         * Resettable styles
         * Uses HTML Canvas format. Should be used and converted if used for other formats.
         * Also used for deciding getStyles keys.
         */
    manager.default_styles = {
      fill_style: '#000',
      font: '10px sans-serif',
      text_align: 'start',
      text_baseline: 'alphabetics',
      direction: 'inherit', // experimental(https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction)
      line_width: 1,
      line_cap: 'butt',
      line_join: 'miter',
      miter_limit: 10,
      line_dash_offset: 0,
      shadow_blur: 0,
      shadow_color: 'fully-transparent black',
      shadow_offset_x: 0,
      shadow_offset_y: 0,
      global_alpha: 1, // Opaque
      global_composite_operation: false,
      image_smoothing_enabled: false
    }

    /**
         * Implement if desired.
         * SVG/Canvas conversions useful for non-js exporting/importing.
         */
    manager.convertDrawer = function (data, toFormat) {
      // Same
      if (manager.format === toFormat) {
        return data
      }

      //
    }

    manager.append = function (parentElement) {
      // Parent defaults to body
      if (!parentElement) {
        parentElement = document.body
      }

      // Append if can
      if (manager.element && !manager.element.parentElement) {
        parentElement.appendChild(manager.element)
      }
    }

    manager._setup = function () {
      manager.resetStyles()
    }

    /**
         * Allows for string based action.
         * Allows for action with options.
         * Allows for one action style setting.
         */
    manager.executeAction = function (action, args, options) {
      console.log('executeAction:', action, args)

      // Defaults
      var styles = null

      // Options
      if (options) {
        if (options.styles) {
          styles = options.styles
        }
      }

      // Set styles
      if (styles) {
        manager.setStyles(styles)
      }

      // Action
      manager[action].apply(this, args)

      // Reset styles
      if (styles) {
        manager.resetStyles()
      }
    }

    manager.resetStyles = function () {
      manager.setStyles(manager.default_styles)
    }

    /**
         * ??Merge to other project function
         */
    manager.camelize = function (text) {
      var returnText = ''
      var del = '_'
      var words = text.split(del)
      var w

      for (var i = 0; i < words.length; i++) {
        w = words[i]
        if (i !== 0) {
          returnText += (w[0].toUpperCase() + w.substr(1))
        } else {
          returnText += w
        }
      }

      return returnText
    }

    /**
         * ??Merge to other project function
         */
    manager.unCamelize = function (text) {
      var returnText = ''
      var del = ''
      var char

      for (var i = 0; i < text.length; i++) {
        char = text[i]

        // Camel upper
        if (
          char === char.toUpperCase() &&
                    char !== char.toLowerCase()
        ) {
          returnText += (del + char)
        }

        // Lower
        else {
          returnText += char
        }
      }

      return returnText
    }

    /**
         * Returns canvas to initial state before being used in Drawer.
         */
    manager.initialize = function () {
      return manager._overrideRequired()
    }

    /**
         * Full image
         */
    manager.getSnapshot = function () {
      return manager._overrideRequired()
    }

    /**
         * Full image
         */
    manager.applySnapshot = function () {
      return manager._overrideRequired()
    }

    /**
         * Sets to canvas context if required
         */
    manager.setStyles = function (styles) {
      return manager._overrideRequired()
    }

    manager.getStyles = function () {
      return manager._overrideRequired()
    }

    manager.drawText = function (str, x, y, maxWidth) {
      return manager._overrideRequired()
    }

    manager.clearCanvas = function () {
      return manager._overrideRequired()
    }

    manager.drawImage = function (img, x, y, width, height) {
      return manager._overrideRequired()
    }

    manager.drawPixel = function (x, y) {
      return manager._overrideRequired()
    }

    manager.drawRectangle = function (x, y, width, height) {
      return manager._overrideRequired()
    }

    manager.drawCircle = function (x, y, radius) {
      return manager._overrideRequired()
    }

    manager.drawArc = function (x, y, radius, startAngle, endAngle, antiClockwise) {
      return manager._overrideRequired()
    }

    manager.drawLine = function (x1, x2, y1, y2) {
      return manager._overrideRequired()
    }

    manager.getPixelData = function (x, y) {
      return manager._overrideRequired()
    }

    manager._overrideRequired = function () {
      throw new Error('override required')
    }

    manager.convertByteToHex = function (byte) {
      var BASE = 16
      var HEX_BYTE_LENGTH = 2

      // Get hex
      var hex = (byte).toString(BASE)

      // Pad hex
      var pad = '0'
      while (hex.length < HEX_BYTE_LENGTH) {
        hex = pad + hex
      }

      return hex
    }

    manager.PixelData = function (options) {
      var pData = {}
      pData.x = null
      pData.y = null
      pData.color = null

      for (var key in options) {
        pData[key] = options[key]
      }

      return pData
    }

    return manager
  }

  /**
     * Drawer using canvas element.
     * @extends CommonDrawer
     */
  drawer.CanvasDrawer = function (settings) {
    var manager = new drawer.CommonDrawer(settings)
    manager.format = 'canvas'

    // Custom canvas
    if (settings && settings.canvas) {
      manager.canvas = settings.canvas
    } else {
      manager.canvas = document.createElement('canvas')
      manager.canvas.style.border = '1px solid black'
    }
    manager.canvas.setAttribute('data-drawer', true)

    manager.element = manager.canvas
    manager.context = manager.canvas.getContext('2d')
    manager.CIRCLE_ANGLE = 2 * Math.PI

    manager.getStyles = function () {
      var styles = {}
      for (var key in manager.default_styles) {
        let fKey = manager.camelize(key)
        if (manager.context[fKey] !== undefined) {
          styles[key] = manager.context[fKey]
        }
      }

      return styles
    }

    /**
         * Sets styles and applies to context.
         * Only effects passed styles.
         * style keys are underscore delimited.
         */
    manager.setStyles = function (styles) {
      console.log('setStyles', styles)

      var fKey
      for (var styleKey in styles) {
        fKey = manager.camelize(styleKey) // Camelize

        // Add
        if (manager.context[fKey] !== undefined) {
          manager.context[fKey] = styles[styleKey]
        } else {
          console.warn('invalid style key', fKey)
        }
      }
    }

    manager.initialize = function () {
      manager.clearCanvas()
      manager.canvas.removeAttribute('data-drawer')
    }

    manager.getSnapshot = function () {
      var nCanvas = document.createElement('canvas')
      nCanvas.width = manager.canvas.width
      nCanvas.height = manager.canvas.height
      manager.drawImage(manager.canvas, 0, 0, nCanvas.width, nCanvas.height)

      return manager
    }

    manager.applySnapshot = function (img) {
      var width = manager.canvas.width
      var height = manager.canvas.height

      manager.drawImage(img, 0, 0, width, height)

      return manager
    }

    manager.drawText = function (str, x, y, maxWidth) {
      manager.context.strokeText(str, x, y, maxWidth)

      return manager
    }

    manager.clearCanvas = function () {
      var width = manager.canvas.width
      var height = manager.canvas.height

      manager.context.clearRect(0, 0, width, height)

      return manager
    }

    /**
         * void ctx.drawImage(image, dx, dy);
         * void ctx.drawImage(image, dx, dy, dWidth, dHeight);
         * void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
         */
    manager.drawImage = function (img, x, y, width, height) {
      manager.context.drawImage(img, x, y, width, height)

      return manager
    }

    manager.drawPixel = function (x, y) {
      manager.context.rect(x, y, 1, 1)
      manager.context.stroke()

      return manager
    }

    manager.drawRectangle = function (x, y, width, height) {
      manager.context.rect(x, y, width, height)
      manager.context.stroke()

      return manager
    }

    manager.drawCircle = function (x, y, radius) {
      manager.drawArc(x, y, radius, 0, manager.CIRCLE_ANGLE)

      return manager
    }

    manager.drawArc = function (x, y, radius, startAngle, endAngle, antiClockwise) {
      if (!radius) {
        console.warn('drawArc should have radius', radius)
      }

      manager.context.beginPath()
      manager.context.arc(x, y, radius, startAngle, endAngle, antiClockwise)
      manager.context.stroke()

      return manager
    }

    manager.drawLine = function (x1, y1, x2, y2) {
      manager.context.beginPath()
      manager.context.moveTo(x1, y1)
      manager.context.lineTo(x2, y2)
      manager.context.stroke()
      manager.context.closePath()

      return manager
    }

    manager.getPixelData = function (x, y) {
      var width = 1
      var height = 1

      var d = manager.context.getImageData(x, y, width, height)

      // Each color
      var h = manager.convertByteToHex

      var hex = '#'
      hex += h(d[0])
      hex += h(d[1])
      hex += h(d[2])
      hex += h(d[3])

      var pixelData = new manager.PixelData({
        x: x,
        y: y,
        color: hex
      })

      return pixelData
    }

    return manager
  }

  /**
     * SVG handling.
     * IE 9+
     * Android 3+
     */
  drawer.SVGManager = function () {
    var manager = new drawer.CommonDrawer()
    manager.format = 'svg'

    return manager
  }

  return drawer.handleStartup(settings)
}

if (typeof window === 'object') {
  window.Drawer = Drawer
}
if (typeof module !== 'undefined') {
  module.exports = Drawer
}
