export default class FormManager {
    constructor(settings?: Partial<import("./types/ts").FormManagerSettings> | undefined);
    domHelper: typeof DomHelper;
    constants: {
        REQUIRED_ATTR: string;
    };
    settings: import('./types/ts').FormManagerSettings;
    inputTypes: {
        [x: string]: Partial<import('./types/ts').InputType>;
    };
    extendedTypes: {
        boolean: import('./types/ts').ExtendedType;
    };
    inputObject(): import('./types/ts').InputObject;
    formSettings(): import('./types/ts').FormSettings;
    settingsToForm(settings: import('./types/ts').FormSettings): HTMLFormElement;
    createInputs(settings: import('./types/ts').InputObject[]): HTMLElement[];
    m(key: string): string;
    createInput(settings: import('./types/ts').InputObject): HTMLElement;
    setInputAsRequired(el: HTMLElement): void;
    getRequiredInputs(form: HTMLFormElement): HTMLElement[];
    handleSubmit(ev: Event): boolean;
    checkRequiredInputs(form: HTMLFormElement): boolean;
    checkRequiredInput(el: HTMLElement): boolean;
    getCheckedElements(el: HTMLElement): Element[];
    hasSingleTag(type: string): boolean;
    arrayifyAll(arr: any[]): any[];
    createTag(tagName: string, attributes: import('./types/ts').Dictionary, children?: import('./types/ts').DomElementSettings[]): HTMLElement;
    appendChildren(el: HTMLElement, children: HTMLElement[]): void;
    setAttributes(el: HTMLElement, attributes: import('./types/ts').Dictionary): void;
    getTableHeaderValue(el: HTMLElement): string;
    keyValueObjToArrays(obj: import('./types/ts').Dictionary): Array<[string, any]>;
    attributesToSelector(attributes: import('./types/ts').Dictionary): string;
    inputTypesToSelectors(inputTypes: {
        [x: string]: Partial<import('./types/ts').InputType>;
    }): string[];
    elementsToInputObjects(elements: HTMLElement[]): import('./types/ts').InputObject[];
    elementToInputObject(element: HTMLElement): import('./types/ts').InputObject;
    getLabelElement(element: HTMLElement): HTMLElement | undefined;
    getLabel(element: HTMLElement): string;
    getCurrentPageInputs(options?: Partial<import('./types/ts').PageInputOptions>): HTMLElement[];
    getElementInputType(el: HTMLElement): Partial<import('./types/ts').InputType> | null;
    getInputValue(el: HTMLInputElement | HTMLSelectElement): any;
    setInputValues(map: Object): void;
    setInputValue(el: HTMLInputElement | HTMLSelectElement, val: any): void;
    focusOnFirstInput(el: HTMLElement): void;
    isInput(el: HTMLElement): boolean;
    clickRadioInputs(wrapper: HTMLElement): void;
    enterTextInputs(wrapper: HTMLElement): void;
    enterFormInputs(wrapper: HTMLElement): void;
}
import DomHelper from "./DomHelper.js";
//# sourceMappingURL=FormManager.d.ts.map