export default class I18n {
    constructor(settings: import("./types/ts").TextManagerSettings);
    settings: import("./types/ts").TextManagerSettings;
    m: (key: string) => string;
    Settings(options?: Partial<import("./types/ts").TextManagerSettings>): import("./types/ts").TextManagerSettings;
    Language(): object;
    help(): void;
    setup(options: Partial<import("./types/ts").TextManagerSettings>): void;
    check(): boolean;
    getLanguage(): string;
    setLanguage(language: string): boolean;
    getDefaultLanguage(): string;
    setDefaultLanguage(language: string): boolean;
    getCurrentLanguageData(): {
        [x: string]: string;
    } | null;
    getDefaultLanguageData(): {
        [x: string]: string;
    } | null;
    getCommonLanguageData(key: 'language' | 'defaultLanguage'): {
        [x: string]: string;
    } | null;
    getMessage(key: string): string;
    getMessageObject(keys: string[]): {
        [x: string]: any;
    };
    getMessageArray(keys: string[]): string[];
    setMessage(key: string, val: string): boolean;
    getAvailableLanguages(): string[];
    setLanguageFromEnvironment(): void;
    setLanguageFromBrowserLanguage(): void;
    setLanguageFromUrlParam(keys?: Partial<{
        current: string;
        default: string;
    }>): {
        current: boolean;
        default: boolean;
    };
}
//# sourceMappingURL=I18n.d.ts.map