export default class TrackManager {
    constructor() {
        /**
         * Storing
         * @type {MediaStreamTrack[]}
         */
        this.tracks = []
    }

    /**
     * @param {MediaStreamTrack} track
     */
    addTrack(track) {
        this.tracks.push(track)
    }

    /**
     * @param {MediaStreamTrack} track
     */
    removeTrack(track) {
        const index = this.getTrackIndex(track)
        if (index >= 0) {
            this.tracks.splice(index, 1)
        }
    }

    /**
     * @param {MediaStreamTrack} track
     * @return {number} index
     */
    getTrackIndex(track) {
        return this.tracks.indexOf(track)
    }
}
