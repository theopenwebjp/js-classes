/**
 * @typedef {Object} Unit
 * @property {string} name
 * @property {string} symbol
 * @property {number} exponent
 */

/**
 * @typedef {Object} ImperialUnit
 * @property {string} name
 * @property {string} symbol
 * @property {number} multiplier
 */

/**
 * @typedef {Object} Measurement
 * @property {string} siSymbol
 * @property {Object<string, ImperialUnit>} imperial
 */

/**
 * @typedef {object} NumberUnit
 * @property {number} number
 * @property {Unit|null} unit
 * @property {(num: number, unit: Unit) => NumberUnit} apply
 * @property {function():number} calculate
 * @property {function():string} toString
 */

const Measurements = {
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
const Data = {
    // https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes
    // http://www.bipm.org/en/measurement-units/prefixes.html
    units: [{
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

const helper = {
    settings: Data
}

/**
 * Collection of functions for handling units.
 */
export default class StandardUnitHelper {

    /**
     * @return {Unit}
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
         * @type {NumberUnit}
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

    /**
     * Alias function for ease-of-use.
     * @param {string} unitKey
     * TODO
     */
     static getUnit (unitKey) {
        let defaultUnit = null
        let tempUnit = null

        // Object
        if (typeof unitKey === 'object') {
            return unitKey
        }

        // Number
        if (typeof unitKey === 'number') {
            return StandardUnitHelper.getUnitByExponent(unitKey)
        }

        // Name
        tempUnit = StandardUnitHelper.getUnitByName(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        // Symbol
        tempUnit = StandardUnitHelper.getUnitBySymbol(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        return defaultUnit
    }

    /**
     * @param {string} str
     * TODO
     */
     static getUnitByName (str) {
        return StandardUnitHelper.getUnitByProperty('name', str)
    }

    /**
     * @param {string} str
     * TODO
     */
     static getUnitBySymbol (str) {
        return StandardUnitHelper.getUnitByProperty('symbol', str)
    }

    /**
     * @param {number} num
     * TODO
     */
     static getUnitByExponent (num) {
        return StandardUnitHelper.getUnitByProperty('exponent', num)
    }

    /**
     * @param {keyof Unit} prop
     * @param {*} val
     * TODO
     */
     static getUnitByProperty (prop, val) {
        const units = helper.settings.units
        for (let i = 0; i < units.length; i++) {
            if (units[i][prop] === val) {
                return units[i]
            }
        }

        return null
    }

    /**
     * @param {number} num
     * @param {Unit} unit
     * @return {string}
     */
     static getNumberWithUnit (num, unit) {
        const numberUnit = StandardUnitHelper.NumberUnit().apply(num, unit)

        return numberUnit.toString()
    }

    /**
     * @param {number} num
     * @return {string}
     */
     static getNumberWithBestUnit (num) {
        const unit = StandardUnitHelper.getBestUnit(num)
        return StandardUnitHelper.getNumberWithUnit(num, unit)
    }

    /**
     * @param {number} num
     */
     static getBestUnit (num) {
        const parts = StandardUnitHelper.getNumberParts(num)
        const unit = StandardUnitHelper.getUnitWithClosestExponent(Number(parts.exponent))
        if (!unit) {
            throw new Error('No unit found')
        }

        return unit
    }

    /**
     * Ideal should be following format: [1 DIGIT].[DECIMALS] [EXPONENT]
     * @param {number} exponent
     */
     static getUnitWithClosestExponent (exponent) {
        const closest = {
            /**
             * @type {Unit|null}
             */
            unit: null,
            difference: Infinity
        }

        const units = helper.settings.units
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
     static getNumberParts (num) {
        const str = (num).toExponential()
        const strParts = str.split('e+')

        const parts = {
            mantissa: strParts[0],
            exponent: strParts[1]
        }

        return parts
    }

    /**
     * @param {Measurement} measurement
     */
     static getMeasurementBaseMultipliers (measurement) {
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
     * @param {{ [x: string]: number; }} multipliers
     */
     static multipliersToConverters (multipliers) {
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
     * @param {keyof Measurements} mKey
     */
     static getMeasurementMultipliers (mKey) {
        const measurement = helper.settings.measurements[mKey]
        const bMultipliers = StandardUnitHelper.getMeasurementBaseMultipliers(measurement)
        const siUnitMultipliers = StandardUnitHelper.getSiUnitMultipliers()

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

    static getSiUnitMultipliers () {
        const pow = 10
        /**
         * @type {Object<string, number>}
         */
         const multipliers = {}
         const units = helper.settings.units
        for (let i = 0; i < units.length; i++) {
            multipliers[units[i].symbol] = Math.pow(pow, units[i].exponent)
        }

        return multipliers
    }
}
