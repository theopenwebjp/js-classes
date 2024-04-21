import TrackManager from './TrackManager.js'
// import {  } from '@theopenweb/js-functions/src/polyfills.js'
import { polyfillGetUserMedia } from '@theopenweb/js-functions/src/media-stream-helpers.js'

/**
 * Stream functions.
 * Should change so is StreamHelper and is static.
 */
export default class StreamManager {
  constructor() {
    /**
     * Storing
     * @type {MediaStream[]}
     */
    this.streams = []

    // DEPRECATED mappings to functions moved to separate classes.
    this.TrackManager = TrackManager

    this.setup()
  }

  setup() {
    polyfillGetUserMedia()
  }

  /**
   * @param {MediaStream} stream
   */
  addStream(stream) {
    this.streams.push(stream)
  }

  /**
   * @param {MediaStream} stream
   */
  removeStream(stream) {
    const NOT_EXIST_INDEX = -1
    const index = this.getStreamIndex(stream)
    if (index !== NOT_EXIST_INDEX) {
      const SINGLE_ITEM = 1
      this.streams.splice(index, SINGLE_ITEM)
    }
  }

  /**
   * @param {MediaStream} stream
   * @return {number}
   */
  getStreamIndex(stream) {
    return this.streams.indexOf(stream)
  }
}
