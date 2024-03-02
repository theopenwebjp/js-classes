export default class StreamManager {
    streams: MediaStream[];
    TrackManager: typeof TrackManager;
    getUserMedia: typeof StreamHelper.getUserMedia;
    handleCameraStream: typeof StreamHelper.handleCameraStream;
    stopCameraStream: typeof StreamHelper.stopCameraStream;
    stopCameraStreamObject: typeof StreamHelper.stopCameraStreamObject;
    getStreamTracks: typeof StreamHelper.getStreamTracks;
    getTracksByStatus: typeof StreamHelper.getTracksByStatus;
    getTracks: typeof StreamHelper.getTracks;
    getTracksByType: typeof StreamHelper.getTracksByType;
    getTracksByAttribute: typeof StreamHelper.getTracksByAttribute;
    StreamError: typeof StreamHelper.StreamError;
    StreamObject: typeof StreamHelper.StreamObject;
    polyfillGetUserMedia: typeof StreamHelper.polyfillGetUserMedia;
    webcamToElement: typeof StreamHelper.webcamToElement;
    getUserMediaWithWorkingConstraints: typeof StreamHelper.getUserMediaWithWorkingConstraints;
    startRecordingStream: typeof StreamHelper.startRecordingStream;
    stopRecordingStream: typeof StreamHelper.stopRecordingStream;
    createStreamVideoElement: typeof StreamHelper.createStreamVideoElement;
    streamHasVideo: typeof StreamHelper.streamHasVideo;
    streamHasAudio: typeof StreamHelper.streamHasAudio;
    trackHasData: typeof TrackHelper.trackHasData;
    StreamHelper: typeof StreamHelper;
    setup(): void;
    addStream(stream: MediaStream): void;
    removeStream(stream: MediaStream): void;
    getStreamIndex(stream: MediaStream): number;
}
import TrackManager from "./TrackManager.js";
import StreamHelper from "./StreamHelper.js";
import TrackHelper from "./TrackHelper.js";
//# sourceMappingURL=StreamManager.d.ts.map