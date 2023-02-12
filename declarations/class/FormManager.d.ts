export default class FormManager {
    constructor(settings?: Partial<FormManagerSettings> | undefined);
    domHelper: typeof DomHelper;
    constants: {
        REQUIRED_ATTR: string;
    };
    settings: FormManagerSettings;
    inputTypes: {
        [x: string]: Partial<InputType>;
    };
    extendedTypes: {
        boolean: ExtendedType;
    };
    inputObject(): InputObject;
    formSettings(): FormSettings;
    settingsToForm(settings: FormSettings): HTMLFormElement;
    createInputs(settings: InputObject[]): HTMLElement[];
    m(key: string): string;
    createInput(settings: InputObject): HTMLElement;
    setInputAsRequired(el: HTMLElement): void;
    getRequiredInputs(form: HTMLFormElement): HTMLElement[];
    handleSubmit(ev: Event): boolean;
    checkRequiredInputs(form: HTMLFormElement): boolean;
    checkRequiredInput(el: HTMLElement): boolean;
    getCheckedElements(el: HTMLElement): Element[];
    hasSingleTag(type: string): boolean;
    arrayifyAll(arr: any[]): any[];
    createTag(tagName: string, attributes: Dictionary, children?: import('./DomHelper').DomElementSettings[]): HTMLElement;
    appendChildren(el: HTMLElement, children: HTMLElement[]): void;
    setAttributes(el: HTMLElement, attributes: Dictionary): void;
    getTableHeaderValue(el: HTMLElement): string;
    keyValueObjToArrays(obj: Dictionary): Array<[string, any]>;
    attributesToSelector(attributes: Dictionary): string;
    inputTypesToSelectors(inputTypes: {
        [x: string]: Partial<InputType>;
    }): string[];
    elementsToInputObjects(elements: HTMLElement[]): InputObject[];
    elementToInputObject(element: HTMLElement): InputObject;
    getLabelElement(element: HTMLElement): HTMLElement | undefined;
    getLabel(element: HTMLElement): string;
    getCurrentPageInputs(options?: Partial<PageInputOptions>): HTMLElement[];
    getElementInputType(el: HTMLElement): Partial<InputType> | null;
    getInputValue(el: HTMLInputElement | HTMLSelectElement): any;
    setInputValues(map: Object): void;
    setInputValue(el: HTMLInputElement | HTMLSelectElement, val: any): void;
    focusOnFirstInput(el: HTMLElement): void;
    isInput(el: HTMLElement): boolean;
    clickRadioInputs(wrapper: HTMLElement): void;
    enterTextInputs(wrapper: HTMLElement): void;
    enterFormInputs(wrapper: HTMLElement): void;
}
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
export type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
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
import DomHelper from "./DomHelper";
//# sourceMappingURL=FormManager.d.ts.map