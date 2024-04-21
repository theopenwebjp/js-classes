export default class StreamManager {
    streams: MediaStream[];
    TrackManager: typeof TrackManager;
    setup(): void;
    addStream(stream: MediaStream): void;
    removeStream(stream: MediaStream): void;
    getStreamIndex(stream: MediaStream): number;
}
import TrackManager from "./TrackManager.js";
//# sourceMappingURL=StreamManager.d.ts.map