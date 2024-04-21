import { InputType } from "@theopenweb/js-functions/declarations/types/ts";
export type CanvasRenderOptions = {
    renderable: Renderable | null;
    canvas: HTMLCanvasElement | null;
    rate: number;
    muted: boolean;
};
export type Renderable = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
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
//# sourceMappingURL=index.d.ts.map