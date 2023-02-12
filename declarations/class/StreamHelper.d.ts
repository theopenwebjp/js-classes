export default class StreamHelper {
    static startRecordingStream(stream: MediaStream, dataHandle: ((this: MediaRecorder, ev: BlobEvent) => any) | null, options?: MediaRecorderOptions): MediaRecorder;
    static stopRecordingStream(recorder: MediaRecorder): void;
    static createStreamVideoElement(stream: MediaStream): HTMLVideoElement;
    static streamHasVideo(stream: MediaStream): boolean;
    static streamHasAudio(stream: MediaStream): boolean;
    static getUserMedia(callback: (streamOrError: MediaStream | StreamError) => void, constraints: MediaStreamConstraints): void;
    static handleCameraStream(stream: MediaStream | StreamError, object?: StreamObject | undefined): null | StreamObject;
    static stopCameraStream(stream: MediaStream): void;
    static stopCameraStreamObject(o: StreamObject, removeFromDom?: boolean): void;
    static getStreamTracks(stream: MediaStream): MediaStreamTrack[];
    static getTracksByStatus(stream: MediaStream, status: boolean): MediaStreamTrack[];
    static getTracks(stream: MediaStream): MediaStreamTrack[];
    static getTracksByType(stream: MediaStream, type: string): MediaStreamTrack[];
    static getTracksByAttribute(stream: MediaStream, attr: keyof MediaStreamTrack, value: any): MediaStreamTrack[];
    static StreamError(): StreamError;
    static StreamObject(): StreamObject;
    static polyfillGetUserMedia(): void;
    static getPolyfilledGetUserMedia(): NavigatorGetUserMedia;
    static webcamToElement(constraints: MediaStreamConstraints, element: HTMLElement, callback: (streamObject: StreamObject | StreamError) => void): void;
    static getUnlimitedConstraints(): MediaStreamConstraints;
    static getBestConstraints(): Promise<any>;
    static getStreamConstraints(stream: MediaStream): MediaStreamConstraints;
    static getUserMediaWithWorkingConstraints(constraints: MediaStreamConstraints | undefined, onSuccess: NavigatorUserMediaSuccessCallback, onError: (arg0: Error) => void): void;
    static getEmptyStream(): MediaStream;
}
export type NavigatorGetUserMedia = (constraints: MediaStreamConstraints, onStream: (stream: MediaStream) => void, onError: (error: Error) => void) => void;
export type GetUserMediaPolyfilledNavigator = Navigator & {
    getUserMedia?: NavigatorGetUserMedia;
    mozGetUserMedia?: NavigatorGetUserMedia;
    webkitGetUserMedia?: NavigatorGetUserMedia;
};
export type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;
export type StreamObject = {
    stream: MediaStream | null;
    object_url: string | null;
    video: HTMLVideoElement | null;
};
export type StreamError = {
    error: Error | null;
    isError: boolean;
};
//# sourceMappingURL=StreamHelper.d.ts.map