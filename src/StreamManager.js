import StreamHelper from './StreamHelper.js'
import TrackHelper from './TrackHelper.js'
import TrackManager from './TrackManager.js'

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
    this.getUserMedia = StreamHelper.getUserMedia
    this.handleCameraStream = StreamHelper.handleCameraStream
    this.stopCameraStream = StreamHelper.stopCameraStream
    this.stopCameraStreamObject = StreamHelper.stopCameraStreamObject
    this.getStreamTracks = StreamHelper.getStreamTracks
    this.getTracksByStatus = StreamHelper.getTracksByStatus
    this.getTracks = StreamHelper.getTracks
    this.getTracksByType = StreamHelper.getTracksByType
    this.getTracksByAttribute = StreamHelper.getTracksByAttribute
    this.StreamError = StreamHelper.StreamError
    this.StreamObject = StreamHelper.StreamObject
    this.polyfillGetUserMedia = StreamHelper.polyfillGetUserMedia
    this.webcamToElement = StreamHelper.webcamToElement
    this.getUserMediaWithWorkingConstraints = StreamHelper.getUserMediaWithWorkingConstraints
    this.startRecordingStream = StreamHelper.startRecordingStream
    this.stopRecordingStream = StreamHelper.stopRecordingStream
    this.createStreamVideoElement = StreamHelper.createStreamVideoElement
    this.streamHasVideo = StreamHelper.streamHasVideo
    this.streamHasAudio = StreamHelper.streamHasAudio
    this.trackHasData = TrackHelper.trackHasData

    this.StreamHelper = StreamHelper

    this.setup()
  }

  setup() {
    this.polyfillGetUserMedia()
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
