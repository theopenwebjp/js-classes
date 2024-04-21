declare class CanvasHelper {
    static checkCanvasChangeOnEvent(canvas: HTMLCanvasElement, onChange: () => void, event?: string): () => void;
    static streamToCanvasRenderer(stream: MediaStream, updateRate: number): CanvasRenderer;
}
declare namespace CanvasHelper {
    export { CanvasRenderer };
}
export default CanvasHelper;
import CanvasRenderer from "./CanvasRenderer.js";
//# sourceMappingURL=CanvasHelper.d.ts.map