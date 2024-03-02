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
export type RGBA = [number, number, number, number];
export type RGBACount = {
    rgba: [number, number, number, number];
    count: number;
    index: number;
};
export type CanvasImageSourceData = string | HTMLImageElement;
export type CanvasRenderOptions = {
    renderable: Renderable | null;
    canvas: HTMLCanvasElement | null;
    rate: number;
    muted: boolean;
};
export type Renderable = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
export type CustomDOMRect = {
    width: number;
    height: number;
    x: number;
    y: number;
    top: number;
    left: number;
};
export type NameValue = {
    name: string;
    value: any;
};
export type ElementPosition = {
    element: HTMLElement;
    type: string | null;
    attributeIndex: number;
    stringIndex: number;
    stringLength: number;
};
export type Link = {
    text: string;
    url: string;
};
export type ChildrenSettings = {
    replacements: {
        [x: string]: any;
    };
    format: DomElementSettings;
    items: any[];
};
export type DomElementSettings = {
    tag: string;
    children: DomElementSettings[];
    attributes: {
        [x: string]: string;
    };
    textContent: string;
    innerHTML: string;
    events: {
        [x: string]: (...args: any[]) => any;
    };
};
export type DOMSearchSettings = {
    tag: boolean;
    textContent: boolean;
    attributeKey: boolean;
    attributeValue: boolean;
    handle: ((arg0: HTMLElement) => any) | null;
};
export type Margins = {
    top: number | null;
    left: number | null;
};
export type FormOptions = {
    method: string;
    action: string | ((event: SubmitEvent) => void);
    controls: {
        reset: boolean;
        submit: boolean;
    };
};
export type MenuListItem = {
    type: string;
    click: () => void;
    text: string;
    id: string;
    class: string;
    empty: boolean;
    orientation: 'vertical' | 'horizontal';
};
export type MenuListSettings = {
    items: MenuListItem[];
    element: HTMLElement | undefined;
    isChild: boolean;
    hide: boolean;
    header: {
        text: string;
        id: string;
    };
};
export type WatchedHTMLElement = HTMLElement & {
    __listenerChangeHandles: any;
    __handleEvent: any;
    __addEventListener: any;
    __removeEventListener: any;
};
export type AddEventListener = (type: string, listener: (ev: Event) => void, options: any) => void;
export type AppendChild = typeof Node.prototype.appendChild;
export type FormManagerSettings = {
    useLabel: boolean;
    text: {
        [x: string]: string;
    };
};
export type Dictionary = {
    [x: string]: any;
};
export type PageInputOptions = {
    noHidden: boolean;
    hidden: boolean;
};
export type A = object;
export type C = {
    d: string;
};
export type InputType = {
    tag: string;
    placeholder: boolean;
    attributes: {
        [x: string]: string;
    };
    format: (value: any) => any;
    multiple: boolean;
    value: (element: InputElement) => any;
    setValue: (element: InputElement, value: any) => void;
};
export type InputObject = {
    type: string;
    tag: string;
    attributes: {
        [x: string]: string;
    };
    key: string;
    label: string;
    values: any[];
    rowHeader: string;
    initialSelection: string;
    required: boolean;
};
export type FormSettings = {
    action: string;
    actionType: string;
    inputs: InputObject[];
};
export type ExtendedType = {
    type: string;
    override: (type: InputType) => void;
};
export type InputAttributes = {
    type: string;
    name: string;
    placeholder: string;
};
export type Wrap = {
    preparationName: string | null;
    preparing: boolean;
    executingWrappedFunction: boolean;
    wrapped: Function[];
};
export type WrapperFunction = Function & {
    __wrapStatus?: WrapStatus;
    __wrapped?: boolean;
};
export type WrapStatus = {
    status: any;
    old: any;
    references: any[];
};
export type CommonEventData = {
    event: 'complete' | 'start' | null;
    logTitle: string;
    name: string;
    data: any;
    options: WrapperOptions;
};
export type WrapperOptions = {
    events: {
        [x: string]: (arg0: any[]) => void | null;
    };
    log: boolean;
    logPossiblyBadOnly: boolean;
    wrapFunctionArguments: boolean;
    wrapReturnFunctions: boolean;
    allowMultipleWrap: boolean;
    stackTrace: boolean;
};
export type FunctionData = {
    name: string;
    function: Function | null;
    arguments: any[];
    return: any;
    returned: boolean;
};
export type StackTraceData = {
    caller: any;
    callerName: string | null;
    name: string | null;
    function: (() => void) | null;
    time: number | null;
};
export type Reference = {
    parent: Record<string, any> | null;
    key: string | null;
};
export type TextManagerSettings = {
    auto: boolean;
    languageParam: string;
    defaultLanguageParam: string;
    defaultLanguage: string;
    language: string;
    languages: {
        [x: string]: {
            [x: string]: string;
        };
    };
    languageFormat: string;
    characterSet: string;
};
export type CopierElements = {
    main: Element | null;
    pages: Element | null;
};
export type CopierEvents = {
    handlePageInputClick: Function | null;
    handlePageInputDragStart: Function | null;
    handlePageInputDrop: Function | null;
};
export type RowOptions = {
    attributes: {
        name: string;
        id: string;
    };
    label: string;
    values: string[];
    other: {
        label: string;
    };
};
export type PageElements = {
    main: HTMLElement | null;
    list: HTMLElement | null;
    addButton: HTMLButtonElement | null;
};
export type PageEvents = {
    handleInputClick: Function | null;
    handleInputDragStart: Function | null;
    handleInputDrop: Function | null;
};
export type PageState = {
    receiver: boolean;
    sender: boolean;
};
export type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
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
export type SharerSettings = any;
export type GroupedDataItem = {
    name: string;
    description: string;
    image_src: string;
    image: HTMLImageElement | null;
    handle: (param0: any[]) => void;
};
export type ShareMethod = {
    type: string;
    share: () => void;
};
export type Unit = {
    name: string;
    symbol: string;
    exponent: number;
};
export type ImperialUnit = {
    name: string;
    symbol: string;
    multiplier: number;
};
export type Measurement = {
    siSymbol: string;
    imperial: {
        [x: string]: ImperialUnit;
    };
};
export type NumberUnit = {
    number: number;
    unit: Unit | null;
    apply: (num: number, unit: Unit) => NumberUnit;
    calculate: () => number;
    toString: () => string;
};
export type NavigatorGetUserMedia = (constraints: MediaStreamConstraints, onStream: (stream: MediaStream) => void, onError: (error: Error) => void) => void;
export type GetUserMediaPolyfilledNavigator = Navigator & {
    getUserMedia?: NavigatorGetUserMedia;
    mozGetUserMedia?: NavigatorGetUserMedia;
    webkitGetUserMedia?: NavigatorGetUserMedia;
};
export type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;
export type StreamObject = {
    stream: MediaStream | null;
    object_url: string | null;
    video: HTMLVideoElement | null;
};
export type StreamError = {
    error: Error | null;
    isError: boolean;
};
export type Falsy = undefined | null | false | 0 | '';
//# sourceMappingURL=index.d.ts.map