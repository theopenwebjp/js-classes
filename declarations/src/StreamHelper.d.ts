export default class StreamHelper {
    static startRecordingStream(stream: MediaStream, dataHandle: ((this: MediaRecorder, ev: BlobEvent) => any) | null, options?: MediaRecorderOptions): MediaRecorder;
    static stopRecordingStream(recorder: MediaRecorder): void;
    static createStreamVideoElement(stream: MediaStream): HTMLVideoElement;
    static streamHasVideo(stream: MediaStream): boolean;
    static streamHasAudio(stream: MediaStream): boolean;
    static getUserMedia(callback: (streamOrError: MediaStream | import('./types/ts').StreamError) => void, constraints: MediaStreamConstraints): void;
    static handleCameraStream(stream: MediaStream | import('./types/ts').StreamError, object?: import('./types/ts').StreamObject | undefined): null | import('./types/ts').StreamObject;
    static stopCameraStream(stream: MediaStream): void;
    static stopCameraStreamObject(o: import('./types/ts').StreamObject, removeFromDom?: boolean): void;
    static getStreamTracks(stream: MediaStream): MediaStreamTrack[];
    static getTracksByStatus(stream: MediaStream, status: boolean): MediaStreamTrack[];
    static getTracks(stream: MediaStream): MediaStreamTrack[];
    static getTracksByType(stream: MediaStream, type: string): MediaStreamTrack[];
    static getTracksByAttribute(stream: MediaStream, attr: keyof MediaStreamTrack, value: any): MediaStreamTrack[];
    static StreamError(): import('./types/ts').StreamError;
    static StreamObject(): import('./types/ts').StreamObject;
    static polyfillGetUserMedia(): void;
    static getPolyfilledGetUserMedia(): import("./types/ts").NavigatorGetUserMedia;
    static webcamToElement(constraints: MediaStreamConstraints, element: HTMLElement, callback: (streamObject: import('./types/ts').StreamObject | import('./types/ts').StreamError) => void): void;
    static getUnlimitedConstraints(): MediaStreamConstraints;
    static getBestConstraints(): Promise<any>;
    static getStreamConstraints(stream: MediaStream): MediaStreamConstraints;
    static getUserMediaWithWorkingConstraints(constraints: MediaStreamConstraints | undefined, onSuccess: import('./types/ts').NavigatorUserMediaSuccessCallback, onError: (arg0: Error) => void): void;
    static getEmptyStream(): MediaStream;
}
//# sourceMappingURL=StreamHelper.d.ts.map