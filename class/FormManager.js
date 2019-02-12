const DomHelper = require('./DomHelper')

/**
 * Collection of functions for handling forms.
 * Static class.
 */
var FormManager = function (settings) { // ??Make static.
  var manager = {}

  manager.domHelper = new DomHelper()

  manager.constants = {
    REQUIRED_ATTR: 'data-required'
  }

  manager.settings = {
    useLabel: false,
    text: {}
  }

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
    boolean: {
      type: 'checkbox',
      override: function (inputType) {
        inputType.multiple = false
      }
    }
  }

  /**
   * Object representing settings for an input type in inputTypes.
   * Used for creating inputs.
   */
  manager.InputType = function () {
    return {
      tag: '',
      attributes: {},
      multiple: false,
      value: null, // Default = use .value. If handle: (el)=>{return el.value;}.
      setValue: null, // Default = use .value. If handle: (el, val)=>{el.value = val;}.
      format: null// If handle: Number(val)
    }
  }

  /**
   * Object representing data of input element
   */
  manager.InputObject = function () {
    return {
      type: '',
      tag: '',
      attributes: {},
      label: '',
      values: [],
      rowHeader: '',
      initialSelection: ''
    }
  }

  /**
   * ??Seems to be for same purpose as InputObject. CHECK!!!
   */
  manager.InputSettings = function () {
    return {
      type: '',
      tag: '',
      key: '',
      values: [],
      required: false
    }
  }

  /**
   * Object representing data for creating form
   */
  manager.FormSettings = function () {
    return {
      action: '',
      actionType: '',
      inputs: []
    }
  }

  manager.setup = function (settings) {
    if (!settings) {
      settings = {}
    }

    for (var key in settings) {
      manager.settings[key] = settings[key]
    }
  }

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

  manager.createInputs = function (settings) {
    var inputs = []
    var input
    for (var key in settings) {
      input = settings[key]
      input.key = key

      inputs.push(manager.createInput(input))
    }

    return inputs
  }

  manager.m = function (key) {
    return manager.settings.text[key]
  }

  /**
   * Input: <div><label>name</label> <div>{INPUT}</div></div>
   * @param {Object} settings: InputSettings
   */
  manager.createInput = function (settings) {
    var children = []
    var i
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
      for (i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag(settings.tag, {
          type: 'radio',
          name: settings.key,
          value: settings.values[i]
        }, null))
      }
      el = manager.createTag('div', {}, children)
    } else if (settings.tag === 'checkbox') { // Checkbox
      for (i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag(settings.tag, {
          type: 'checkbox',
          name: settings.key,
          value: settings.values[i]
        }, null))
      }
      el = manager.createTag('div', {}, children)
    } else if (settings.tag === 'select') { // Select
      for (i = 0; i < settings.values.length; i++) {
        children.push(manager.createTag('option', {
          value: settings.values[i]
        }, null))
      }
      el = manager.createTag('select', {name: settings.key}, children)
    }

    if (settings.required) {
      manager.setInputAsRequired(el)
    }

    input.appendChild(nameEl)
    input.appendChild(document.createElement('div').appendChild(el))

    return input
  }

  manager.setInputAsRequired = function (el) {
    el.setAttribute(manager.constants.REQUIRED_ATTR, true)
  }

  manager.getRequiredInputs = function (form) {
    return manager.domHelper.getElementsWithAttribute(manager.constants.REQUIRED_ATTR)
  }

  manager.handleSubmit = function (ev) { // ??Not called bug.
    var form = ev.target
    var bool = manager.checkRequiredInputs(form)
    if (!bool || bool) {
      window.alert('Please fill in all required inputs.')
    }

    return bool
  }

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
      manager.getCheckedElements(el) === 0
    ) {
      return false
    } else if (el.tagName === 'input' && !el.value) { // Input default
      return false
    }

    // PASSED
    return true
  }

  manager.getCheckedElements = function (el) {
    var elements = el.children
    var checked = []

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].checked) { checked.push(elements[i]) }
    }

    return checked
  }

  manager.hasSingleTag = function (type) {
    if (!manager.inputTypes[type].multiple) {
      return true
    } else {
      return false
    }
  }

  manager.arrayifyAll = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = [arr[i]]
    }

    return arr
  }

  manager.createTag = function (tagName, attributes, children) {
    return manager.domHelper.createElement({
      tag: tagName,
      attributes: attributes,
      children: children
    })
  }

  manager.appendChildren = function (el, children) {
    manager.domHelper.appendChildren(el, children)
  }

  manager.setAttributes = function (el, attributes) {
    manager.domHelper.setAttributes(el, attributes)
  }

  manager.getTableHeaderValue = function (el) {
    var parentEl = manager.domHelper.getClosestParent(el, 'th')
    return (parentEl ? parentEl.textContent : '')
  }

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

    var arr = []

    for (var key in obj) {
      arr.push(
        [key, obj[key]]
      )
    }

    return arr
  }

  manager.attributesToSelector = function (attributes) {
    var selector = ''
    for (var key in attributes) {
      selector += '[' + key + '=' + attributes[key] + ']'
    }

    return selector
  }

  manager.inputTypesToSelectors = function (inputTypes) {
    var selectors = []
    var selector, inputType
    for (var key in inputTypes) {
      inputType = inputTypes[key]
      selector = ''

      if (inputType.tag) { selector += ' ' + inputType.tag }
      if (inputType.attributes) { selector += manager.attributesToSelector(inputType.attributes) }

      selectors.push(selector)
    }

    return selectors
  }

  manager.elementsToInputObjects = function (elements) {
    var inputs = []
    for (var i = 0; i < elements.length; i++) {
      inputs.push(manager.elementToInputObject(elements[i]))
    }

    return inputs
  }

  manager.elementToInputObject = function (element) {
    /*
    Should keep only necessary information for editing
    */

    var obj = manager.InputObject()

    obj.tag = element.tagName
    obj.attributes = manager.domHelper.getElementAttributes(element)

    if (element.value) {
      obj.values.push(element.value)
    }

    obj.label = manager.getLabel(element)
    obj.rowHeader = manager.getTableHeaderValue(element)
    if (obj.tag === 'select' && element.options.length > 0) {
      obj.initialSelection = element.options[0]
    }

    return obj
  }

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

  manager.getLabel = function (element) {
    var label = ''
    var labelEl = manager.getLabelElement(element)

    if (labelEl) {
      label = labelEl.textContent
    }

    return label
  }

  manager.getCurrentPageInputs = function (options) {
    if (!options) { options = {} }

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
   * @return {Object} InputType. Default if not found.
   */
  manager.getElementInputType = function (el) {
    const settings = manager.inputTypes
    let type = null// DEFAULT
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
   * @param {DomElement} el
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
   * @param {DomElement} el
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
   * @param {DOMElement} el
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
