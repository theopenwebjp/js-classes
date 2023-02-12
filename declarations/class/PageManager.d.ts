export default class PageManager {
    constructor(settings: PageManagerSettings);
    settings: PageManagerSettings;
    PageManagerSettings(options?: Partial<PageManagerSettings>): {
        param: string;
        defaultKey: string;
        events: EventListenersMap;
        parent: HTMLElement | null;
    } & Partial<PageManagerSettings>;
    setup(options: Partial<PageManagerSettings>): void;
    getCurrentPageKey(): string;
    setupCurrentPage(parent: any, settings: object): void;
    getMenu(pages: object): HTMLElement;
    handleEvent(name: string, args: any[]): any;
    setupPage(parent: any, key: string, settings: object): void;
}
export type EventListenersMap = {
    [x: string]: Function | null | undefined;
};
export type PageManagerSettings = {
    param: string;
    defaultKey: string;
    events: EventListenersMap;
    parent: HTMLElement | null;
};
export type Actions = {
    [x: string]: (v: string) => string;
};
//# sourceMappingURL=PageManager.d.ts.map