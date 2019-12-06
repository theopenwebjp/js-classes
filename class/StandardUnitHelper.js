/**
 * @typedef {object} Unit
 * @property {string} name
 * @property {string} symbol
 * @property {number} exponent
 */


/**
 * Collection of functions for handling units.
 */
var StandardUnitHelper = function() {
    var helper = {}

    helper.settings = {
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

        measurements: {
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
    }

    /**
     * @return {Unit}
     */
    helper.Unit = function() {
        return {
            name: '',
            symbol: '',
            exponent: 0
        }
    }

    /**
     * @return {object}
     */
    helper.NumberUnit = function() {
        /**
         * @typedef {object} NumberUnit
         * @property {number} number
         * @property {string|null} unit
         * @property {function(number, string):NumberUnit} apply
         * @property {function():number} calculate
         * @property {function():string} toString
         */

        /**
         * @type {NumberUnit}
         */
        var numberUnit = {
            number: 0,
            unit: null,
            apply: function(num, unit) {
                numberUnit.number = num
                numberUnit.unit = unit

                return numberUnit
            },
            calculate: function() {
                var pow = 10
                return numberUnit.number / (Math.pow(pow, numberUnit.unit.exponent))
            },
            toString: function() {
                var number = numberUnit.calculate()
                return number + numberUnit.unit.symbol
            }
        }

        return numberUnit
    }

    /**
     * Alias function for ease-of-use.
     * @param {string} unitKey
     * TODO
     */
    helper.getUnit = function(unitKey) {
        var defaultUnit = null
        var tempUnit = null

        // Object
        if (typeof unitKey === 'object') {
            return unitKey
        }

        // Number
        if (typeof unitKey === 'number') {
            return helper.getUnitByExponent(unitKey)
        }

        // Name
        tempUnit = helper.getUnitByName(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        // Symbol
        tempUnit = helper.getUnitBySymbol(unitKey)
        if (tempUnit) {
            return tempUnit
        }

        return defaultUnit
    }

    /**
     * @param {string} str
     * TODO
     */
    helper.getUnitByName = function(str) {
        return helper.getUnitByProperty('name', str)
    }

    /**
     * @param {string} str
     * TODO
     */
    helper.getUnitBySymbol = function(str) {
        return helper.getUnitByProperty('symbol', str)
    }

    /**
     * @param {number} num
     * TODO
     */
    helper.getUnitByExponent = function(num) {
        return helper.getUnitByProperty('exponent', num)
    }

    /**
     * @param {string} prop
     * @param {*} val
     * TODO
     */
    helper.getUnitByProperty = function(prop, val) {
        var units = helper.settings.units
        for (var i = 0; i < units.length; i++) {
            if (units[i][prop] === val) {
                return units[i]
            }
        }

        return null
    }

    /**
     * @param {number} num
     * @param {string} unitKey
     * @return {string}
     */
    helper.getNumberWithUnit = function(num, unitKey) {
        var unit = helper.getUnit(unitKey)
        var numberUnit = helper.NumberUnit().apply(num, unit)

        return numberUnit.toString()
    }

    /**
     * @param {number} num
     * @return {string}
     */
    helper.getNumberWithBestUnit = function(num) {
        var unit = helper.getBestUnit(num)
        return helper.getNumberWithUnit(num, unit)
    }

    /**
     * @param {number} num
     * TODO
     */
    helper.getBestUnit = function(num) {
        var parts = helper.getNumberParts(num)
        var unit = helper.getUnitWithClosestExponent(parts.exponent)

        return unit
    }

    /**
     * Ideal should be following format: [1 DIGIT].[DECIMALS] [EXPONENT]
     * @param {number} exponent
     * @return {string}
     */
    helper.getUnitWithClosestExponent = function(exponent) {
        var closest = {
            unit: null,
            difference: Infinity
        }

        var unit, difference
        var units = helper.settings.units
        for (var i = 0; i < units.length; i++) {
            unit = units[i]
            difference = Math.abs(unit.exponent - exponent)
            if (difference < closest.difference) {
                closest.unit = unit
                closest.difference = difference
            }
        }

        return closest.unit
    }

    /**
     * @param {number} num
     * @return {object}
     */
    helper.getNumberParts = function(num) {
        var str = (num).toExponential()
        var strParts = str.split('e+')

        var parts = {
            mantissa: strParts[0],
            exponent: strParts[1]
        }

        return parts
    }

    /**
     * @param {object} measurements
     * @return {object}
     */
    helper.getMeasurementBaseMultipliers = function(measurements) {
        var multipliers = {}

        // SI
        multipliers[measurements.siSymbol] = 1

        // Imperial
        var imp
        for (var key in measurements.imperial) {
            imp = measurements.imperial[key]
            multipliers[imp.symbol] = imp.multiplier
        }

        return multipliers
    }

    /**
     * @param {object} multipliers
     * @return {object}
     */
    helper.multipliersToConverters = function(multipliers) {
        // Multiplier: Input standard unit => Outputs how much larger desired unit is.
        // Converter: Input standard unit value => Outputs value in desired unit.
        var converters = {}
        for (var key in multipliers) {
            converters[key] = (1 / multipliers[key])
        }

        return converters
    }

    /**
     * @param {string} mKey
     * @return {object}
     */
    helper.getMeasurementMultipliers = function(mKey) {
        var measurements = helper.settings.measurements[mKey]
        var bMultipliers = helper.getMeasurementBaseMultipliers(measurements)
        var siUnitMultipliers = helper.getSiUnitMultipliers()

        var multipliers = {}
        var bKey, siKey
        for (bKey in bMultipliers) {
            multipliers[bKey] = bMultipliers[bKey]
            for (siKey in siUnitMultipliers) {
                multipliers[siKey + bKey] = (bMultipliers[bKey] * siUnitMultipliers[siKey])
            }
        }

        return multipliers
    }

    /**
     * @return {object}
     */
    helper.getSiUnitMultipliers = function() {
        var pow = 10
        var multipliers = {}
        var units = helper.settings.units
        for (var i = 0; i < units.length; i++) {
            multipliers[units[i].symbol] = Math.pow(pow, units[i].exponent)
        }

        return multipliers
    }

    return helper
}