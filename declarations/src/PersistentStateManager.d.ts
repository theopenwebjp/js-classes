export default class PersistentStateManager {
    settings: {
        defaultMethod: string;
    };
    fixMethod(method?: string): string;
    get(key: string, method: string): any | boolean;
    set(key: string, value: string, method: string): boolean;
}
//# sourceMappingURL=PersistentStateManager.d.ts.map