import CanvasChangeChecker from './CanvasChangeChecker.js'
import CanvasRenderer from './CanvasRenderer.js'

/**
 * Canvas helper class, that focuses on class related helpers.
 */
export default class CanvasHelper {
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
}
CanvasHelper.CanvasRenderer = CanvasRenderer
