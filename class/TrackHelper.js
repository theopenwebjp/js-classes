const StreamHelper = require('./StreamHelper')

class TrackHelper {
  static trackHasData (track) {
  // Track Check
    if (!track) {
      return false
    }

    // Enabled Check
    if (track.enabled !== undefined && !track.enabled) {
      return false
    }

    // Ready State Check
    if (
      track.readyState !== undefined &&
    track.readyState === 'ended'
    ) {
      return false
    }

    // Muted Check(May be temporarily muted)
    if (track.muted !== undefined && !!track.muted) {
    // return false;
    }

    // PASSED
    return true
  }

  static startRecordingTrack (track, dataHandle) {
  // Should be abstract

    var stream = this.trackToStream(track)

    // Record stream
    return StreamHelper.startRecordingStream(stream, dataHandle)
  }
}
module.exports = TrackHelper
