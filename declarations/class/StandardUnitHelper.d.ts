export default class StandardUnitHelper {
    static Unit(): Unit;
    static NumberUnit(): NumberUnit;
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
    static getUnitByProperty(prop: keyof Unit, val: any): {
        name: string;
        symbol: string;
        exponent: number;
    } | null;
    static getNumberWithUnit(num: number, unit: Unit): string;
    static getNumberWithBestUnit(num: number): string;
    static getBestUnit(num: number): Unit;
    static getUnitWithClosestExponent(exponent: number): Unit | null;
    static getNumberParts(num: number): {
        mantissa: string;
        exponent: string;
    };
    static getMeasurementBaseMultipliers(measurement: Measurement): {
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
export type Unit = {
    name: string;
    symbol: string;
    exponent: number;
};
export type ImperialUnit = {
    name: string;
    symbol: string;
    multiplier: number;
};
export type Measurement = {
    siSymbol: string;
    imperial: {
        [x: string]: ImperialUnit;
    };
};
export type NumberUnit = {
    number: number;
    unit: Unit | null;
    apply: (num: number, unit: Unit) => NumberUnit;
    calculate: () => number;
    toString: () => string;
};
//# sourceMappingURL=StandardUnitHelper.d.ts.map