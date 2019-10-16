const polyfill = {
  ensure: function (object, key, handle) {
    if (object[key] === undefined) {
      // DEPRECATED: object.__proto__[key] = handle
      Object.getPrototypeOf(object)[key] = handle
    }
  },
  getAudioTracks: function () {
    const tracks = this.getTracks()
    const audioTracks = []
    tracks.forEach(track => {
      if (track.kind === 'audio') {
        audioTracks.push(track)
      }
    })

    return audioTracks
  },
  getVideoTracks: function () {
    const tracks = this.getTracks()
    const videoTracks = []
    tracks.forEach(track => {
      if (track.kind === 'video') {
        videoTracks.push(track)
      }
    })

    return videoTracks
  }
}

class StreamHelper {
  /**
   * @param {MediaStream} stream
   * @param {function} dataHandle
   * @param {object} options
   * @return {MediaRecorder}
   */
  static startRecordingStream (stream, dataHandle, options) {
    // Should be abstract

    var recorder = window.MediaRecorder(stream, options)
    recorder.ondataavailable = dataHandle
    recorder.start()
    return recorder
  }

  /**
   * @param {MediaRecorder} recorder
   */
  static stopRecordingStream (recorder) {
    recorder.stop()
  }

  /**
   * Create video element from stream
   * @param {MediaStream} stream
   * @return {HTMLVideo}
   */
  static createStreamVideoElement (stream) {
    const video = document.createElement('video')
    video.autoplay = true
    video.srcObject = stream

    return video
  }

  /**
   * Checks if video exists
   * @param {MediaStream} stream
   * @return {Boolean}
   */
  static streamHasVideo (stream) {
    polyfill.ensure(stream, 'getVideoTracks', polyfill.getVideoTracks)

    const FIRST_INDEX = 0
    const track = stream.getVideoTracks()[FIRST_INDEX]
    return StreamHelper.trackHasData(track)
  }

  /**
   * Checks if audio exists
   * @param {MediaStream} stream
   * @return {Boolean}
   */
  static streamHasAudio (stream) {
    polyfill.ensure(stream, 'getAudioTracks', polyfill.getAudioTracks)

    const FIRST_INDEX = 0
    const track = stream.getAudioTracks()[FIRST_INDEX]
    return StreamHelper.trackHasData(track)
  }

  /**
  * Simple handling of getUserMedia
  * Be careful of argument order change: navigator.getUserMedia(constraints, onSuccess, onError)
  * Order changed due to constraints being optional.
  * @deprecated This was used as during early adoption of this feature, but now it is standardized should use promises instead.
  * @param {Function} callback
  * @param {Object} constraints
   */
  static getUserMedia (callback, constraints) {
    

    if (!constraints) {
      constraints = {
        video: true,
        audio: true
      }
    }

    var onSuccess = (stream) => {
      callback(stream)
    }

    var onError = (err) => {
      console.error(err)

      var error = StreamHelper.StreamError()
      error.error = err

      callback(error)
    }

    navigator.getUserMedia(constraints, onSuccess, onError)
  }

  /**
   * @param {MediaStream} stream
   * @param {object} object
   * @return {false|object}
   */
  static handleCameraStream (stream, object) {
    if (!stream || stream.isError) {
      return false
    }

    var o = object
    if (!o) {
      o = StreamHelper.StreamObject()
    }

    // Set
    o.stream = stream

    // URL
    o.object_url = window.URL.createObjectURL(o.stream)

    // Video
    o.video = document.createElement('video')
    o.video.autoplay = true
    o.video.src = o.object_url

    return o
  }

  /**
   * @param {MediaStream} stream
   */
  static stopCameraStream (stream) {
    // Stop tracks
    var tracks = StreamHelper.getStreamTracks(stream)
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].stop) {
        tracks[i].stop()
      }
    }
  }

  /**
  * Stops stream and related data
  * @param {Object} o
  * @param {Boolean} removeFromDom
  * @return {void}
   */
  static stopCameraStreamObject (o, removeFromDom = false) {
    // Stop Stream
    StreamHelper.stopCameraStream(o.stream)

    // Destroy video
    if (o.video) {
      o.video.src = ''
      if (removeFromDom && o.video.parentElement) {
        o.video.parentElement.removeChild(o.video)
      }
    }

    // Revoke URL
    if (o.object_url) {
      window.URL.revokeObjectURL(o.object_url)
    }

    // Nullify
    o.stream = null
    o.video = null
    o.object_url = null
  }

  /**
   * @param {MediaStream} stream
   * @return {array}
   */
  static getStreamTracks (stream) {
    if (stream.getTracks) {
      return stream.getTracks()
    } else {
      return []
    }
  }

  /**
   * @param {MediaStream} stream
   * @param {string} status
   * @return {array}
   */
  static getTracksByStatus (stream, status) {
    /*
      SPEC:

      Enabled/Disabled:
      enabled = true
      muted = false
      */

    var tracks = StreamHelper.getTracks(stream)
    var fTracks = []
    var track

    for (var i = 0; i < tracks.length; i++) {
      track = tracks[i]

      // Enabled
      if (track.enabled !== undefined && track.enabled !== status) {
        continue
      }

      // ReadyState
      if (
        track.readyState !== undefined &&
        (
          (track.readyState === 'live' && !status) ||
          (track.readyState === 'ended' && status)
        )
      ) {
        continue
      }

      // Muted
      if (track.muted !== undefined && track.muted !== !status) {
        continue
      }
    }

    return fTracks
  }

  /**
   * @param {MediaStream} stream
   * @return {array}
   */
  static getTracks (stream) {
    return stream.getTracks()
  }

  /**
   * @param {MediaStream} stream
   * @param {string} type
   * @return {array}
   */
  static getTracksByType (stream, type) {
    return StreamHelper.getTracksByAttribute(stream, 'kind', type)
  }

  /**
   * @param {MediaStream} stream
   * @param {string} attr
   * @param {*} value
   * @return {array}
   */
  static getTracksByAttribute (stream, attr, value) {
    var tracks = StreamHelper.getTracks(stream)
    var fTracks = []
    var track

    for (var i = 0; i < tracks.length; i++) {
      track = tracks[i]
      if (track[attr] === value) {
        fTracks.push(track)
      }
    }

    return fTracks
  }

  /**
   * @return {object}
   */
  static StreamError () {
    return {
      isError: true,
      error: ''
    }
  }

  /**
   * Connection between stream, video and url due to revoking and updating.
   * @return {object}
   */
  static StreamObject () {
    return {
      stream: null,
      object_url: null,
      video: null
    }
  }

  static polyfillGetUserMedia () {
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.webkitGetUserMedia
    )
  }

  /**
   * Quick method to get webcam and show in element
   * @param {MediaStreamConstraints} constraints
   * @param {HTMLElement} element
   * @param {function} callback
   */
  static webcamToElement (constraints, element, callback) {
    StreamHelper.getUserMedia(function (data) {
      if (!data || data.isError) {
        if (callback) {
          callback(data)
        }
        return false
      } else {
        var stream = data
      }

      var streamObj = StreamHelper.handleCameraStream(stream)

      if (!element) {
        element = document.body
      }
      element.appendChild(streamObj.video)

      if (callback) {
        callback(streamObj)
      }
    }, constraints)
  }

  /**
   * @return {MediaStreamConstraints}
   */
  static getUnlimitedConstraints () {
    return {
      video: true,
      audio: true
    }
  }

  /**
  * Attempts to get best constraints with best video.
  * @return {Promise}
   */
  static getBestConstraints() {
    return new Promise((resolve, reject) => {
      StreamHelper.getUserMediaWithWorkingConstraints(null, (stream) => {
        resolve(StreamHelper.getStreamConstraints(stream))
      }, reject)
    })
  }

  /**
   * @param {MediaStream} stream
   * @return {MediaStreamConstraints}
   */
  static getStreamConstraints (stream) {
    const tracks = stream.getTracks()
    const constraints = {}
    tracks.forEach(track => {
      const trackConstraints = track.getConstraints()
      constraints[track.kind] = Object.keys(trackConstraints).length > 0 ? trackConstraints : true
    })
    return constraints
  }

  /**
  * Attempts to getUserMedia with best video.
  * Falls back to simpler constraints on fail.
  *   Safe => Not safe
  *   1. {video: true, audio: false} OR {video: false, audio: true}
  *   2. {video: true, audio: true}
  *   3. {video: {...}, audio: {...}
  * @param {MediaStreamConstraints|null} constraints
  * @param {function} onSuccess
  * @param {function} onError
   */
  static getUserMediaWithWorkingConstraints (constraints = null, onSuccess, onError) {
    if (!constraints) {
      constraints = StreamHelper.getUnlimitedConstraints()
    }
    var onErrorHandle = (err) => {
      var isError = false

      if (typeof constraints.video === 'object') { // 1 video most important
        constraints.video = true
      } else if (
        typeof constraints.audio === 'object') { // 2
        constraints.audio = true
      } else if (constraints.video === true && constraints.audio === true) { // 3 no audio sometimes causes errors
        constraints.audio = false
      } else {
        isError = true
      }

      if (isError) {
        onError(err)
      } else {
        navigator.getUserMedia(constraints, onSuccess, onErrorHandle)
      }
    }

    navigator.getUserMedia(constraints, onSuccess, onErrorHandle)
  }

  /**
   * @return {MediaStream}
   */
  static getEmptyStream () {
    let stream = new window.MediaStream()

    const canvas = document.createElement('canvas')

    // Firefox stream error bug fix
    // [Exception... "Component not initialized"  nsresult: "0xc1f30001 (NS_ERROR_NOT_INITIALIZED)"
    canvas.getContext('2d').fillRect(1, 1, 1, 1)
    stream = canvas.captureStream() // Error above can possibly be fixed by passing value here.

    return stream
  }
}
module.exports = StreamHelper
