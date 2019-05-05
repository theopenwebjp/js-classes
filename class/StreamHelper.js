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
  static startRecordingStream (stream, dataHandle, options) {
    // Should be abstract

    var recorder = window.MediaRecorder(stream, options)
    recorder.ondataavailable = dataHandle
    recorder.start()
    return recorder
  }

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

  static getUserMedia (callback, constraints) {
    // Be careful of argument order change: navigator.getUserMedia(constraints, onSuccess, onError)
    // Order changed due to constraints being optional

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

    return navigator.getUserMedia(constraints, onSuccess, onError)
  }

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

  static stopCameraStream (stream) {
    // Stop tracks
    var tracks = StreamHelper.getStreamTracks(stream)
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].stop) {
        tracks[i].stop()
      }
    }
  }

  static stopCameraStreamObject (o) {
    // Stop Stream
    StreamHelper.stopCameraStream(o.stream)

    // Destroy video
    if (o.video) {
      o.video.src = ''
      if (o.video.parentElement) {
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

  static getStreamTracks (stream) {
    if (stream.getTracks) {
      return stream.getTracks()
    } else {
      return []
    }
  }

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

  static getTracks (stream) {
    return stream.getTracks()
  }

  static getTracksByType (stream, type) {
    return StreamHelper.getTracksByAttribute(stream, 'kind', type)
  }

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

  static StreamError () {
    return {
      isError: true,
      error: ''
    }
  }

  static StreamObject () { // Connection between stream, video and url due to revoking and updating.
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

  static webcamToElement (constraints, element, callback) {
    // Quick method to get webcam and show in element

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

  static getUserMediaWithWorkingConstraints (constraints, onSuccess, onError) {
    /*
    Falls back to simpler constraints on fail.
    Safe => Not safe
    1. {video: true, audio: false} OR {video: false, audio: true}
    2. {video: true, audio: true}
    3. {video: {...}, audio: {...}
    */

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
