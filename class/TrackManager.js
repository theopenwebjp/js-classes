class TrackManager {
  constructor () {
    this.tracks = []// Storing
  }

  addTrack (track) {
    this.tracks.push(track)
  }

  removeTrack (track) {
    var index = this.getTrackIndex(track)
    if (index >= 0) {
      this.tracks.splice(index, 1)
    }
  }

  getTrackIndex (track) {
    return this.tracks.indexOf(track)
  }

  trackToStream (track) {
    // SPEC: Creates stream with tracks added

    var stream = new window.MediaStream()
    stream.addTrack(track)

    return stream
  }
}

module.exports = TrackManager
