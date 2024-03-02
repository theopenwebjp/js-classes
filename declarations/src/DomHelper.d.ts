export default class DomHelper {
    static DomElementSettings(options?: Partial<import('./types/ts').DomElementSettings>): import('./types/ts').DomElementSettings;
    static DOMSearchSettings(options?: Partial<import('./types/ts').DOMSearchSettings>): import('./types/ts').DOMSearchSettings;
    static ChildrenSettings(options: Partial<import('./types/ts').ChildrenSettings>): import('./types/ts').ChildrenSettings;
    public static createElements(settingsArr: Partial<import('./types/ts').DomElementSettings>[], defaults: Partial<import('./types/ts').DomElementSettings>): HTMLElement[];
    public static createElement(options: Partial<import('./types/ts').DomElementSettings>): HTMLElement;
    public static setChildrenSettings(settings: import('./types/ts').DomElementSettings, childrenOptions: Partial<import('./types/ts').ChildrenSettings>): import("./types/ts").DomElementSettings[];
    public static createTable(rows: Array<string[]>): HTMLTableElement;
    public static createElementList(nameValues: import('./types/ts').NameValue[]): HTMLUListElement;
    static createKeyValueList(obj: Record<string, any>): HTMLUListElement;
    static createList(arr: (HTMLElement | string)[]): HTMLUListElement;
    public static createHeadedArrayElement(handle: ((arr: any[]) => HTMLElement) | undefined, headerText: string, arr: (any[])): HTMLDivElement;
    public static createHeadedTable(header: string, arr: string[]): HTMLDivElement;
    public static createHeadedList(header: string, arr: string[]): HTMLDivElement;
    public static createHeadedKeyValueList(header: string, obj: object): HTMLDivElement;
    public static MenuListSettings(options?: Partial<import('./types/ts').MenuListSettings>): import('./types/ts').MenuListSettings;
    public static setupMenuList(parentEl: HTMLElement, settings: import('./types/ts').MenuListSettings): HTMLElement;
    public static createBreadcrumbList(links: (string | import('./types/ts').Link)[], separator: string): HTMLSpanElement;
    public static groupify(nameValues: import('./types/ts').NameValue[]): HTMLDivElement;
    public static clearForm(form: HTMLFormElement): void;
    private static _setEvents;
    private static _setChildren;
    private static _handleChildrenReplacements;
    private static _handleChildReplacements;
    private static _applyObjectReplacement;
    public static appendChildren(el: HTMLElement, children: HTMLElement[]): void;
    public static setAttributes(el: HTMLElement, attributes: {
        [x: string]: string;
    }): void;
    public static NameValue(): object;
    public static createCommonList(arr: {
        name: string;
        value: string | HTMLElement;
    }[]): HTMLUListElement;
    public static FormOptions(options?: Partial<import('./types/ts').FormOptions>): import('./types/ts').FormOptions;
    static formify(el: HTMLElement, fOptions: Partial<import('./types/ts').FormOptions>): HTMLFormElement;
    public static getElementScreenDimensions(el: HTMLElement): DOMRect;
    public static getElementPageDimensions(el: HTMLElement): import("./types/ts").CustomDOMRect;
    public static setStylePosition(el: HTMLElement, position: any): void;
    public static setStyleDimensions(el: HTMLElement, dimensions: Record<keyof CSSStyleDeclaration, string | null>): void;
    public static setStyleMeasurements(el: HTMLElement, obj: Record<keyof CSSStyleDeclaration, string | null>, allowed: string[], unit?: string | undefined): void;
    public static applyMarginsToDimensions(margins: Partial<import('./types/ts').Margins>, dimensions: import('./types/ts').CustomDOMRect): void;
    public static displayElementAtScreenDimensions(el: HTMLElement, dimensions: object): HTMLElement;
    public static displayElementAtPageDimensions(el: HTMLElement, dimensions: object): HTMLElement;
    public static showAboveElement(shownElement: HTMLElement, targetElement: HTMLElement, options: Partial<import('./types/ts').Margins>): HTMLElement;
    static watchDocumentSizeChanges(element: HTMLElement, handle: Function): void;
    public static startWatchingHtmlElementListenerChanges(eventName: string, handle: Function): void;
    public static stopWatchingHtmlElementListenerChanges(eventName: string, handle: Function): boolean;
    public static getAvailableElementEvents(el: HTMLElement): string[];
    public static htmlifyEvents(el: HTMLElement, eventNames: string[]): void;
    public static htmlifyEvent(el: HTMLElement, eventName: string): void;
    public static getParents(el: HTMLElement): HTMLElement[];
    public static getClosestParent(el: HTMLElement, selector: string): HTMLElement | null;
    public static removeTabIndexes(): void;
    public static setTabIndexes(elements: HTMLElement[]): void;
    public static getHtmlImport(selector: string): DocumentFragment | null;
    public static e(id: string): HTMLElement | null | undefined;
    public static getElementsByIds(ids: string[]): HTMLElement[];
    public static getDOMList(arr: string[]): HTMLUListElement;
    public static getDOMImage(src: string): HTMLImageElement;
    public static getDOMInputsList(inputs: HTMLInputElement[]): HTMLTableElement;
    public static getDOMInputRow(input: HTMLInputElement): HTMLTableRowElement;
    public static setClickFileHandler(el: HTMLElement, onFileHandle: () => void): void;
    public static getElementPositionData(elementPosition: import('./types/ts').ElementPosition): string | null;
    public static searchDom(searchStr: string, optionalType?: Partial<import('./types/ts').DOMSearchSettings>, el?: HTMLElement | Document): import('./types/ts').ElementPosition[] | undefined;
    public static arrayInputter(objectInfoArray: {
        key: string;
        value: any;
    }[]): HTMLUListElement;
    public static nestedInputter(obj: {
        [x: string]: any;
    }): HTMLUListElement;
    public static textNodesUnder(el: HTMLElement): Node[];
    public static getElementsBySelectors(selectors: string[], baseElement?: Element | Document | HTMLElement | undefined): Element[];
    public static getElementsMappedToSelectors(selectors: string[], baseElement?: Document | HTMLElement | undefined): {
        [x: string]: HTMLElement[];
    };
    public static getAllElements(): Element[];
    public static getAllChildren(el: HTMLElement | Document): Element[];
    public static getElementsWithAttribute(attr: string): HTMLElement[];
    public static getElementAttributes(el: HTMLElement): {
        [x: string]: string;
    };
    public static getAttributeSelector(attr: string, value?: string): string;
    public static getElementsByAttribute(attr: string, value: string): NodeListOf<Element>;
    public static getNestedAttributeListFromElement(el: Element | Document, attr: string): string[];
    static setElementAsEditable(el: HTMLElement, onChange: () => void, bool: boolean): void;
    static setEditMode(attr: string, bool: boolean): void;
    public static centerFixElement(el: HTMLElement): void;
    public static convertTableHtmlToArray(html: string): string[][];
    public static convertTableElementToArray(table: HTMLTableElement): string[][];
    public static convertTableRowElementsToArray(rows: HTMLTableRowElement[]): string[][];
    public static convertArrToTableElement(arr: Array<string[]>): HTMLTableElement;
    public static elementChainer(el: HTMLElement): Object;
    static getUsedDOMBoundingRect(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
        width: number;
        height: number;
    };
    static getElementsBoundingRect(elements: Element[]): {
        top: number;
        right: number;
        bottom: number;
        left: number;
        width: number;
        height: number;
    };
    static attemptUpdateNestedTextContent(element: Element, textContent: string): boolean;
}
//# sourceMappingURL=DomHelper.d.ts.map