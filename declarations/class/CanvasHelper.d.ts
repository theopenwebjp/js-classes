declare class CanvasHelper {
    static watchCanvas(canvas: HTMLCanvasElement, onChange: () => void, intervalMs?: number): () => void;
    static checkCanvasChangeOnEvent(canvas: HTMLCanvasElement, onChange: () => void, event?: string): () => void;
    static RGBASelection(options: Partial<RGBASelection>): {
        r: boolean;
        g: boolean;
        b: boolean;
        a: boolean;
    } & Partial<RGBASelection>;
    static getContext(canvas: CachedHTMLCanvasElement): CanvasRenderingContext2D;
    static canvasToStream(canvas: HTMLCanvasElement, fps: number): MediaStream | boolean;
    static canvasToImage(canvas: HTMLCanvasElement, options: Partial<CanvasImageOptions>): string | HTMLImageElement;
    static drawableToImage(drawable: any): HTMLImageElement;
    static ImageSrcToDataURL(src: string, onLoad: (dataUrl: string) => void, format: string, conversionOptions: number | undefined): void;
    static drawableToCanvas(drawable: CanvasImageSource, startCanvas?: undefined | HTMLCanvasElement): HTMLCanvasElement;
    static drawableToDataURL(drawable: CanvasImageSource, format?: string | undefined, conversionOptions?: number | undefined): string;
    static canvasToDataURL(canvas: HTMLCanvasElement, format?: string | undefined, encoderOptions?: number | undefined): string;
    static canvasToImageFile(canvas: HTMLCanvasElement, format: string, conversionOptions: number | undefined, onLoad?: ((image: HTMLImageElement) => void) | undefined): HTMLImageElement;
    static watchForCanvasStop(canvas: HTMLCanvasElement, onStop: () => void, options: {
        interval: number;
    }): void;
    static isImageDataSame(imgData1: ImageData, imgData2: ImageData): boolean;
    static canvasHasColorData(canvas: HTMLCanvasElement, rgbaOptions?: Partial<RGBASelection>): boolean;
    static fitCanvasToBoundingRect(canvas: HTMLCanvasElement, boundingRect: SimpleDOMRect): HTMLCanvasElement;
    static getContextBoundingRect(ctx: CanvasRenderingContext2D): SimpleDOMRect;
    static BoundingRect(): SimpleDOMRect;
    static streamToCanvasRenderer(stream: MediaStream, updateRate: number): CanvasRenderer;
}
declare namespace CanvasHelper {
    export { CanvasRenderer };
}
export default CanvasHelper;
export type SimpleDOMRect = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type CachedHTMLCanvasElement = HTMLCanvasElement & {
    _context?: CanvasRenderingContext2D | null | undefined;
};
export type CanvasImageOptions = {
    format: string;
    serialization: 'data_url' | 'image';
    on_load: (...args: any[]) => any;
    conversion_options: number | null;
};
export type RGBASelection = {
    r: boolean;
    g: boolean;
    b: boolean;
    a: boolean;
};
import CanvasRenderer from "./CanvasRenderer.js";
//# sourceMappingURL=CanvasHelper.d.ts.map