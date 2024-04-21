import { DomElementSettings, appendChildren, getElementsBySelectors } from '@theopenweb/js-functions/src/dom-helpers.js'
import { createTag, handleSubmit, inputTypesToSelectors, setInputAsRequired } from '@theopenweb/js-functions/src/form-helpers.js'

/**
 * Collection of functions for handling forms.
 * Instantiable class for custom handling. Allows custom input elements.
 */
export default class FormManager {

  /**
   * @param {Partial<import('./types/ts').FormManagerSettings>} [settings]
   */
  constructor(settings = {}) {

    /**
     * @type {import('./types/ts').FormManagerSettings}
     */
    this.settings = Object.assign({
      useLabel: false,
      text: {}
    }, settings)

    /**
     * @type {Object<string, Partial<import('@theopenweb/js-functions/declarations/types/ts').InputType>>}
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
         * @param {import('@theopenweb/js-functions/declarations/types/ts').InputType} inputType
         */
        override: function (inputType) {
          inputType.multiple = false
        }
      }
    }
  }


  /**
   * @param {import('@theopenweb/js-functions/declarations/types/ts').FormSettings} settings
   * @return {HTMLFormElement}
   */
  settingsToForm(settings) {
    // Start
    const form = document.createElement('form')
    const action = settings.action
    const actionType = settings.actionType
    form.addEventListener('submit', handleSubmit)
    form.setAttribute('action', action)
    form.setAttribute('actionType', actionType)

    // Inside
    const inputs = this.createInputs(settings.inputs)
    appendChildren(form, inputs)

    return form
  }

  /**
   * @param {import('@theopenweb/js-functions/declarations/types/ts').InputObject[]} settings
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
   * @param {import('@theopenweb/js-functions/declarations/types/ts').InputObject} settings
   * @return {HTMLElement}
   */
  createInput(settings) {
    /**
     * @type {import('@theopenweb/js-functions/declarations/types/ts').DomElementSettings[]}
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

      el = createTag(
        settings.tag,
        attributes,
        children
      )
    } else if (settings.tag === 'radio') { // Radio
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomElementSettings({
          tag: settings.tag,
          attributes: {
            type: 'radio',
            name: settings.key,
            value: settings.values[i]
          }
        }))
      }
      el = createTag('div', {}, children)
    } else if (settings.tag === 'checkbox') { // Checkbox
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomElementSettings({
          tag: settings.tag,
          attributes: {
            type: 'checkbox',
            name: settings.key,
            value: settings.values[i]
          },
        }))
      }
      el = createTag('div', {}, children)
    } else if (settings.tag === 'select') { // Select
      for (let i = 0; i < settings.values.length; i++) {
        children.push(DomElementSettings({
          tag: 'option',
          attributes: {
            value: settings.values[i],
          },
        }))
      }
      el = createTag('select', { name: settings.key }, children)
    }

    if (!el) {
      throw new Error('Expected input element')
    }

    if (settings.required) {
      setInputAsRequired(el)
    }

    input.appendChild(el)

    return input
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
   * @param {Partial<import('./types/ts').PageInputOptions>} options
   * @return {HTMLElement[]}
   */
  getCurrentPageInputs(options = {}) {
    /**
     * @type {Record<string, Partial<import('@theopenweb/js-functions/declarations/types/ts').InputType>>}
     */
    let settings
    if (options.noHidden) {
      settings = Object.assign({}, this.inputTypes)
      delete settings.hidden
    } else {
      settings = this.inputTypes
    }

    const selectors = inputTypesToSelectors(settings)
    const elements = /** @type {HTMLElement[]} */ (getElementsBySelectors(selectors).filter(element => element instanceof HTMLElement))

    return elements
  }

  /**
   * Gets input type from element
   * @param {HTMLElement} el
   * @return {Partial<import('@theopenweb/js-functions/declarations/types/ts').InputType> | null} InputType. Default if not found.
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

}
