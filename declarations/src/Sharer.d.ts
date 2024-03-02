export default class Sharer {
    constructor(settings: import("./types/ts").SharerSettings);
    sharer_settings: Record<string, (Partial<import("./types/ts").ShareMethod>) | null>;
    share_methods: {
        [x: string]: import("./types/ts").ShareMethod;
    };
    setup(settings: import("./types/ts").SharerSettings): void;
    setupShareMethods(): void;
    setupShareMethod(key: string, data: any): void;
    getShareMethod(key: keyof {
        barcode: null;
        ar_code: null;
        url_recognizer: null;
        data_recognizer: null;
        audio_data: null;
        nfc: null;
        bluetooth: null;
        wifi: null;
        facebook: null;
        skype: null;
        line: null;
        infrared: null;
    }): import("./types/ts").ShareMethod;
    getShareMethods(): {
        [x: string]: import("./types/ts").ShareMethod;
    };
    getTypes(): {
        visual: {};
        audio: {};
        wireless: {};
        account: {};
        other: {};
    };
    setShareElement(el: HTMLElement): void;
    handleShareClick(ev: Event): void;
    getNewWindow(): HTMLElement;
    getNewButton(): HTMLElement;
    showWindow(el: HTMLElement): void;
    hideWindow(el: HTMLElement): void;
    showGroupedData(): void;
    getGroupedData(): {
        [x: string]: import("./types/ts").GroupedDataItem;
    };
    GroupedDataItem(options?: Partial<import("./types/ts").GroupedDataItem>): import("./types/ts").GroupedDataItem;
    getShareMethodsByType(type: string): Partial<{
        [x: string]: import("./types/ts").ShareMethod;
    }>;
    getShareMethodsByAttr(attr: string, value: any): Partial<{
        [x: string]: import("./types/ts").ShareMethod;
    }>;
    ShareMethod(options?: Partial<import("./types/ts").ShareMethod>): import("./types/ts").ShareMethod;
}
//# sourceMappingURL=Sharer.d.ts.map