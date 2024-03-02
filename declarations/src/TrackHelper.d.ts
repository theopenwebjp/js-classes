export default class TrackHelper {
    static trackHasData(track: MediaStreamTrack): boolean;
    static startRecordingTrack(track: MediaStreamTrack, dataHandle: ((this: MediaRecorder, ev: BlobEvent) => any) | null): MediaRecorder;
    static trackToStream(track: MediaStreamTrack): MediaStream;
}
//# sourceMappingURL=TrackHelper.d.ts.map