/**
 * @typedef {object} CopierElements
 * @property {Element|null} main
 * @property {Element|null} pages
 */

/**
 * @typedef {object} CopierEvents
 * @property {function|null} handlePageInputClick
 * @property {function|null} handlePageInputDragStart
 * @property {function|null} handlePageInputDrop
 */

/**
 * @typedef {object} RowOptions
 * @property {{name: string, id: string}} attributes
 * @property {string} label
 * @property {string[]} values
 * @property {{ label: string }} other
 */

/**
 * @typedef {object} PageElements
 * @property {HTMLElement|null} main
 * @property {HTMLElement|null} list
 * @property {HTMLButtonElement|null} addButton
 */

/**
 * @typedef {object} PageEvents
 * @property {function|null} handleInputClick
 * @property {function|null} handleInputDragStart
 * @property {function|null} handleInputDrop
 */

/**
* @typedef {object} PageState
* @property {boolean} receiver
* @property {boolean} sender
*/

/**
 * @typedef {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} InputElement
 */
        
const isInput = /** @param {Element} e @return {e is InputElement}*/ (e) => e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement

/**
 * Copy inputs from one list to another.
 */
export default class InputCopier {
  constructor() {
    /**
     * @type {CopierElements}
     */
    this.elements = {
      main: null,
      pages: null
    }

    /**
     * @type {CopierEvents}
     */
    this.events = { // TODO: Not being used.
      handlePageInputClick: null,
      handlePageInputDragStart: null,
      handlePageInputDrop: null
    }
    /**
     * @typedef {object} CopierState
     * @property {*} copy // TODO: What is this?
     */
    this.state = {
      copy: null
    }
    this.setup()
  }

  setup () {
    this.elements.main = document.createElement('div')
    this.elements.pages = document.createElement('div')

    this.elements.main.appendChild(this.elements.pages)

    this.newPage()
  }


  Page () {
    const page = {}

    /**
     * @type {PageElements}
     */
    page.elements = {
      main: null,
      list: null,
      addButton: null
    }

    /**
     * @type {PageEvents}
     */
    page.events = {
      handleInputClick: null,
      handleInputDragStart: null,
      handleInputDrop: null
    }

    /**
     * @type {PageState}
     */
    page.state = {
      receiver: false,
      sender: false
    }

    page.setup = () => {
      page.elements.main = document.createElement('div')
      page.elements.list = document.createElement('div')
      page.elements.addButton = document.createElement('button')
      page.elements.addButton.addEventListener('click', page.newRow)
      page.elements.addButton.value = 'Add'
      page.elements.addButton.textContent = 'Add'

      page.elements.main.appendChild(page.elements.list)
      page.elements.main.appendChild(page.elements.addButton)
    }

    /**
     * @param {RowOptions} [obj]
     * @return {HTMLElement}
     */
    page.Row = (obj = undefined) => {
      // InputElement = element for setting value.

      let name = ''
      if (obj) {
        name = obj.attributes.name || obj.attributes.id || obj.other.label || ''
      }
      let value = ''
      if (obj) {
        value = obj.values[0] || ''
      }

      return page.CalculatedRow(name, value)
    }

    /**
     * @param {string} name
     * @param {*} value
     * @return {HTMLElement}
     */
    page.CalculatedRow = (name, value) => {
      const wrapper = document.createElement('div')
      /**
       * @type {HTMLInputElement}
       */
      let el

      // Name
      el = document.createElement('input')
      el.setAttribute('type', 'text')
      el.placeholder = 'Name'
      el.value = name
      wrapper.appendChild(el)

      // Value
      el = document.createElement('input')
      el.setAttribute('type', 'text')
      el.placeholder = 'Value'
      el.value = value
      wrapper.appendChild(el)

      // Delete
      el = document.createElement('input')
      el.type = 'button'
      el.value = 'Delete'
      el.textContent = 'Delete'
      el.addEventListener('click', page.deleteRowFromButton)
      wrapper.appendChild(el)

      return wrapper
    }

    /**
     * Helper for multiple
     * @param {RowOptions[]} arr
     */
    page.formatRows = (arr) => {
      const rows = []
      for (let i = 0; i < arr.length; i++) {
        rows.push(page.Row(arr[i]))
      }

      return rows
    }

    page.newRow = () => {
      const row = page.Row()
      page.addRow(row)
    }

    /**
     * @param {HTMLElement} row
     */
    page.addRow = (row) => {
      if (page && page.elements && page.elements.list) {
        page.elements.list.appendChild(row)
      }
    }

    /**
     * @param {HTMLElement[]} rows
     */
    page.addRows = (rows) => {
      for (let i = 0; i < rows.length; i++) {
        page.addRow(rows[i])
      }
    }

    /**
     * @param {HTMLElement} row
     * @return {HTMLElement|undefined}
     */
    page.deleteRow = (row) => {
      return row.parentElement ? row.parentElement.removeChild(row) : undefined
    }

    /**
     * @param {MouseEvent} ev
     */
    page.deleteRowFromButton = (ev) => {
      const { target } = ev
      if (target instanceof HTMLElement && target.parentElement) {
        const row = target.parentElement
        page.deleteRow(row)
      }
    }

    /**
     * @return {HTMLElement}
     */
    page.getElement = () => {
      if (!page.elements || !page.elements.main) {
        throw new Error('No element')
      }
      return page.elements.main
    }

    page.getRows = () => {
      const list = /** @type {HTMLElement[]} */ (page.elements.list || [])
      return list
    }

    /**
     * @return {string}
     */
    page.toJson = () => {
      const rows = page.getRows()
      const json = []

      let name, value
      for (let i = 0; i < rows.length; i++) {
        name = rows[i].children[0]
        value = rows[i].children[1]

        if (!isInput(name)) {
          throw new Error(`Bad input: ${name}`)
        }
        if (!isInput(value)) {
          throw new Error(`Bad input: ${value}`)
        }

        json.push({
          name: name.value,
          value: value.value
        })
      }

      return (JSON.stringify(json))
    }

    /**
     * @param {string} jsonStr
     * @return {boolean}
     */
    page.fromJson = (jsonStr) => {
      const obj = (JSON.parse(jsonStr))
      if (!obj) {
        return false
      }
      const arr = obj

      for (let i = 0; i < arr.length; i++) {
        page.addRow(page.CalculatedRow(arr[i].name, arr[i].value))
      }

      return true
    }

    page.setup()

    return page
  }

  /**
     * @return {object}
     */
  newPage () {
    const page = this.Page()
    this.addPage(page)

    return page
  }

  /**
     * @param {ReturnType<InputCopier['Page']>} page
     */
  addPage (page) {
    if (this.elements.pages && page.elements.main) {
      this.elements.pages.appendChild(page.elements.main)
    }
  }

  /**
     * @param {HTMLElement} el
     * @return {HTMLElement|undefined}
     */
  removePage (el) {
    return el.parentElement ? el.parentElement.removeChild(el) : undefined
  }
}
