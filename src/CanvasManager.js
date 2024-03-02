import CanvasHelper from './CanvasHelper.js'

export default class CanvasManager {
  /**
   * @param {HTMLCanvasElement} canvas 
   */
  constructor(canvas) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('No context')
    }
    this.context = ctx
  }

  getHelper() {
    return CanvasHelper
  }
}
