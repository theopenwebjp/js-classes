export default class InputCopier {
    elements: import("./types/ts").CopierElements;
    events: import("./types/ts").CopierEvents;
    state: {
        copy: any;
    };
    setup(): void;
    Page(): {
        elements: import("./types/ts").PageElements;
        events: import("./types/ts").PageEvents;
        state: import("./types/ts").PageState;
        setup(): void;
        Row(obj?: import("./types/ts").RowOptions | undefined): HTMLElement;
        CalculatedRow(name: string, value: any): HTMLElement;
        formatRows(arr: import("./types/ts").RowOptions[]): HTMLElement[];
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
//# sourceMappingURL=InputCopier.d.ts.map