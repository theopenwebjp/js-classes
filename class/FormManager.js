const DomHelper = require('./DomHelper')

/**
 * Collection of functions for handling forms.
 * Static class.
 * @param {object} settings
 */
var FormManager = function (settings) { // ??Make static.
  var manager = {}

  manager.domHelper = DomHelper()

  manager.constants = {
    REQUIRED_ATTR: 'data-required'
  }

  /**
     * @typedef {object} FormManagerSettings
     * @property {boolean} useLabel
     * @property {Object<string, string>} text
     */

  /**
     * @type {FormManagerSettings}
     */
  manager.settings = {
    useLabel: false,
    text: {}
  }
  /**
         * @typedef {Object<string, *>} Dictionary
         */

  /**
     * @typedef {object} PageInputOptions
     * @property {boolean} noHidden
     * @property {boolean} hidden
     */

  /**
     * @typedef {object} A
     * @description My description
     * @property {string} b
     */

  /**
     * @typedef {object} C
     * @property {string} d
     * @description My description
     */

  /**
     * @typedef {Object} InputType
     * @property {string} tag
     * @property {boolean} placeholder
     * @property {Object<string, string>} attributes
     * @property {function} format // If handle: Number(val)
     * @property {boolean} multiple
     * @property {function(HTMLElement):*} value // Default = use .value. If handle: (el)=>{return el.value;}.
     * @property {function(HTMLElement, *):void} setValue // Default = use .value. If handle: (el, val)=>{el.value = val;}.
     * @description Object representing settings for an input type in inputTypes. Used for creating inputs.
     */

  /**
     * @typedef {object} InputObject
     * @description Object representing data of input element
     * @property {string} type
     * @property {string} tag
     * @property {Object<string, string>} attributes
     * @property {string} key
     * @property {string} label
     * @property {*[]} values
     * @property {string} rowHeader
     * @property {string} initialSelection
     * @property {boolean} required
     */

  /**
     * @return {InputObject}
     */
  manager.inputObject = function () {
    return {
      type: '',
      tag: '',
      attributes: {},
      key: '', // Specifies unique key. Currently used as name attribute.
      label: '',
      values: [],
      rowHeader: '',
      initialSelection: '',
      required: false
    }
  }

  /**
     * @typedef {object} FormSettings
     * @description Object representing data for creating form
     * @property {string} action
     * @property {string} actionType
     * @property {HTMLElement[]} inputs
     */

  /**
     * @property
     * @return {FormSettings}
     */
  manager.formSettings = function () {
    return {
      action: '',
      actionType: '',
      inputs: []
    }
  }

  /**
     * @type {Object<string, InputType>} // TODO: Why is this not working?
     */
  manager.inputTypes = {
    text: {
      'tag': 'input',
      'placeholder': true,
      'attributes': {
        'type': 'text'
      }
    },
    textarea: {
      'placeholder': true,
      'tag': 'textarea'
    },
    submit: {
      'tag': 'input',
      'attributes': {
        'type': 'submit'
      }
    },
    hidden: {
      'tag': 'input',
      'attributes': {
        'type': 'hidden'
      }
    },
    number: {
      'tag': 'input',
      'attributes': {
        'type': 'number'
      },
      'format': Number
    },
    date: {
      'tag': 'input',
      'attributes': {
        'type': 'date'
      }
    },
    radio: {
      'tag': 'input',
      'attributes': {
        'type': 'radio'
      },
      'multiple': true,
      'value': (el) => {
        return !!el.checked
      },
      'setValue': (el, val) => {
        el.checked = val
      }
    },
    checkbox: {
      'tag': 'input',
      'attributes': {
        'type': 'checkbox'
      },
      'multiple': true,
      'value': (el) => {
        return !!el.checked
      },
      'setValue': (el, val) => {
        el.checked = val
      }
    },
    password: {
      'tag': 'input',
      'attributes': {
        'type': 'password'
      }
    },
    select: {
      'tag': 'select',
      'multiple': true,
      'value': (el) => {
        return el.options[el.selectedIndex].value
      }
    }
  }

  manager.extendedTypes = {
    /**
         * @type {object}
         * @property {string} type
         * @property {function} override
         */
    boolean: {
      type: 'checkbox',
      /**
             * @param {InputType} inputType
             */
      override: function (inputType) {
        inputType.multiple = false
      }
    }
  }

  /**
     * @param {object} settings
     */
  manager.setup = function (settings = {}) {
    for (var key in settings) {
      manager.settings[key] = settings[key]
    }
  }

  /**
     * @param {object} settings
     * @return {HTMLFormElement}
     */
  manager.settingsToForm = function (settings) {
    // Start
    var form = document.createElement('form')
    var action = settings.action
    var actionType = settings.actionType
    form.addEventListener('submit', manager.handleSubmit)
    form.setAttribute('action', action)
    form.setAttribute('actionType', actionType)

    // Inside
    var inputs = manager.createInputs(settings.inputs)
    manager.appendChildren(form, inputs)

    return form
  }

  /**
     * @param {object} settings
     * @return {HTMLElement[]}
     */
  manager.createInputs = function (settings) {
    /**
         * @type {HTMLElement[]}
         */
    var inputs = []
    for (var key in settings) {
      let input = settings[key]
      input.key = key

      inputs.push(manager.createInput(input))
    }

    return inputs
  }

  /**
     * @param {string} key
     * @return {string}
     */
  manager.m = function (key) {
    return manager.settings.text[key]
  }

  /**
     * Input: <div><label>name</label> <div>{INPUT}</div></div>
     * @param {InputObject} settings
     * @return {HTMLElement}
     */
  manager.createInput = function (settings) {
    /**
         * @type {HTMLElement[]}
         */
    var children = []
    /**
     * @type {HTMLElement|}
     */
    var el

    var NAME_SUFFIX = ': '
    var useLabel = manager.settings.useLabel

    // Wrapper
    var input = document.createElement('div')

    var info = manager.inputTypes[settings.type]

    // Name
    var name = manager.m(settings.key)
    var nameEl = document.createElement('label')
    nameEl.textContent = name + NAME_SUFFIX
    if (!useLabel) {
      nameEl.style.display = 'none'
    }

    // Get tag
    settings.tag = info.tag

    // Check tag
    if (manager.hasSingleTag(settings.type)) {
      /**
             * @type {object}
             * @property {string} type
             * @property {string} name
             */
      var attributes = {
        type: settings.type,
        name: settings.key
      }
      if (info.placeholder) {
        attributes.placeholder = name
      }

      el = manager.createTag(
        settings.tag,
        attributes,
        children
      )
    } else if (settings.tag === 'radio') { // Radio
      for (let i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag(settings.tag, {
          type: 'radio',
          name: settings.key,
          value: settings.values[i]
        }))
      }
      el = manager.createTag('div', {}, children)
    } else if (settings.tag === 'checkbox') { // Checkbox
      for (let i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag(settings.tag, {
          type: 'checkbox',
          name: settings.key,
          value: settings.values[i]
        }))
      }
      el = manager.createTag('div', {}, children)
    } else if (settings.tag === 'select') { // Select
      for (let i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag('option', {
          value: settings.values[i]
        }))
      }
      el = manager.createTag('select', { name: settings.key }, children)
    }

    if (settings.required) {
      manager.setInputAsRequired(el)
    }

    input.appendChild(nameEl)
    input.appendChild(document.createElement('div').appendChild(el))

    return input
  }

  /**
     * @param {HTMLElement} el
     */
  manager.setInputAsRequired = function (el) {
    el.setAttribute(manager.constants.REQUIRED_ATTR, true)
  }

  /**
     * @param {HTMLElement} form
     * TODO
     */
  manager.getRequiredInputs = function (form) { // TODO: form not used.
    return manager.domHelper.getElementsWithAttribute(manager.constants.REQUIRED_ATTR)
  }

  /**
     * @param {Event} ev
     * @return {boolean}
     */
  manager.handleSubmit = function (ev) { // ??Not called bug.
    var form = ev.target
    var bool = manager.checkRequiredInputs(form)
    if (!bool || bool) {
      window.alert('Please fill in all required inputs.')
    }

    return bool
  }

  /**
     * @param {HTMLElement} form
     * @return {boolean}
     */
  manager.checkRequiredInputs = function (form) {
    var inputs = manager.getRequiredInputs(form)
    for (var i = 0; i < inputs.length; i++) {
      // FAILED
      if (!manager.checkRequiredInput(inputs[i])) {
        return false
      }
    }

    // PASSED
    return true
  }

  /**
     * @param {HTMLElement} el
     * @return boolean
     */
  manager.checkRequiredInput = function (el) {
    /*
                            checkbox: .checked length > 0
                            radio: .checked has true
                            select: always selected.
                            */

    var type = el.getAttribute('type')

    // Checked
    if (
      el.tagName === 'input' &&
            (type === 'radio' || type === 'checkbox') &&
            manager.getCheckedElements(el).length === 0
    ) {
      return false
    } else if (el.tagName === 'input' && !el.value) { // Input default
      return false
    }

    // PASSED
    return true
  }

  /**
     * @param {HTMLElement} el
     * @return {Element[]}
     */
  manager.getCheckedElements = function (el) {
    const elements = [...el.children]

    return elements.filter(element => element.checked)
  }

  /**
     * @param {string} type
     * @return {boolean}
     */
  manager.hasSingleTag = function (type) {
    if (!manager.inputTypes[type].multiple) {
      return true
    } else {
      return false
    }
  }

  /**
     * @param {*[]} arr
     * @return {*[]}
     */
  manager.arrayifyAll = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = [arr[i]]
    }

    return arr
  }

  /**
     * @param {string} tagName
     * @param {Dictionary} attributes
     * @param {HTMLElement[]} children
     * @return {HTMLElement}
     */
  manager.createTag = function (tagName, attributes, children = []) {
    return manager.domHelper.createElement({
      tag: tagName,
      attributes: attributes,
      children: children
    })
  }

  /**
     * @param {HTMLElement} el
     * @param {HTMLElement[]} children
     */
  manager.appendChildren = function (el, children) {
    manager.domHelper.appendChildren(el, children)
  }

  /**
     * @param {HTMLElement} el
     * @param {Dictionary} attributes
     */
  manager.setAttributes = function (el, attributes) {
    manager.domHelper.setAttributes(el, attributes)
  }

  /**
     * @param {HTMLElement} el
     * @return {string}
     */
  manager.getTableHeaderValue = function (el) {
    var parentEl = manager.domHelper.getClosestParent(el, 'th')
    return (parentEl ? parentEl.textContent : '') // TODO: failOnFalsy
  }

  /**
     * @param {Dictionary} obj
     * @return {Array<[string, *]>}
     */
  manager.keyValueObjToArrays = function (obj) {
    /*
                            {
                              key1, val1,
                              keyn, valn,
                              ...
                            }

                            >>

                            [
                              [key1, val1]
                              [keyn, valn]
                              ....
                            ]
                            */

    /**
         * @type {Array<[string, *]>}
         */
    var arr = []

    for (var key in obj) {
      arr.push(
        [key, obj[key]]
      )
    }

    return arr
  }

  /**
     * @param {Dictionary} attributes
     * @return {string}
     */
  manager.attributesToSelector = function (attributes) {
    var selector = ''
    for (var key in attributes) {
      selector += '[' + key + '=' + attributes[key] + ']'
    }

    return selector
  }

  /**
     * @param {Object<string, InputType>} inputTypes
     * @return {string[]}
     */
  manager.inputTypesToSelectors = function (inputTypes) {
    /**
         * @type {string[]}
         */
    const selectors = []
    for (var key in inputTypes) {
      let inputType = inputTypes[key]
      let selector = ''

      if (inputType.tag) { selector += ' ' + inputType.tag }
      if (inputType.attributes) { selector += manager.attributesToSelector(inputType.attributes) }

      selectors.push(selector)
    }

    return selectors
  }

  /**
     * @param {HTMLElement[]} elements
     * @return {InputObject[]}
     */
  manager.elementsToInputObjects = function (elements) {
    var inputs = []
    for (var i = 0; i < elements.length; i++) {
      inputs.push(manager.elementToInputObject(elements[i]))
    }

    return inputs
  }

  /**
     * Should keep only necessary information for editing
     * @param {HTMLElement} element
     * @return {InputObject}
     */
  manager.elementToInputObject = function (element) {
    var obj = manager.inputObject()

    obj.tag = element.tagName
    obj.attributes = manager.domHelper.getElementAttributes(element)

    if (element.value) { // TODO: type guard.
      obj.values.push(element.value)
    }

    obj.label = manager.getLabel(element)
    obj.rowHeader = manager.getTableHeaderValue(element)
    if (obj.tag === 'select' && element.options.length > 0) { // TODO: Cast to select
      obj.initialSelection = element.options[0]
    }

    return obj
  }

  /**
     * @param {HTMLElement} element
     * @return {HTMLElement|undefined}
     */
  manager.getLabelElement = function (element) {
    var labelEl

    // By wrap
    var p = element.parentElement
    if (p && p.tagName === 'label') {
      labelEl = p
    }

    // By id
    var id = element.getAttribute('id')
    if (id) {
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
      // Not connected to form by spec.
      var elements = document.querySelectorAll('[for=' + id + ']')
      if (elements[0]) {
        labelEl = elements[0]
      }
    }

    return labelEl
  }

  /**
     * @param {HTMLElement} element
     * @return {string}
     */
  manager.getLabel = function (element) {
    var label = ''
    var labelEl = manager.getLabelElement(element)

    if (labelEl) {
      label = labelEl.textContent
    }

    return label
  }

  /**
     * @param {PageInputOptions} options
     * @return {HTMLElement[]}
     */
  manager.getCurrentPageInputs = function (options = {}) {
    // Settings
    var settings
    if (options.noHidden) {
      settings = Object.assign({}, options)
      delete settings.hidden
    } else {
      settings = manager.inputTypes
    }

    var selectors = manager.inputTypesToSelectors(settings)
    var elements = manager.domHelper.getElementsBySelectors(selectors)

    return elements
  }

  /**
     * Gets input type from element
     * @param {HTMLElement} el
     * @return {Object} InputType. Default if not found.
     */
  manager.getElementInputType = function (el) {
    const settings = manager.inputTypes
    let type = null // DEFAULT
    for (let key in settings) {
      const setting = settings[key]

      // Tag
      if (setting.tag !== el.tagName.toLowerCase()) {
        continue
      }

      // Attributes
      if (setting.attributes) {
        for (let kkey in setting.attributes) {
          if (el.getAttribute(key) !== setting.attributes[kkey]) {
            continue
          }
        }
      }

      type = setting
      break
    }

    return type
  }

  /**
     * Gets input value of any form element.
     * @param {HTMLElement} el
     * @return {*} input value
     */
  manager.getInputValue = function (el) {
    const type = manager.getElementInputType(el)
    let val = (typeof type.value === 'function') ? type.value(el) : el.value
    if (type.format) {
      val = type.format(val)
    }

    return val
  }

  /**
     * Sets input values from a map
     * @param {Object} map {selector1: val1, ...}
     */
  manager.setInputValues = function (map) {
    for (let selector in map) {
      const val = map[selector]
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        manager.setInputValue(el, val)
      })
    }
  }

  /**
     * Sets single input element's value
     * @param {HTMLElement} el
     * @param {*} val
     */
  manager.setInputValue = function (el, val) {
    const type = manager.getElementInputType(el)
    if (type.setValue) {
      type.setValue(el, val)
    } else {
      el.value = val
    }
  }

  /**
     * Focuses on first element found.
     * Useful for having forms that auto focus.
     * @param {HTMLElement} el
     */
  manager.focusOnFirstInput = function (el) {
    const getFirstInput = (el) => {
      const children = [...el.children]
      for (let i = 0; i < children.length; i++) {
        let child = children[i]

        if (manager.isInput(child)) {
          return child
        }
      }
      return null
    }

    const input = getFirstInput(el)
    if (input) {
      input.focus()
    }
  }

  /**
     * @param {HTMLElement} el
     * @return {boolean}
     */
  manager.isInput = function (el) {
    return !manager.getElementInputType(el)
  }

  manager.setup(settings)

  return manager
}

if (typeof window === 'object') {
  window.FormManager = FormManager
}
if (typeof module !== 'undefined') {
  module.exports = FormManager
}
