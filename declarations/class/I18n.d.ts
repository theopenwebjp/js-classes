export default class I18n {
    constructor(settings: TextManagerSettings);
    settings: TextManagerSettings;
    m: (key: string) => string;
    Settings(options?: Partial<TextManagerSettings>): TextManagerSettings;
    Language(): object;
    help(): void;
    setup(options: Partial<TextManagerSettings>): void;
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
//# sourceMappingURL=I18n.d.ts.map