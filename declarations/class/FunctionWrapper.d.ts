export default class FunctionWrapper {
    settings: {
        events: {
            start: string;
            complete: string;
        };
    };
    status: {
        stackTrace: StackTraceData[];
        wrap: Wrap;
        disableStackTrace: boolean;
    };
    wrapperOptions(options?: Partial<WrapperOptions>): WrapperOptions;
    functionData(): FunctionData;
    stackTraceData(): StackTraceData;
    Reference(): Reference;
    WrapStatus(): WrapStatus;
    setup(): void;
    simpleWrapFunction(func: Function, before?: Function | undefined, after?: Function | undefined): (this: Function, ...args: any[]) => any;
    handlePreparation(name: string, inPreparation: boolean): boolean;
    setupWrapStatus(wrapperFunction: WrapperFunction, func: Function): void;
    handleWrapReference(wrapperFunction: WrapperFunction, reference: Reference): void;
    public wrapFunction(func: Function, reference: Reference, wrapperOptions?: Partial<WrapperOptions> | undefined): Function | false;
    createWrapFunction(func: Function, options: WrapperOptions): WrapperFunction;
    public stackTraceFunctionCombinations(funcs: Function[], callback: (trace: StackTraceData[]) => void, obj: object): false | undefined;
    stackTraceFunction(func: Function, returnHandle: (trace: StackTraceData[]) => void, obj: object): () => void;
    startStackTrace(obj: {
        [x: string]: any;
    }): void;
    stopStackTrace(): StackTraceData[];
    public unwrapFunctions(): void;
    public unwrapFunction(wrapperFunction: WrapperFunction): void;
    stackTrace(func: () => void): StackTraceData;
    isBad(obj: {
        options: WrapperOptions;
        data: any;
    }): boolean;
    isPossibleBad(funcData: FunctionData): boolean;
    handleEvent(eventType: 'start' | 'complete', args?: any[]): any;
    wrapObjectFunctions(obj: object, options: object): void;
    deepWrapObjectFunctions(parentObj: {
        [x: string]: any;
    }, options: Partial<WrapperOptions>): void;
    attemptWrapObjectFunction(obj: {
        [x: string]: any;
    }, key: string, options: Partial<WrapperOptions>): any;
    attemptWrapFunction(data: any, reference: any, options: Partial<WrapperOptions>): any;
    isWrapperFunction(data: any): boolean;
    isWrapForbidden(func: Function): boolean;
    isWrapped(func: WrapperFunction): boolean;
    getFunctionData(func: Function, args: any[], returnVal?: any, ...args: any[]): FunctionData;
    handleCommonEvent(obj: CommonEventData): boolean;
    getCommonEventData(objOptions: Partial<CommonEventData>, funcData: FunctionData, options: WrapperOptions): CommonEventData;
    onStart(funcData: FunctionData, options: WrapperOptions): boolean;
    onComplete(funcData: FunctionData, options: WrapperOptions): boolean;
    logFunction(funcData: CommonEventData): void;
}
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
    parent: HTMLElement | null;
    key: string | null;
};
//# sourceMappingURL=FunctionWrapper.d.ts.map