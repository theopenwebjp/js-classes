export default class InputCopier {
    elements: CopierElements;
    events: CopierEvents;
    state: {
        copy: null;
    };
    setup(): void;
    Page(): {
        elements: PageElements;
        events: PageEvents;
        state: PageState;
        setup(): void;
        Row(obj?: RowOptions | undefined): HTMLElement;
        CalculatedRow(name: string, value: any): HTMLElement;
        formatRows(arr: RowOptions[]): HTMLElement[];
        newRow(): void;
        addRow(row: HTMLElement): void;
        addRows(rows: HTMLElement[]): void;
        deleteRow(row: HTMLElement): HTMLElement | undefined;
        deleteRowFromButton(ev: MouseEvent): void;
        getElement(): HTMLElement;
        getRows(): HTMLElement[];
        toJson(): string;
        fromJson(jsonStr: string): boolean;
    };
    newPage(): object;
    addPage(page: ReturnType<InputCopier['Page']>): void;
    removePage(el: HTMLElement): HTMLElement | undefined;
}
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
//# sourceMappingURL=InputCopier.d.ts.map