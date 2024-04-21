import * as JsClasses from '../../src/index.js'
import { StandardUnitHelper } from '../../src/index.js'
import chai, { expect } from 'chai'

describe('index.js', function () {
  it('Default test. Mechanism check ONLY', function () {
    chai.expect(JsClasses && typeof JsClasses === 'object')
  })
})

describe('StandardUnitHelper.js', function () {
  // Name: "deci" | "centi" | "milli" | "micro" | "deca" | "hecto" | "kilo" | "mega" | "giga"
  // Symbol: "d" | "c" | "m" | "μ" | "da" | "h" | "k" | "M" | "G"

  it('tests OK', () => {
    expect(() => {
      const h = new StandardUnitHelper()
      const responses = ({
        getUnit: [
          h.getUnit('deci'),
          h.getUnit('d'),
        ],

        getUnitByName: h.getUnitByName('deci'),

        getUnitBySymbol: h.getUnitBySymbol('d'),

        getUnitByExponent: h.getUnitByExponent(-1),

        getUnitByProperty: h.getUnitByProperty('name', 'deci'),

        getNumberWithUnit: h.getNumberWithUnit(123, h.settings.units[0]),

        getNumberWithBestUnit: h.getNumberWithBestUnit(123456),

        getBestUnit: h.getBestUnit(123456),

        getUnitWithClosestExponent: h.getUnitWithClosestExponent(123456),

        getNumberParts: h.getNumberParts(123456.123456),
      })
      console.debug({ responses })
      return responses
    }).not.throw()
  })
})
