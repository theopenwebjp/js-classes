export default class FormManager {
    constructor(settings?: Partial<import("./types/ts").FormManagerSettings> | undefined);
    settings: import('./types/ts').FormManagerSettings;
    inputTypes: {
        [x: string]: Partial<import('@theopenweb/js-functions/declarations/types/ts').InputType>;
    };
    extendedTypes: {
        boolean: import('./types/ts').ExtendedType;
    };
    settingsToForm(settings: import('@theopenweb/js-functions/declarations/types/ts').FormSettings): HTMLFormElement;
    createInputs(settings: import('@theopenweb/js-functions/declarations/types/ts').InputObject[]): HTMLElement[];
    m(key: string): string;
    createInput(settings: import('@theopenweb/js-functions/declarations/types/ts').InputObject): HTMLElement;
    hasSingleTag(type: string): boolean;
    getCurrentPageInputs(options?: Partial<import('./types/ts').PageInputOptions>): HTMLElement[];
    getElementInputType(el: HTMLElement): Partial<import('@theopenweb/js-functions/declarations/types/ts').InputType> | null;
    getInputValue(el: HTMLInputElement | HTMLSelectElement): any;
    setInputValues(map: Object): void;
    setInputValue(el: HTMLInputElement | HTMLSelectElement, val: any): void;
    focusOnFirstInput(el: HTMLElement): void;
    isInput(el: HTMLElement): boolean;
}
//# sourceMappingURL=FormManager.d.ts.map