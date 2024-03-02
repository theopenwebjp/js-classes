export default class CanvasChangeChecker {
  /**
  * @param {HTMLCanvasElement} canvas
  */
  constructor(canvas) {
    this.canvas = canvas
    this.prevDataURL = canvas.toDataURL()
  }

  hasChanged() {
    const curDataURL = this.canvas.toDataURL()
    const prevDataURL = this.prevDataURL

    this.prevDataURL = prevDataURL

    return prevDataURL === curDataURL
  }
}
