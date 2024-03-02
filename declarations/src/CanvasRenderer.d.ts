export default class CanvasRenderer {
    constructor(settings: Partial<import('./types/ts').CanvasRenderOptions>);
    settings: import('./types/ts').CanvasRenderOptions;
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
    updateRenderable(renderable: import("./types/ts").Renderable): void;
    render(): undefined | false;
}
//# sourceMappingURL=CanvasRenderer.d.ts.map