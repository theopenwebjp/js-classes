export default class PageManager {
    constructor(settings: import("./types/ts").PageManagerSettings);
    settings: import("./types/ts").PageManagerSettings;
    PageManagerSettings(options?: Partial<import("./types/ts").PageManagerSettings>): {
        param: string;
        defaultKey: string;
        events: import("./types/ts").EventListenersMap;
        parent: HTMLElement | null;
    } & Partial<import("./types/ts").PageManagerSettings>;
    setup(options: Partial<import("./types/ts").PageManagerSettings>): void;
    getCurrentPageKey(): string;
    setupCurrentPage(parent: any, settings: object): void;
    getMenu(pages: object): HTMLElement;
    handleEvent(name: string, args: any[]): any;
    setupPage(parent: any, key: string, settings: object): void;
}
//# sourceMappingURL=PageManager.d.ts.map