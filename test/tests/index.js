import * as JsClasses from '../../src/index.js'
import chai from 'chai'

describe('index.js', function () {
  it('Default test. Mechanism check ONLY', function() {
    chai.expect(JsClasses && typeof JsClasses === 'object')
  })
})
