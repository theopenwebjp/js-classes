declare class CanvasHelper {
    static watchCanvas(canvas: HTMLCanvasElement, onChange: () => void, intervalMs?: number): () => void;
    static checkCanvasChangeOnEvent(canvas: HTMLCanvasElement, onChange: () => void, event?: string): () => void;
    static RGBASelection(options: Partial<import('./types/ts/index.js').RGBASelection>): {
        r: boolean;
        g: boolean;
        b: boolean;
        a: boolean;
    } & Partial<import("./types/ts/index.js").RGBASelection>;
    static getContext(canvas: import('./types/ts/index.js').CachedHTMLCanvasElement): CanvasRenderingContext2D;
    static canvasToStream(canvas: HTMLCanvasElement, fps: number): MediaStream | boolean;
    static canvasToImage(canvas: HTMLCanvasElement, options: Partial<import('./types/ts/index.js').CanvasImageOptions>): string | HTMLImageElement;
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
    static canvasHasColorData(canvas: HTMLCanvasElement, rgbaOptions?: Partial<import('./types/ts/index.js').RGBASelection>): boolean;
    static fitCanvasToBoundingRect(canvas: HTMLCanvasElement, boundingRect: import('./types/ts/index.js').SimpleDOMRect): HTMLCanvasElement;
    static getContextBoundingRect(ctx: CanvasRenderingContext2D): import("./types/ts/index.js").SimpleDOMRect;
    static BoundingRect(): import('./types/ts/index.js').SimpleDOMRect;
    static streamToCanvasRenderer(stream: MediaStream, updateRate: number): CanvasRenderer;
    static loopImageData(imgData: ImageData, onPixel: (rgba: import('./types/ts/index.js').RGBA, index: number) => void): void;
    static diffRGBA(rgba1: import('./types/ts/index.js').RGBA, rgba2: import('./types/ts/index.js').RGBA): number;
    static getMainColor(imgData: ImageData, threshold?: number | undefined): any;
    static getMaxRGBACount(colors: import('./types/ts/index.js').RGBACount[]): any;
}
declare namespace CanvasHelper {
    export { CanvasRenderer };
}
export default CanvasHelper;
import CanvasRenderer from "./CanvasRenderer.js";
//# sourceMappingURL=CanvasHelper.d.ts.map