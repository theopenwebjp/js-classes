export default class CanvasRenderer {
    constructor(settings: Partial<CanvasRenderOptions>);
    settings: CanvasRenderOptions;
    state: {
        interval: number | null;
        canvas: HTMLCanvasElement | null;
        context: CanvasRenderingContext2D | null;
    };
    newCanvas(): HTMLCanvasElement;
    start(): number;
    mute(): void;
    muted: boolean | undefined;
    unmute(): void;
    stop(): void;
    updateRenderable(renderable: Renderable): void;
    render(): undefined | false;
}
export type Renderable = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
export type CanvasRenderOptions = {
    renderable: Renderable | null;
    canvas: HTMLCanvasElement | null;
    rate: number;
    muted: boolean;
};
declare function CanvasRenderOptions(options?: Partial<CanvasRenderOptions> | undefined): CanvasRenderOptions;
export {};
//# sourceMappingURL=CanvasRenderer.d.ts.map