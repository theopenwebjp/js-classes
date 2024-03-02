export default class FunctionWrapper {
    settings: {
        events: {
            start: string;
            complete: string;
        };
    };
    status: {
        stackTrace: import('./types/ts').StackTraceData[];
        wrap: import('./types/ts').Wrap;
        disableStackTrace: boolean;
    };
    wrapperOptions(options?: Partial<import('./types/ts').WrapperOptions>): import('./types/ts').WrapperOptions;
    functionData(): import('./types/ts').FunctionData;
    stackTraceData(): import('./types/ts').StackTraceData;
    Reference(): import('./types/ts').Reference;
    WrapStatus(): import('./types/ts').WrapStatus;
    setup(): void;
    simpleWrapFunction(func: Function, before?: Function | undefined, after?: Function | undefined): (this: Function, ...args: any[]) => any;
    handlePreparation(name: string, inPreparation: boolean): boolean;
    setupWrapStatus(wrapperFunction: import('./types/ts').WrapperFunction, func: Function): void;
    handleWrapReference(wrapperFunction: import('./types/ts').WrapperFunction, reference: import('./types/ts').Reference): void;
    public wrapFunction(func: Function, reference: import('./types/ts').Reference, wrapperOptions?: Partial<import('./types/ts').WrapperOptions> | undefined): Function | false;
    createWrapFunction(func: Function, options: import('./types/ts').WrapperOptions): import("./types/ts").WrapperFunction;
    public stackTraceFunctionCombinations(funcs: Function[], callback: (trace: import('./types/ts').StackTraceData[]) => void, obj: object): false | undefined;
    stackTraceFunction(func: Function, returnHandle: (trace: import('./types/ts').StackTraceData[]) => void, obj: object): () => void;
    startStackTrace(obj: {
        [x: string]: any;
    }): void;
    stopStackTrace(): import("./types/ts").StackTraceData[];
    public unwrapFunctions(): void;
    public unwrapFunction(wrapperFunction: import('./types/ts').WrapperFunction): void;
    stackTrace(func: () => void): import("./types/ts").StackTraceData;
    isBad(obj: {
        options: import('./types/ts').WrapperOptions;
        data: any;
    }): boolean;
    isPossibleBad(funcData: import('./types/ts').FunctionData): boolean;
    handleEvent(eventType: 'start' | 'complete', args?: any[]): any;
    wrapObjectFunctions(obj: object, options: object): void;
    deepWrapObjectFunctions(parentObj: {
        [x: string]: any;
    }, options: Partial<import('./types/ts').WrapperOptions>): void;
    attemptWrapObjectFunction(obj: {
        [x: string]: any;
    }, key: string, options: Partial<import('./types/ts').WrapperOptions>): any;
    attemptWrapFunction(data: any, reference: import('./types/ts').Reference, options: Partial<import('./types/ts').WrapperOptions>): any;
    isWrapperFunction(data: any): boolean;
    isWrapForbidden(func: Function): boolean;
    isWrapped(func: import('./types/ts').WrapperFunction): boolean;
    getFunctionData(func: Function, args: any[], returnVal?: any, ...args: any[]): import("./types/ts").FunctionData;
    handleCommonEvent(obj: import('./types/ts').CommonEventData): boolean;
    getCommonEventData(objOptions: Partial<import('./types/ts').CommonEventData>, funcData: import('./types/ts').FunctionData, options: import('./types/ts').WrapperOptions): import("./types/ts").CommonEventData;
    onStart(funcData: import('./types/ts').FunctionData, options: import('./types/ts').WrapperOptions): boolean;
    onComplete(funcData: import('./types/ts').FunctionData, options: import('./types/ts').WrapperOptions): boolean;
    logFunction(funcData: import('./types/ts').CommonEventData): void;
}
//# sourceMappingURL=FunctionWrapper.d.ts.map