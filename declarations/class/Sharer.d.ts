export default class Sharer {
    constructor(settings: SharerSettings);
    sharer_settings: Record<string, (Partial<ShareMethod>) | null>;
    share_methods: {
        [x: string]: ShareMethod;
    };
    setup(settings: SharerSettings): void;
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
    }): ShareMethod;
    getShareMethods(): {
        [x: string]: ShareMethod;
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
        [x: string]: GroupedDataItem;
    };
    GroupedDataItem(options?: Partial<GroupedDataItem>): GroupedDataItem;
    getShareMethodsByType(type: string): Partial<{
        [x: string]: ShareMethod;
    }>;
    getShareMethodsByAttr(attr: string, value: any): Partial<{
        [x: string]: ShareMethod;
    }>;
    ShareMethod(options?: Partial<ShareMethod>): ShareMethod;
}
export type SharerSettings = Object;
export type GroupedDataItem = {
    name: string;
    description: string;
    image_src: string;
    image: HTMLImageElement | null;
    handle: ((param0: any[]) => void) | null;
};
export type ShareMethod = {
    type: string;
    share: () => void;
};
//# sourceMappingURL=Sharer.d.ts.map