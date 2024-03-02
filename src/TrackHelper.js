import StreamHelper from './StreamHelper.js'

export default class TrackHelper {
    /**
     * @param {MediaStreamTrack} track
     * @return {boolean}
     */
    static trackHasData(track) {
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

    /**
     * @param {MediaStreamTrack} track
     * @param {((this: MediaRecorder, ev: BlobEvent) => any) | null} dataHandle
     * @return
     */
    static startRecordingTrack(track, dataHandle) {
        // Should be abstract

        const stream = TrackHelper.trackToStream(track)

        // Record stream
        return StreamHelper.startRecordingStream(stream, dataHandle)
    }

    /**
     * Creates stream with tracks added
     * @param {MediaStreamTrack} track
     * @return {MediaStream}
     */
    static trackToStream(track) {
        const stream = new window.MediaStream()
        stream.addTrack(track)

        return stream
    }
}
