/**
 * @type {import('./types/ts').CanvasRenderOptions}
 */
 const defaultCanvasRenderer = {
  renderable: null,
  canvas: null,
  rate: 1000 / 20,
  muted: false // Allows for keeping rate
}

/**
 * 
 * @param {Partial<import('./types/ts').CanvasRenderOptions>} [options]
 * @return {import('./types/ts').CanvasRenderOptions} 
 */
function CanvasRenderOptions(options = {}) {
  return Object.assign({}, defaultCanvasRenderer, options)
}

/**
 * Renders canvas by drawing at interval.
 * @deprecated Can use canvas.captureStream instead. If not available, can use polyfill.
 * 
 * Extra features:
 * ※ "mute" and "unmute".
 * ※ updateRenderable for updating source input at any time.
 */
export default class CanvasRenderer {
  /**
     * @param {Partial<import('./types/ts').CanvasRenderOptions>} settings
     */
  constructor(settings = {}) {
    /**
     * @type {import('./types/ts').CanvasRenderOptions}
     */
    this.settings = CanvasRenderOptions(settings)
    const canvas = this.settings.canvas || this.newCanvas()
    this.state = {
      /**
       * @type {number|null}
       */
      interval: null,
      /**
       * @type {HTMLCanvasElement|null}
       */
      canvas,
      /**
       * @type {CanvasRenderingContext2D|null}
       */
       context: canvas.getContext('2d')
    }
  }

  newCanvas() {
    return document.createElement('canvas')
  }

  /**
     * @return {number}
     */
  start() {
    if (this.state.interval === null) {
      this.state.interval = window.setInterval(() => this.render(), this.settings.rate)
    }

    return this.state.interval
  }

  mute() {
    this.settings.muted = true
  }

  unmute() {
    this.settings.muted = false
  }

  stop() {
    if (this.state.interval !== null) {
      window.clearInterval(this.state.interval)
      this.state.interval = null
    }
  }

  /**
   * @param {import("./types/ts").Renderable} renderable 
   */
  updateRenderable(renderable) {
    this.settings.renderable = renderable
  }

  /**
   * @return {undefined|false}
   */
  render() {
    if (this.settings.muted) {
      return false
    }

    const { canvas, context } = this.state
    if (!context || !canvas) {
      return false
    }

    const { renderable } = this.settings
    if (renderable) {
      context.drawImage(renderable, 0, 0, canvas.width, canvas.height)
    }
  }
}
