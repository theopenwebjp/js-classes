export default class StandardUnitHelper {
    static Unit(): import("./types/ts").Unit;
    static NumberUnit(): import("./types/ts").NumberUnit;
    static getUnit(unitKey: string): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getUnitByName(str: string): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getUnitBySymbol(str: string): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getUnitByExponent(num: number): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getUnitByProperty(prop: keyof import("./types/ts").Unit, val: any): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getNumberWithUnit(num: number, unit: import("./types/ts").Unit): string;
    static getNumberWithBestUnit(num: number): string;
    static getBestUnit(num: number): import("./types/ts").Unit;
    static getUnitWithClosestExponent(exponent: number): import("./types/ts").Unit | null;
    static getNumberParts(num: number): {
        mantissa: string;
        exponent: string;
    };
    static getMeasurementBaseMultipliers(measurement: import("./types/ts").Measurement): {
        [x: string]: number;
    };
    static multipliersToConverters(multipliers: {
        [x: string]: number;
    }): {
        [x: string]: number;
    };
    static getMeasurementMultipliers(mKey: keyof {
        weight: {
            siSymbol: string;
            imperial: {};
        };
        time: {
            siSymbol: string;
            imperial: {
                minute: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
                hour: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
                day: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
                week: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
                month: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
                year: {
                    name: string;
                    symbol: string;
                    multiplier: number;
                };
            };
        };
    }): {
        [x: string]: number;
    };
    static getSiUnitMultipliers(): {
        [x: string]: number;
    };
}
//# sourceMappingURL=StandardUnitHelper.d.ts.map