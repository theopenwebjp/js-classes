import DomHelper from './DomHelper.js'

/**
 * Collection of functions for handling forms.
 * Static class.
 */
export default class FormManager {

  /**
   * @param {Partial<import('./types/ts').FormManagerSettings>} [settings]
   */
  constructor(settings = {}) {
    this.domHelper = DomHelper

    this.constants = {
      REQUIRED_ATTR: 'data-required'
    }

    /**
     * @type {import('./types/ts').FormManagerSettings}
     */
    this.settings = Object.assign({
      useLabel: false,
      text: {}
    }, settings)

    /**
     * @type {Object<string, Partial<import('./types/ts').InputType>>}
     */
    this.inputTypes = {
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
          if (!(el instanceof HTMLInputElement)) throw new Error('Not HTMLInputElement')
          return !!el.checked
        },
        /**
         * @param {boolean} val
         */
        'setValue': (el, val) => {
          if (!(el instanceof HTMLInputElement)) throw new Error('Not HTMLInputElement')
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
          if (!(el instanceof HTMLInputElement)) throw new Error('Not HTMLInputElement')
          return !!el.checked
        },
        /**
         * @param {boolean} val
         */
        'setValue': (el, val) => {
          if (!(el instanceof HTMLInputElement)) throw new Error('Not HTMLInputElement')
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
          if (!(el instanceof HTMLSelectElement)) throw new Error('Not HTMLSelectElement')
          return el.options[el.selectedIndex].value
        }
      }
    }

    this.extendedTypes = {
      /**
       * @type {import('./types/ts').ExtendedType}
       */
      boolean: {
        type: 'checkbox',
        /**
         * @param {import('./types/ts').InputType} inputType
         */
        override: function (inputType) {
          inputType.multiple = false
        }
      }
    }
  }

  /**
   * @return {import('./types/ts').InputObject}
   */
  inputObject() {
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
   * @return {import('./types/ts').FormSettings}
   */
  formSettings() {
    return {
      action: '',
      actionType: '',
      inputs: []
    }
  }

  /**
   * @param {import('./types/ts').FormSettings} settings
   * @return {HTMLFormElement}
   */
  settingsToForm(settings) {
    // Start
    const form = document.createElement('form')
    const action = settings.action
    const actionType = settings.actionType
    form.addEventListener('submit', this.handleSubmit)
    form.setAttribute('action', action)
    form.setAttribute('actionType', actionType)

    // Inside
    const inputs = this.createInputs(settings.inputs)
    this.appendChildren(form, inputs)

    return form
  }

  /**
   * @param {import('./types/ts').InputObject[]} settings
   * @return {HTMLElement[]}
   */
  createInputs(settings) {
    /**
     * @type {HTMLElement[]}
     */
    const inputs = []
    for (let key in settings) {
      let input = settings[key]
      // input.key = key // If settings is Record<string, InputObject>

      inputs.push(this.createInput(input))
    }

    return inputs
  }

  /**
   * @param {string} key
   * @return {string}
   */
  m(key) {
    return this.settings.text[key]
  }

  /**
   * Input: <div><label>name</label> <div>{INPUT}</div></div>
   * @param {import('./types/ts').InputObject} settings
   * @return {HTMLElement}
   */
  createInput(settings) {
    /**
     * @type {import('./types/ts').DomElementSettings[]}
     */
    const children = []
    /**
     * @type {HTMLElement|undefined}
     */
    let el

    const NAME_SUFFIX = ': '
    const useLabel = this.settings.useLabel

    // Wrapper
    const input = document.createElement('div')

    const info = this.inputTypes[settings.type]

    // Name
    const name = this.m(settings.key)
    const nameEl = document.createElement('label')
    nameEl.textContent = name + NAME_SUFFIX
    if (!useLabel) {
      nameEl.style.display = 'none'
    }
    input.appendChild(nameEl)

    // Get tag
    settings.tag = info.tag || ''

    // Check tag
    if (this.hasSingleTag(settings.type)) {
      /**
       * @type {import('./types/ts').InputAttributes}
       */
      const attributes = {
        type: settings.type,
        name: settings.key,
        placeholder: ''
      }
      if (info.placeholder) {
        attributes.placeholder = name
      }

      el = this.createTag(
        settings.tag,
        attributes,
        children
      )
    } else if (settings.tag === 'radio') { // Radio
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomHelper.DomElementSettings({
          tag: settings.tag,
          attributes: {
            type: 'radio',
            name: settings.key,
            value: settings.values[i]
          }
        }))
      }
      el = this.createTag('div', {}, children)
    } else if (settings.tag === 'checkbox') { // Checkbox
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomHelper.DomElementSettings({
          tag: settings.tag,
          attributes: {
            type: 'checkbox',
            name: settings.key,
            value: settings.values[i]
          },
        }))
      }
      el = this.createTag('div', {}, children)
    } else if (settings.tag === 'select') { // Select
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomHelper.DomElementSettings({
          tag: 'option',
          attributes: {
            value: settings.values[i],
          },
        }))
      }
      el = this.createTag('select', { name: settings.key }, children)
    }

    if (!el) {
      throw new Error('Expected input element')
    }

    if (settings.required) {
      this.setInputAsRequired(el)
    }

    input.appendChild(el)

    return input
  }

  /**
   * @param {HTMLElement} el
   */
  setInputAsRequired(el) {
    el.setAttribute(this.constants.REQUIRED_ATTR, '')
  }

  /**
   * @param {HTMLFormElement} form
   * TODO
   */
  getRequiredInputs(form) {
    return this.domHelper.getElementsWithAttribute(this.constants.REQUIRED_ATTR)
  }

  /**
   * @param {Event} ev
   * @return {boolean}
   */
  handleSubmit(ev) { // TODO: Not called bug.
    const form = ev.target
    if (!(form instanceof HTMLFormElement)) throw new Error('Not form')
    const bool = this.checkRequiredInputs(form)
    if (!bool || bool) {
      window.alert('Please fill in all required inputs.')
    }

    return bool
  }

  /**
     * @param {HTMLFormElement} form
     * @return {boolean}
     */
  checkRequiredInputs(form) {
    const inputs = this.getRequiredInputs(form)
    for (let i = 0; i < inputs.length; i++) {
      // FAILED
      if (!this.checkRequiredInput(inputs[i])) {
        return false
      }
    }

    // PASSED
    return true
  }

  /**
   * @param {HTMLElement} el
   */
  checkRequiredInput(el) {
    /*
    checkbox: .checked length > 0
    radio: .checked has true
    select: always selected.
    */

    const type = el.getAttribute('type')

    // Checked
    if (
      el.tagName === 'input' &&
      (type === 'radio' || type === 'checkbox') &&
      this.getCheckedElements(el).length === 0
    ) {
      return false
    } else if (el instanceof HTMLInputElement && !el.value) { // Input default
      return false
    }

    // PASSED
    return true
  }

  /**
   * @param {HTMLElement} el
   * @return {Element[]}
   */
  getCheckedElements(el) {
    const elements = [...Array.from(el.children)]

    return elements.filter(element => (element instanceof HTMLInputElement) && element.checked)
  }

  /**
   * @param {string} type
   * @return {boolean}
   */
  hasSingleTag(type) {
    if (!this.inputTypes[type].multiple) {
      return true
    } else {
      return false
    }
  }

  /**
   * @param {any[]} arr
   * @return {any[]}
   */
  arrayifyAll(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = [arr[i]]
    }

    return arr
  }

  /**
   * @param {string} tagName
   * @param {import('./types/ts').Dictionary} attributes
   * @param {import('./types/ts').DomElementSettings[]} children
   * @return {HTMLElement}
   */
  createTag(tagName, attributes, children = []) {
    return this.domHelper.createElement({
      tag: tagName,
      attributes: attributes,
      children: children
    })
  }

  /**
   * @param {HTMLElement} el
   * @param {HTMLElement[]} children
   */
  appendChildren(el, children) {
    this.domHelper.appendChildren(el, children)
  }

  /**
   * @param {HTMLElement} el
   * @param {import('./types/ts').Dictionary} attributes
   */
  setAttributes(el, attributes) {
    this.domHelper.setAttributes(el, attributes)
  }

  /**
   * @param {HTMLElement} el
   * @return {string}
   */
  getTableHeaderValue(el) {
    const parentEl = this.domHelper.getClosestParent(el, 'th')
    return (parentEl ? parentEl.textContent || '' : '')
  }

  /**
   * @param {import('./types/ts').Dictionary} obj
   * @return {Array<[string, *]>}
   */
  keyValueObjToArrays(obj) {
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
    const arr = []

    for (let key in obj) {
      arr.push(
        [key, obj[key]]
      )
    }

    return arr
  }

  /**
   * @param {import('./types/ts').Dictionary} attributes
   * @return {string}
   */
  attributesToSelector(attributes) {
    let selector = ''
    for (let key in attributes) {
      selector += '[' + key + '=' + attributes[key] + ']'
    }

    return selector
  }

  /**
   * @param {Object<string, Partial<import('./types/ts').InputType>>} inputTypes
   * @return {string[]}
   */
  inputTypesToSelectors(inputTypes) {
    /**
     * @type {string[]}
     */
    const selectors = []
    for (let key in inputTypes) {
      let inputType = inputTypes[key]
      let selector = ''

      if (inputType.tag) { selector += ' ' + inputType.tag }
      if (inputType.attributes) { selector += this.attributesToSelector(inputType.attributes) }

      selectors.push(selector)
    }

    return selectors
  }

  /**
   * @param {HTMLElement[]} elements
   * @return {import('./types/ts').InputObject[]}
   */
  elementsToInputObjects(elements) {
    const inputs = []
    for (let i = 0; i < elements.length; i++) {
      inputs.push(this.elementToInputObject(elements[i]))
    }

    return inputs
  }

  /**
   * Should keep only necessary information for editing
   * @param {HTMLElement} element
   * @return {import('./types/ts').InputObject}
   */
  elementToInputObject(element) {
    const obj = this.inputObject()

    obj.tag = element.tagName
    obj.attributes = this.domHelper.getElementAttributes(element)

    if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
      obj.values.push(element.value)
    }

    obj.label = this.getLabel(element)
    obj.rowHeader = this.getTableHeaderValue(element)
    if (element instanceof HTMLSelectElement && obj.tag === 'select' && element.options.length > 0) {
      const initialSelection = element.options[0];
      obj.initialSelection = initialSelection.getAttribute('name') || '' // OK?
    }

    return obj
  }

  /**
   * @param {HTMLElement} element
   * @return {HTMLElement|undefined}
   */
  getLabelElement(element) {
    let labelEl

    // By wrap
    const p = element.parentElement
    if (p && p.tagName === 'label') {
      labelEl = p
    }

    // By id
    const id = element.getAttribute('id')
    if (id) {
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
      // Not connected to form by spec.
      const elements = /** @type {HTMLLabelElement[]} */ ([...Array.from(document.querySelectorAll('[for=' + id + ']'))].filter(el => el instanceof HTMLLabelElement))
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
  getLabel(element) {
    let label = ''
    const labelEl = this.getLabelElement(element)

    if (labelEl) {
      label = labelEl.textContent || ''
    }

    return label
  }

  /**
   * @param {Partial<import('./types/ts').PageInputOptions>} options
   * @return {HTMLElement[]}
   */
  getCurrentPageInputs(options = {}) {
    /**
     * @type {Record<string, Partial<import('./types/ts').InputType>>}
     */
    let settings
    if (options.noHidden) {
      settings = Object.assign({}, this.inputTypes)
      delete settings.hidden
    } else {
      settings = this.inputTypes
    }

    const selectors = this.inputTypesToSelectors(settings)
    const elements = /** @type {HTMLElement[]} */ (this.domHelper.getElementsBySelectors(selectors).filter(element => element instanceof HTMLElement))

    return elements
  }

  /**
   * Gets input type from element
   * @param {HTMLElement} el
   * @return {Partial<import('./types/ts').InputType> | null} InputType. Default if not found.
   */
  getElementInputType(el) {
    const settings = this.inputTypes
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
   * @param {HTMLInputElement|HTMLSelectElement} el
   * @return input value
   */
  getInputValue(el) {
    const type = this.getElementInputType(el)
    if (!type) {
      throw new Error('No type')
    }
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
  setInputValues(map) {
    for (let selector in map) {
      const val = map[/** @type {keyof map} */ (selector)]
      const elements = /** @type {(HTMLInputElement|HTMLSelectElement)[]}*/ (Array.from(document.querySelectorAll(selector)).filter(el => el instanceof HTMLInputElement || el instanceof HTMLSelectElement))
      elements.forEach((el) => {
        this.setInputValue(el, val)
      })
    }
  }

  /**
   * Sets single input element's value
   * @param {HTMLInputElement|HTMLSelectElement} el
   * @param {any} val
   */
  setInputValue(el, val) {
    const type = this.getElementInputType(el)
    if (!type) {
      throw new Error('No type')
    }
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
  focusOnFirstInput(el) {
    /**
     * @param {HTMLElement} el 
     */
    const getFirstInput = (el) => {
      const children = /** @type {HTMLElement[]} */ (Array.from(el.children).filter(element => element instanceof HTMLElement))
      for (let i = 0; i < children.length; i++) {
        let child = children[i]

        if (this.isInput(child)) {
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
  isInput(el) {
    return !this.getElementInputType(el)
  }

/**
* Clicks many radio inputs for when want to automatically test large radio input lists.
* Even works in frameworks such as React = MUI.
* @example clickRadioInputs(document.querySelector('form'))
* @param {HTMLElement} wrapper Usually a form.
*/
clickRadioInputs(wrapper) {
    const radioInputs = /** @type {HTMLInputElement[]} */ (Array.from(wrapper.querySelectorAll('input[type=radio]')))

    // Group by name
    /**
    * @type {Record<string, HTMLInputElement[]>}
    */
    const radioInputsByName = {}
    radioInputs.forEach(r => {
      const name = r.getAttribute('name') || ''
      if (!radioInputsByName[name]) {
        radioInputsByName[name] = []
      }

      radioInputsByName[name].push(r)
    })

    // Randomly click grouped
    Object.entries(radioInputsByName).forEach(([name, inputs]) => {
      const input = getRandomItemFromArray(inputs)
      input.click()
    })
  }
  
  /**
  * @example enterTextInputs(document.querySelector('form'))
  * @param {HTMLElement} wrapper Usually a form.
  */
  enterTextInputs(wrapper) {
    const selectors = ['input[type=text]', 'textarea']
    const inputs = /** @type {HTMLInputElement[]} */ (Array.from(wrapper.querySelectorAll(selectors.join(', '))))
    inputs.forEach(input => {
      const createRandomText = () => {
        return (Math.random() + 1).toString(36).substring(7)
      }

      input.value = createRandomText()
      input.dispatchEvent(new Event('change', {bubbles:true}));
    })
  }

  /**
  * Randomly inputs form inputs.
  * @example enterTextInputs(document.querySelector('form'))
  * @param {HTMLElement} wrapper Usually a form.
  */
  enterFormInputs(wrapper) {
    this.clickRadioInputs(wrapper)
    this.enterTextInputs(wrapper)
  }
}

/**
/* TODO: js-functions:
* @param {any[]} items
*/
function getRandomItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}
