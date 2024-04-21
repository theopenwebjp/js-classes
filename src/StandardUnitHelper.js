export const Measurements = {
    weight: {
        siSymbol: 'g',
        imperial: {
            //
        }
    },
    time: {
        siSymbol: 's',
        imperial: {
            minute: {
                name: 'minute',
                symbol: 'min',
                multiplier: 60
            },
            hour: {
                name: 'hour',
                symbol: 'h',
                multiplier: 60 * 60
            },
            day: {
                name: 'day',
                symbol: 'd',
                multiplier: 60 * 60 * 24
            },
            week: {
                name: 'week',
                symbol: 'week',
                multiplier: 60 * 60 * 24 * 7
            },
            month: {
                name: 'month',
                symbol: 'month',
                multiplier: 60 * 60 * 24 * 7 * 30
            },
            year: {
                name: 'year',
                symbol: 'a',
                multiplier: 60 * 60 * 24 * 365.25
            }
        }
    }
}
export const Data = {
    /**
     * @see https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes
     * @see http://www.bipm.org/en/measurement-units/prefixes.html
     */
    units: [
        {
            name: 'deci',
            symbol: 'd',
            exponent: -1
        },
        {
            name: 'centi',
            symbol: 'c',
            exponent: -2
        },
        {
            name: 'milli',
            symbol: 'm',
            exponent: -3
        },
        {
            name: 'micro',
            symbol: 'μ',
            exponent: -6
        },
        {
            name: 'deca',
            symbol: 'da',
            exponent: 1
        },
        {
            name: 'hecto',
            symbol: 'h',
            exponent: 2
        },
        {
            name: 'kilo',
            symbol: 'k',
            exponent: 3
        },
        {
            name: 'mega',
            symbol: 'M',
            exponent: 6
        },
        {
            name: 'giga',
            symbol: 'G',
            exponent: 9
        }
    ],

    measurements: Measurements
}

/**
 * @typedef {typeof Measurements} StandardUnitHelperMeasurements
 * @typedef {{ units: import("./types/ts").Unit[]; measurements: StandardUnitHelperMeasurements }} StandardUnitHelperSettings
 */

/**
 * // (typeof Data)['units'][number]['name']
 * Data.units.map(i => `"${i.name}"`).join(' | ')
 * @typedef {"deci" | "centi" | "milli" | "micro" | "deca" | "hecto" | "kilo" | "mega" | "giga"} DefaultUnitName
 */
/**
 * // (typeof Data)['units'][number]['symbol']
 * Data.units.map(i => `"${i.symbol}"`).join(' | ')
 * @typedef {"d" | "c" | "m" | "μ" | "da" | "h" | "k" | "M" | "G"} DefaultUnitSymbol
 */

/**
 * Collection of functions for handling units.
 * Allows for adding further units.
 */
export default class StandardUnitHelper {
    /**
     * @param {Partial<StandardUnitHelperSettings>} options 
     */
    constructor (options = {}) {
        const settings = {
            ...Data,
            ...options,
        }
        /**
         * @type {StandardUnitHelperSettings}
         */
        this.settings = settings
    }

    /**
     * Alias function for ease-of-use.
     * @param {string} unitKey
     */
     getUnit (unitKey) {
        let defaultUnit = null
        let tempUnit = null

        // Object
        if (typeof unitKey === 'object') {
            return unitKey
        }

        // Number
        if (typeof unitKey === 'number') {
            return this.getUnitByExponent(unitKey)
        }

        // Name
        tempUnit = this.getUnitByName(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        // Symbol
        tempUnit = this.getUnitBySymbol(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        return defaultUnit
    }

    /**
     * @param {string} str
     */
    getUnitByName (str) {
        return this.getUnitByProperty('name', str)
    }

    /**
     * @param {string} str
     */
     getUnitBySymbol (str) {
        return this.getUnitByProperty('symbol', str)
    }

    /**
     * @param {number} num
     */
     getUnitByExponent (num) {
        return this.getUnitByProperty('exponent', num)
    }

    /**
     * @param {keyof import("./types/ts").Unit} prop
     * @param {*} val
     */
     getUnitByProperty (prop, val) {
        const units = this.settings.units
        for (let i = 0; i < units.length; i++) {
            if (units[i][prop] === val) {
                return units[i]
            }
        }

        return null
    }

    /**
     * @param {number} num
     * @param {import("./types/ts").Unit} unit
     * @return {string}
     */
    getNumberWithUnit (num, unit) {
        const numberUnit = StandardUnitHelper.NumberUnit().apply(num, unit)

        return numberUnit.toString()
    }

    /**
     * @param {number} num
     * @return {string}
     */
    getNumberWithBestUnit (num) {
        const unit = this.getBestUnit(num)
        return this.getNumberWithUnit(num, unit)
    }

    /**
     * @param {number} num
     */
    getBestUnit (num) {
        const parts = this.getNumberParts(num)
        const unit = this.getUnitWithClosestExponent(Number(parts.exponent))
        if (!unit) {
            throw new Error('No unit found')
        }

        return unit
    }

    /**
     * Ideal should be following format: [1 DIGIT].[DECIMALS] [EXPONENT]
     * @param {number} exponent
     */
    getUnitWithClosestExponent (exponent) {
        const closest = {
            /**
             * @type {import("./types/ts").Unit|null}
             */
            unit: null,
            difference: Infinity
        }

        const units = this.settings.units
        for (let i = 0; i < units.length; i++) {
            const unit = units[i]
            const difference = Math.abs(unit.exponent - exponent)
            if (difference < closest.difference) {
                closest.unit = unit
                closest.difference = difference
            }
        }

        return closest.unit
    }

    /**
     * Converts e type exponential number to parts.
     * ONLY returns strings. Check should be done elsewhere.
     * @param {number} num
     */
    getNumberParts (num) {
        const str = (num).toExponential()
        const strParts = str.split('e+')

        const parts = {
            mantissa: strParts[0],
            exponent: strParts[1]
        }

        return parts
    }

    /**
     * @private
     * @param {import("./types/ts").Measurement} measurement
     */
    getMeasurementBaseMultipliers (measurement) {
        /**
         * @type {Object<string, number>}
         */
         const multipliers = {}

        // SI
        multipliers[measurement.siSymbol] = 1

        // Imperial
        let imp
        for (let key in measurement.imperial) {
            imp = measurement.imperial[key]
            multipliers[imp.symbol] = imp.multiplier
        }

        return multipliers
    }

    /**
     * @private
     * @param {{ [x: string]: number; }} multipliers
     */
    multipliersToConverters (multipliers) {
        // Multiplier: Input standard unit => Outputs how much larger desired unit is.
        // Converter: Input standard unit value => Outputs value in desired unit.
        /**
         * @type {{ [x: string]: number; }}
         */
        const converters = {}
        for (let key in multipliers) {
            converters[key] = (1 / multipliers[key])
        }

        return converters
    }

    /**
     * @private
     * @param {keyof Measurements} mKey
     */
    getMeasurementMultipliers (mKey) {
        const measurement = this.settings.measurements[mKey]
        const bMultipliers = this.getMeasurementBaseMultipliers(measurement)
        const siUnitMultipliers = this.getSiUnitMultipliers()

        /**
         * @type {Object<string, number>}
         */
         const multipliers = {}
        let bKey, siKey
        for (bKey in bMultipliers) {
            multipliers[bKey] = bMultipliers[bKey]
            for (siKey in siUnitMultipliers) {
                multipliers[siKey + bKey] = (bMultipliers[bKey] * siUnitMultipliers[siKey])
            }
        }

        return multipliers
    }

    /**
     * @private
     */
    getSiUnitMultipliers () {
        const pow = 10
        /**
         * @type {Object<string, number>}
         */
         const multipliers = {}
         const units = this.settings.units
        for (let i = 0; i < units.length; i++) {
            multipliers[units[i].symbol] = Math.pow(pow, units[i].exponent)
        }

        return multipliers
    }

    /**
     * @return {import("./types/ts").Unit}
     */
    static Unit () {
        return {
            name: '',
            symbol: '',
            exponent: 0
        }
    }

    static NumberUnit () {

        /**
         * @type {import("./types/ts").NumberUnit}
         */
         const numberUnit = {
            number: 0,
            unit: null,
            apply: function (num, unit) {
                numberUnit.number = num
                numberUnit.unit = unit

                return numberUnit
            },
            calculate: function () {
                const pow = 10
                return numberUnit.number / (Math.pow(pow, (numberUnit.unit ? numberUnit.unit.exponent : 1)))
            },
            toString: function () {
                const number = numberUnit.calculate()
                return number + (numberUnit.unit ? numberUnit.unit.symbol : '')
            }
        }

        return numberUnit
    }
}
