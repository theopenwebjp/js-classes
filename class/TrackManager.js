class TrackManager {
  constructor () {
    this.tracks = []// Storing
  }

  /**
   * @param {MediaStreamTrack} track
   */
  addTrack (track) {
    this.tracks.push(track)
  }

  /**
   * @param {MediaStreamTrack} track
   */
  removeTrack (track) {
    var index = this.getTrackIndex(track)
    if (index >= 0) {
      this.tracks.splice(index, 1)
    }
  }

  /**
   * @param {MediaStreamTrack} track
   * @return {number} index
   */
  getTrackIndex (track) {
    return this.tracks.indexOf(track)
  }

  /**
   * Creates stream with tracks added
   * @param {MediaStreamTrack} track
   * @return {MediaStream}
   */
  trackToStream (track) {
    var stream = new window.MediaStream()
    stream.addTrack(track)

    return stream
  }
}

module.exports = TrackManager
