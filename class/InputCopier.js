/**
 * Copy inputs from one list to another.
 */
var InputCopier = function () {
  var copier = {}
  copier.elements = {
    main: null,
    pages: null
  }
  copier.events = {
    handlePageInputClick: null,
    handlePageInputDragStart: null,
    handlePageInputDrop: null
  }
  copier.state = {
    copy: null
  }

  copier.setup = function () {
    copier.elements.main = document.createElement('div')
    copier.elements.pages = document.createElement('div')

    copier.elements.main.appendChild(copier.elements.pages)

    copier.newPage()
  }

  copier.Page = function () {
    var page = {}
    page.elements = {
      main: null,
      list: null,
      addButton: null
    }
    page.events = {
      handleInputClick: null,
      handleInputDragStart: null,
      handleInputDrop: null
    }
    page.state = {
      receiver: false,
      sender: false
    }

    page.setup = function () {
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
     * @param {object} obj
     * @return {HTMLElement}
     */
    page.Row = function (obj) {
      // InputElement = element for setting value.

      var name = ''
      if (obj) {
        name = obj.attributes.name || obj.attributes.id || obj.other.label || ''
      }
      var value = ''
      if (obj) {
        value = obj.values[0] || ''
      }

      return new page.CalculatedRow(name, value)
    }

    /**
     * @param {string} name
     * @param {*} value
     * @return {HTMLElement}
     */
    page.CalculatedRow = function (name, value) {
      var wrapper = document.createElement('div')
      var el

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
      el = document.createElement('button')
      el.value = 'Delete'
      el.textContent = 'Delete'
      el.addEventListener('click', page.deleteRowFromButton)
      wrapper.appendChild(el)

      return wrapper
    }

    /**
     * @param {array} arr
     * @return {array}
     */
    page.formatRows = function (arr) {
      // Helper for multiple
      var rows = []
      for (var i = 0; i < arr.length; i++) {
        rows.push(page.Row(arr[i]))
      }

      return rows
    }

    page.newRow = function () {
      var row = new page.Row()
      page.addRow(row)
    }

    /**
     * @param {HTMLElement} row
     */
    page.addRow = function (row) {
      page.elements.list.appendChild(row)
    }

    /**
     * @param {array} rows
     */
    page.addRows = function (rows) {
      for (var i = 0; i < rows.length; i++) {
        page.addRow(rows[i])
      }
    }

    /**
     * @param {HTMLElement} row
     */
    page.deleteRow = function (row) {
      row.parentElement.removeChild(row)
    }

    /**
     * @param {Event} ev
     */
    page.deleteRowFromButton = function (ev) {
      var row = ev.target.parentElement
      page.deleteRow(row)
    }

    /**
     * @return {HTMLElement}
     */
    page.getElement = function () {
      return page.elements.main
    }

    /**
     * @return {array}
     */
    page.getRows = function () {
      var list = page.elements.list
      var rows = list.childNodes
      return rows
    }

    /**
     * @return {string}
     */
    page.toJson = function () {
      var rows = page.getRows()
      var json = []

      var name, value
      for (var i = 0; i < rows.length; i++) {
        name = rows[i].childNodes[0]
        value = rows[i].childNodes[1]

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
    page.fromJson = function (jsonStr) {
      var obj = (JSON.parse(jsonStr))
      if (!obj) {
        return false
      }
      var arr = obj

      for (var i = 0; i < arr.length; i++) {
        page.addRow(new page.CalculatedRow(arr[i].name, arr[i].value))
      }

      return true
    }

    page.setup()

    return page
  }

  /**
   * @return {object}
   */
  copier.newPage = function () {
    var page = new copier.Page()
    copier.addPage(page)

    return page
  }

  /**
   * @param {object} page
   */
  copier.addPage = function (page) {
    copier.elements.pages.appendChild(page.elements.main)
  }

  /**
   * @param {HTMLElement} el
   */
  copier.removePage = function (el) {
    el.parentElement.removeChild(el)
  }

  copier.setup()

  return copier
}

module.exports = InputCopier
