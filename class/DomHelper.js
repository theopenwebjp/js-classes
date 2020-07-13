const {
    Utility,
    BaseObjectHelper
} = require('js-functions')

/**
 * @typedef {object} NameValue
 * @property {string} name
 * @property {*} value
 */

/**
 * @typedef {object} ElementPosition
 * @property {HTMLElement} element
 * @property {string} type // Matched type
 * @property {number} attributeIndex // Integer index from 0
 * @property {number} stringIndex // Character index type area
 * @property {number} stringLength // Length of match
 */

/**
 * @typedef {object} Link
 * @property {string} text
 * @property {string} url
 */

/**
 * @typedef {Object} ChildrenSettings
 * @property {Object<string, *>} replacements
 * @property {DomElementSettings} format
 * @property {*[]} items
 */

/**
 * @typedef {Object} DomElementSettings
 * @property {string} tag
 * @property {HTMLElement[]} children
 * @property {Object<string, string>} attributes
 * @property {string} textContent
 * @property {string} innerHTML
 * @property {Object<string, function(...any):any>} events
 */

/**
 * @typedef {Object} DOMSearchSettings
 * @property {boolean} tag
 * @property {boolean} textContent
 * @property {boolean} attributeKey
 * @property {boolean} attributeValue
 * @property {(function(HTMLElement):*)|null} handle
 */

/**
 * @typedef {{top: number|null, left: number|null}} Margins
 */

/**
 * @typedef {Object} FormOptions
 * @property {string} method
 * @property {string|function():void} action: '', // url OR function
 * @property {{reset: boolean, submit: boolean}} controls
 */

/**
 * @typedef {Object} MenuListItem
 * @property {string} type
 * @property {function():void} click
 * @property {string} text
 * @property {string} id
 * @property {string} class
 * @property {boolean} empty
 * @property {'vertical'|'horizontal'} orientation
 */

/**
 * @typedef {Object} MenuListSettings
 * @property {MenuListItem[]} items
 * @property {HTMLElement|undefined} element
 * @property {boolean} isChild
 * @property {boolean} hide
 * @property {{text: string, id: string}} header
 * 
 */

/**
 * Collection of DOM helper functions.
 * Static class.
 */
const DomHelper = function () {
    var manager = {}

    /**
     * @param {Partial<DomElementSettings>} options
     * @return {DomElementSettings}
     */
    manager.DomElementSettings = function (options = {}) {
        const settings = Object.assign({
            tag: '',
            children: [], // Allows nested
            attributes: {},
            textContent: '',
            innerHTML: '',
            events: {}
        }, options)

        return settings
    }

    /**
     * @param {Partial<DOMSearchSettings>} options
     * @return {DOMSearchSettings}
     */
    manager.DOMSearchSettings = function (options = {}) {
        return Object.assign({
            tag: false,
            textContent: true,
            attributeKey: false,
            attributeValue: false,
            handle: null // function(el){return result;}//If non-falsy, adds.
        }, options)
    }

    /**
     * Settings for lists
     * @param {Partial<ChildrenSettings>} options
     * @return {ChildrenSettings}
     */
    manager.ChildrenSettings = function (options) {
        var settings = Object.assign({
            replacements: {}, // key: function(item, key){return replacement;}
            format: manager.DomElementSettings(),
            items: []
        }, options)

        return settings
    }

    /**
     * @public
     * @param {Partial<DomElementSettings>[]} settingsArr
     * @param {Partial<DomElementSettings>} defaults
     * @return {HTMLElement[]}
     */
    manager.createElements = function (settingsArr, defaults) {
        var elements = settingsArr.map(function (settings) {
            if (defaults) {
                settings = Utility.combineObjects([settingsArr, defaults])
            }

            return manager.createElement(settings)
        })
        return elements
    }

    /**
     * @public
     * @param {Partial<DomElementSettings>} options
     * @return {HTMLElement}
     */
    manager.createElement = function (options) {
        const settings = manager.DomElementSettings(options)
        const el = document.createElement(settings.tag)
        manager.setAttributes(el, settings.attributes)
        manager._setEvents(el, settings.events)

        // Nesting
        if (settings.children.length > 0) {
            manager._setChildren(el, settings.children)
        } else if (settings.innerHTML !== '') {
            el.innerHTML = settings.innerHTML
        } else {
            el.textContent = settings.textContent
        }

        return el
    }

    /**
     * Helper for applying array of items to element settings.
     * @public
     * @param {DomElementSettings} settings
     * @param {Partial<ChildrenSettings>} childrenOptions
     */
    manager.setChildrenSettings = function (settings, childrenOptions) {
        const childrenSettings = manager.ChildrenSettings(childrenOptions)
        settings.children = manager._handleChildrenReplacements(childrenSettings)
        return settings.children
    }

    /**
     * @public
     * @param {Array<string[]>} rows
     * @return {HTMLTableElement}
     */
    manager.createTable = function (rows) {
        var table = document.createElement('table')
        var cols
        for (let i = 0; i < rows.length; i++) {
            let tr = document.createElement('tr')
            cols = rows[i]

            for (let j = 0; j < cols.length; j++) {
                let td = document.createElement('td')
                td.innerHTML = cols[j]

                tr.appendChild(td)
            }

            table.appendChild(tr)
        }

        return table
    }

    /**
     * @public
     * @param {NameValue[]} nameValues
     * @return {HTMLUListElement}
     */
    manager.createElementList = function (nameValues) {
        var list = nameValues.map(function (nameValue) {
            var elementSettings = nameValue.value

            // Element
            var el = manager.createElement(elementSettings)

            return {
                name: nameValue.name,
                value: el
            }
        })

        return manager.createCommonList(list)
    }

    /**
     * @param {object} obj
     * @return {HTMLUListElement}
     */
    manager.createKeyValueList = function (obj) {
        // key: val => int: {name, value}
        var list = []

        for (var key in obj) {
            list.push({
                name: key,
                value: obj[key]
            })
        }

        return manager.createCommonList(list)
    }

    /**
     * @param {(HTMLElement|string)[]} arr
     * @return {HTMLUListElement}
     */
    manager.createList = function (arr) {
        const ul = document.createElement('ul')

        for (var i = 0; i < arr.length; i++) {
            const li = document.createElement('li')
            const item = arr[i]

            // DOM
            if (typeof item === 'object' && item.nodeType) {
                li.appendChild(item)
            } else {
                li.innerHTML = String(item)
            }

            ul.appendChild(li)
        }

        return ul
    }

    /**
     * @public
     * @param {function|undefined} handle
     * @param {string} headerText
     * @param {Array} arr
     * @return {HTMLDivElement}
     */
    manager.createHeadedArrayElement = function (handle = undefined, headerText, arr) {
        /*
        HEADER
        name: value
        ...

        <div>
          <h3>header</h3>
          ARRAY ELEMENT
        </div>
        */

        if (!handle) {
            handle = function (arr) {
                return arr
            }
        }

        var div = document.createElement('div')

        var header = document.createElement('h3')
        header.textContent = headerText
        header.style.textAlign = 'center'
        div.appendChild(header)

        var arrElement = handle(arr)
        div.appendChild(arrElement)

        return div
    }

    /**
     * @public
     * @param {string} header
     * @param {Array} arr
     * @return {HTMLDivElement}
     */
    manager.createHeadedTable = function (header, arr) {
        return manager.createHeadedArrayElement(manager.createTable, header, arr)
    }

    /**
     * @public
     * @param {string} header
     * @param {Array} arr
     * @return {HTMLDivElement}
     */
    manager.createHeadedList = function (header, arr) {
        return manager.createHeadedArrayElement(manager.createList, header, arr)
    }

    /**
     * @public
     * @param {string} header
     * @param {object} obj
     * @return {HTMLDivElement}
     */
    manager.createHeadedKeyValueList = function (header, obj) {
        return manager.createHeadedArrayElement(manager.createKeyValueList, header, obj)
    }

    /**
     * @public
     * @param {Partial<MenuListSettings>} options
     * @return {MenuListSettings}
     */
    manager.MenuListSettings = function (options = {}) {
        return Object.assign({
            items: [{
                type: '',
                click: () => { },
                text: '',
                id: '',
                class: '',
                empty: false,
                orientation: '' // vertical OR horizontal
            }],
            element: window.HTMLElement || undefined,
            isChild: false,
            hide: false,
            header: {
                text: '',
                id: ''
            }
        }, options)
    }

    /**
     * Creates a list from settings + items.
     * May include a header.
     * Parent element is required to add header, etc.
     * Parent element preferred rather than using returned element due to nested formatting possible.
     * If id is included for item, anchor tag with id as id + _a is also included.
     * @public
     * @deprecated This function is bloated. Should standardize and use what is necessary.
     * @param {HTMLElement} parentEl
     * @param {MenuListSettings} settings
     * @return {HTMLUListElement}
     */
    manager.setupMenuList = function (parentEl, settings) {
        // TODO: offer alternatives this function, including bootstrap, etc.
        /*
        <ul>
          <li><a>HEADER</a></li>
          <ul>...</ul>
        </ul>
        */

        var items = settings.items

        // Wrapper
        /**
         * @type {HTMLUListElement}
         */
        var ul
        if (settings.element) {
            ul = settings.element
            ul.innerHTML = ''
        } else {
            ul = document.createElement('ul')
        }

        // On hover
        if (settings.isChild) {
            parentEl.addEventListener('mouseover', function () {
                ul.style.display = 'block'
            })
            parentEl.addEventListener('mouseout', function () {
                ul.style.display = 'none'
            })
        }

        // Options
        if (settings.hide) {
            ul.style.display = 'none'
        }

        // Header
        if (settings.header) {
            var headerEl = document.createElement('a')
            if (settings.header.text) {
                headerEl.textContent = settings.header.text
            }
            if (settings.header.id) {
                headerEl.setAttribute('id', settings.header.id)
            }
            parentEl.appendChild(headerEl)
        }

        // Items
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            const li = document.createElement('li')
            const a = document.createElement('a')

            // Text
            if (item.text) {
                a.textContent = item.text
            }

            // Id
            if (item.id) {
                li.setAttribute('id', item.id)
                a.setAttribute('id', item.id + '_a')
            }

            // Class
            if (item.class) {
                li.setAttribute('class', item.class)
            }

            // Event
            if (item.type === 'file') {
                manager.setClickFileHandler(a, item.click)
            } else {
                a.addEventListener('click', item.click)
            }

            // Orientation
            if (item.orientation === 'vertical') {
                li.style.display = 'block'
                li.style.clear = 'both'
            } else {
                li.style.display = 'block'
                li.style.float = 'left'
            }

            if (!item.empty) {
                li.appendChild(a)
            }

            ul.appendChild(li)
        }

        if (!settings.element) {
            parentEl.appendChild(ul)
        }

        return ul
    }

    /**
     * @public
     * @param {(string|Link)[]} links
     * @param {string} separator
     * @return {HTMLSpanElement}
     */
    manager.createBreadcrumbList = function (links, separator) {
        if (!separator) {
            separator = ' > '
        }

        var list = document.createElement('span')
        for (var i = 0; i < links.length; i++) {
            const abstractLink = links[i]

            // Separator
            if (i > 0) {
                const separatorSpan = document.createElement('span')
                separatorSpan.textContent = separator
                list.appendChild(separatorSpan)
            }

            const span = document.createElement('span')

            // Simple link
            const link = typeof abstractLink === 'string' ? {
                text: abstractLink,
                url: ''
            } : abstractLink

            if (link.url) {
                const a = document.createElement('a')
                a.setAttribute('href', link.url)
                a.textContent = link.text
                span.appendChild(a)
            } else {
                span.textContent = link.text
            }

            list.appendChild(span)
        }

        return list
    }

    /**
     * @public
     * @param {NameValue[]} nameValues
     * @return {HTMLDivElement}
     */
    manager.groupify = function (nameValues) {
        var wrapper = document.createElement('div')
        var el

        for (var i = 0; i < nameValues.length; i++) {
            el = manager.createHeadedArrayElement(undefined, nameValues[i].name, nameValues[i].value)
            wrapper.appendChild(el)
        }

        return wrapper
    }

    /**
     * @public
     * @param {HTMLFormElement} form
     */
    manager.clearForm = function (form) {
        console.log('clearForm', form)
        var elements = /** @type {(HTMLInputElement|HTMLSelectElement)[]} */ (form.elements)
        form.reset()

        /*
        Input:
        https://html.spec.whatwg.org/multipage/input.html#the-input-element
        table id=attr-input-type-keywords

        Select:
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/type
        https://html.spec.whatwg.org/multipage/form-elements.html#dom-select-type

        Textarea:
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement
        https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
        */
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i]
            const type = ('type' in el) ? el.type.toLowerCase() : ''

            switch (type) {
                case 'text':
                case 'password':
                case 'textarea':
                case 'hidden':
                    const input = /** @type {HTMLInputElement} */ (el)
                    input.value = ''
                    input.defaultValue = ''
                    break

                case 'radio':
                case 'checkbox':
                    const checkedInput = /** @type {HTMLInputElement} */ (el)
                    if (checkedInput.checked) {
                        checkedInput.checked = false
                    }
                    break

                case 'select-one':
                case 'select-multi':
                    const select = /** @type {HTMLSelectElement} */ (el)
                    select.selectedIndex = -1
                    break

                default:
                    break
            }
        }
    }

    /**
     * @private
     * @param {HTMLElement} el
     * @param {Object<string, function(...any):void>} events
     */
    manager._setEvents = function (el, events) {
        var event
        for (var key in events) {
            event = events[key]

            // String = DOM attribute based event
            if (typeof event === 'string') {
                el.setAttribute('on' + key, event)
            } else {
                el.addEventListener(key, event)
            }
        }
    }

    /**
     * @private
     * @param {HTMLElement} el
     * @param {DomElementSettings[]} settingsArr
     * @return {HTMLElement}
     */
    manager._setChildren = function (el, settingsArr) {
        /**
         * @type {HTMLElement[]}
         */
        const children = []
        for (var i = 0; i < settingsArr.length; i++) {
            children.push(manager.createElement(settingsArr[i]))
        }

        manager.appendChildren(el, children)

        return el
    }

    /**
     * @private
     * @param {ChildrenSettings} childrenSettings
     */
    manager._handleChildrenReplacements = function (childrenSettings) {
        var items = childrenSettings.items
        /**
         * @type {DomElementSettings[]}
         */
        var children = []

        var i
        for (i = 0; i < items.length; i++) {
            let item = items[i]
            children.push(manager._handleChildReplacements(item, childrenSettings.format, childrenSettings.replacements))
        }

        return children
    }

    /**
     * @private
     * @param {*} item
     * @param {object} format
     * @param {object} replacements
     */
    manager._handleChildReplacements = function (item, format, replacements) {
        const childSettings = manager.DomElementSettings(format) // New child setting.
        childSettings.children = [] // Initialize because overwritten by format replacements.

        // Replaceable: tag, attribute values, textContent, innerHTML
        manager._applyObjectReplacement(childSettings, item, 'tag', replacements)
        manager._applyObjectReplacement(childSettings, item, 'textContent', replacements)
        manager._applyObjectReplacement(childSettings, item, 'innerHTML', replacements)

        for (let key in childSettings.attributes) {
            manager._applyObjectReplacement(childSettings.attributes, item, key, replacements)
        }

        if (format.children) {
            var cVal
            for (let i = 0; i < format.children.length; i++) {
                cVal = manager._handleChildReplacements(item, format.children[i], replacements)
                childSettings.children.push(cVal)
            }
        }

        return childSettings
    }

    /**
     * @private
     * @param {Object<string, string|function():any>} obj
     * @param {*} item
     * @param {string} elementPropKey
     * @param {Object<string, function(*, string):any>} replacements
     */
    manager._applyObjectReplacement = function (obj, item, elementPropKey, replacements) {
        for (var key in replacements) {
            if (obj[elementPropKey] === key) {
                obj[elementPropKey] = replacements[key](item, key)
            }
        }
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {HTMLElement[]} children
     */
    manager.appendChildren = function (el, children) {
        for (var i = 0; i < children.length; i++) {
            el.appendChild(children[i])
        }
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {Object<string, string>} attributes
     */
    manager.setAttributes = function (el, attributes) {
        for (var key in attributes) {
            el.setAttribute(key, attributes[key])
        }
    }

    /**
     * @public
     * @return {object}
     */
    manager.NameValue = function () {
        return {
            name: '',
            value: ''
        }
    }

    /**
     * DOM list with name value pairs.
     * Common in Android settings pages.
     * @public
     * @param {{name: string, value: string|HTMLElement}[]} arr
     * @return {HTMLUListElement}
     */
    manager.createCommonList = function (arr) {
        /**
         * @type {HTMLSpanElement[]}
         */
        var list = []

        for (var i = 0; i < arr.length; i++) {
            const cur = arr[i]
            const curVal = cur.value

            const item = document.createElement('span')

            let span = document.createElement('span')
            span.textContent = cur.name + ': '
            item.appendChild(span)

            span = document.createElement('span')
            if (curVal instanceof HTMLElement) {
                span.appendChild(curVal)
            } else {
                span.textContent = curVal
            }
            item.appendChild(span)

            list.push(item)
        }

        return manager.createList(list)
    }

    /**
     * @public
     * @param {Partial<FormOptions>} options
     * @return {FormOptions}
     */
    manager.FormOptions = function (options = {}) {
        return Object.assign({
            method: 'POST',
            action: '', // url OR function
            controls: {
                reset: true,
                submit: true
            }
        }, options)
    }

    /**
     * @param {HTMLElement} el
     * @param {Partial<FormOptions>} fOptions
     * @return {HTMLFormElement}
     */
    manager.formify = function (el, fOptions) {
        const options = manager.FormOptions(fOptions)
        var div, input

        // Wrap
        var form = document.createElement('form')
        form.appendChild(el)

        // Method
        form.setAttribute('method', options.method)

        // Action
        if (options.action) {
            if (typeof options.action === 'function') {
                form.addEventListener('submit', function (ev) {
                    options.action(ev) // TODO: Why type guard not working?

                    ev.preventDefault()
                    return false
                })
            } else {
                form.setAttribute('action', options.action)
            }
        }

        // Controls
        if (options.controls) {
            div = document.createElement('div')

            // Reset
            if (options.controls.reset) {
                input = document.createElement('input')
                input.setAttribute('type', 'reset')
                input.setAttribute('value', 'Reset')
                input.addEventListener('click', function (ev) {
                    manager.clearForm(form)

                    ev.preventDefault()
                    return false
                })
                div.appendChild(input)
            }

            // Submit
            if (options.controls.submit) {
                input = document.createElement('input')
                input.setAttribute('type', 'submit')
                input.setAttribute('value', 'Submit')
                div.appendChild(input)
            }

            form.appendChild(div)
        }

        return form
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @return {DOMRect}
     */
    manager.getElementScreenDimensions = function (el) {
        return el.getBoundingClientRect()
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @return {DOMRect}
     */
    manager.getElementPageDimensions = function (el) {
        var rect = BaseObjectHelper.copyObjectData(el.getBoundingClientRect())
        rect.top = rect.top + window.pageYOffset
        rect.left = rect.left + window.pageXOffset
        rect.bottom = rect.top + rect.height
        rect.right = rect.left + rect.width

        return rect
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {object} position
     */
    manager.setStylePosition = function (el, position) {
        var allowed = ['top', 'right', 'bottom', 'left']
        manager.setStyleMeasurements(el, position, allowed)
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {object} dimensions
     */
    manager.setStyleDimensions = function (el, dimensions) {
        var allowed = ['top', 'right', 'bottom', 'left', 'width', 'height']
        manager.setStyleMeasurements(el, dimensions, allowed)
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {Object<keyof CSSStyleDeclaration, string|null>} obj
     * @param {string[]} allowed
     * @param {string} [unit]
     */
    manager.setStyleMeasurements = function (el, obj, allowed, unit = undefined) {
        if (!unit) {
            unit = 'px'
        }
        var s = el.style
        for (var key in obj) {
            if (obj[key] === null) {
                continue
            }

            if (!allowed || allowed.indexOf(key) >= 0) {
                s[key] = obj[key] + unit
            }
        }
    }

    /**
     * @public
     * @param {Partial<Margins>} margins
     * @param {DOMRect} dimensions
     */
    manager.applyMarginsToDimensions = function (margins, dimensions) {
        var allowedMargins = ['top', 'left']
        for (var key in margins) {
            if (allowedMargins.indexOf(key) >= 0 && Utility.exists(margins[key])) {
                dimensions[key] += margins[key]
            }
        }
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {object} dimensions
     * @return {HTMLElement}
     */
    manager.displayElementAtScreenDimensions = function (el, dimensions) {
        // Must be added to DOM
        if (!el.parentElement) {
            document.body.appendChild(el)
        }

        var position = 'fixed'

        // Dimensions
        el.style.position = position
        manager.setStylePosition(el, dimensions)

        // Continuous
        var handle = function () {
            if (!el.parentElement) {
                window.removeEventListener('scroll', handle)
            } else {
                manager.displayElementAtScreenDimensions(el, dimensions)
            }
        }
        window.addEventListener('scroll', handle, true)

        return el
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {object} dimensions
     * @return {HTMLElement}
     */
    manager.displayElementAtPageDimensions = function (el, dimensions) {
        // Must be added to DOM body
        if (el.parentElement !== document.body) {
            if (el.parentElement) {
                el.parentElement.removeChild(el)
            }

            document.body.appendChild(el)
        }

        var position = 'absolute'

        // Dimensions
        el.style.position = position
        manager.setStylePosition(el, dimensions)

        return el
    }

    /**
     * @public
     * @param {HTMLElement} shownElement
     * @param {HTMLElement} targetElement
     * @param {Partial<Margins>} options
     * @return {HTMLElement}
     */
    manager.showAboveElement = function (shownElement, targetElement, options) {
        if (!options) {
            options = { // Margins
                top: null,
                left: null
            }
        }

        // Shown element required css
        shownElement.style.position = 'fixed'

        // Dimensions
        var dimensions = manager.getElementPageDimensions(targetElement)
        manager.applyMarginsToDimensions(options, dimensions)

        // Display
        return manager.displayElementAtPageDimensions(shownElement, dimensions)
    }

    /**
     * @param {HTMLElement} element
     * @param {function} handle
     */
    manager.watchDocumentSizeChanges = function (element, handle) {
        var height = element.offsetHeight
        var width = element.offsetWidth
        document.addEventListener('DOMSubtreeModified', function () {
            if (element.offsetHeight !== height || element.offsetWidth !== width) {
                handle(element)
            }
        })
    }

    /**
     * @public
     * @param {string} eventName
     * @param {function} handle
     */
    manager.startWatchingHtmlElementListenerChanges = function (eventName, handle) {
        var p = window.HTMLElement.prototype

        if (!p.__listenerChangeHandles) { // TODO: Copy types?
            p.__listenerChangeHandles = {}

            p.__handleEvent = function (type, args) {
                var prefix = '__'
                var listenerKey = ((type === 'add') ? 'addEventListener' : 'removeEventListener')
                var oldListenerKey = prefix + listenerKey
                var eventName = args[0]

                var handles = p.__listenerChangeHandles[eventName]
                for (var i = 0; i < handles.length; i++) {
                    p[oldListenerKey].apply(this, args)
                }
            }

            p.__addEventListener = p.addEventListener
            p.addEventListener = function (eventName, handler, bubbling) {
                var type = 'add'
                return p.__handleEvent.apply(this, [type, arguments])
            }

            p.__removeEventListener = p.removeEventListener
            p.removeEventListener = function (eventName, handler, bubbling) {
                var type = 'remove'
                return p.__handleEvent.apply(this, [type, arguments])
            }
        }

        if (!p.__listenerChangeHandles[eventName]) {
            p.__listenerChangeHandles[eventName] = []
        }

        p.__listenerChangeHandles[eventName].push(handle)
    }

    /**
     * @public
     * @param {string} eventName
     * @param {function} handle
     * @return {boolean}
     */
    manager.stopWatchingHtmlElementListenerChanges = function (eventName, handle) {
        var p = window.HTMLElement.prototype

        if (!p.__listenerChangeHandles) {
            return false
        }
        if (!p.__listenerChangeHandles[eventName]) {
            return false
        }

        var index = p.__listenerChangeHandles[eventName].indexOf(handle)
        if (index >= 0) {
            p.__listenerChangeHandles[eventName].splice(index, 1)
        }

        // Delete event array on all gone
        if (p.__listenerChangeHandles[eventName].length === 0) {
            delete p.__listenerChangeHandles[eventName]
        }

        // Delete objects on all gone
        if (Object.keys(p.__listenerChangeHandles).length === 0) {
            delete p.__listenerChangeHandles

            p.addEventListener = p.__addEventListener
            delete p.__addEventListener

            p.removeEventListener = p.__removeEventListener
            delete p.__removeEventListener
        }

        return true
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @return {string[]}
     */
    manager.getAvailableElementEvents = function (el) {
        // Don't use on anywhere because is easy to add "on".
        /**
         * @type {string[]}
         */
        var arr = []

        for (var key in el) {
            if (key.substr(0, 2) === 'on') {
                arr.push(key.substr(2))
            }
        }

        return arr
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {string[]} eventNames
     */
    manager.htmlifyEvents = function (el, eventNames) {
        /*
        There seems to be many plugins that duplicate an element or only take an HTML string.
        If events are placed beforehand then they are lost.
        */

        if (!eventNames) {
            eventNames = manager.getAvailableElementEvents(el)
        }

        for (var i = 0; i < eventNames.length; i++) {
            manager.htmlifyEvent(el, eventNames[i])
        }
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {string} eventName
     */
    manager.htmlifyEvent = function (el, eventName) {
        var key = '__htmlified_event_' + (Math.random() * 10000000)

        var event = new window.CustomEvent(eventName)
        window[key] = function () {
            // console.log('Sent event: ' + eventName)
            el.dispatchEvent(event)
        }

        el.setAttribute('on' + eventName, 'window["' + key + '"]()')
    }

    /**
     * @public
     * @param {HTMLElement} el
     */
    manager.getParents = function (el) {
        var parents = [] // From closest to furthest
        var nextParent = el.parentElement
        while (nextParent) {
            parents.push(nextParent)

            nextParent = nextParent.parentElement
        }

        return parents
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {string} selector
     * @return {HTMLElement|null}
     */
    manager.getClosestParent = function (el, selector) {
        var parent = null
        var parents = manager.getParents(el)
        for (var i = 0; i < parents.length; i++) {
            if (parents[i].matches(selector)) {
                parent = parents[i]
                break
            }
        }

        return parent
    }

    /**
     * @public
     */
    manager.removeTabIndexes = function () {
        const elements = /** @type {HTMLElement[]} */ (manager.getAllElements())
        for (var i = 0; i < elements.length; i++) {
            elements[i].tabIndex = -1
        }
    }

    /**
     * @public
     * @param {HTMLElement[]} elements
     */
    manager.setTabIndexes = function (elements) {
        // Sets in order
        for (var i = 0; i < elements.length; i++) {
            elements[i].tabIndex = i
        }
    }

    /**
     * @public
     * @param {string} selector
     * @return {HTMLElement|null}
     */
    manager.getHtmlImport = function (selector) {
        var links = document.querySelectorAll('link[rel="import"]')
        var element, link
        for (var i = 0; i < links.length; i++) {
            link = links[i]
            element = link.import.querySelector(selector)
            if (element) {
                var clone = document.importNode(element.content, true)
                return clone
            }
        }

        // FAILED
        return null
    }

    /**
     * @public
     * @param {string} id
     * @return {HTMLElement|null|undefined}
     */
    manager.e = function (id) {
        const element = document.getElementById(id)
        return element
    }

    /**
     * @public
     * @param {string[]} ids
     * @return {HTMLElement[]}
     */
    manager.getElementsByIds = function (ids) {
        var elements = []
        var element

        for (var i = 0; i < ids.length; i++) {
            element = manager.e(ids[i])
            if (element) {
                elements.push(element)
            }
        }

        return elements
    }

    /**
     * @public
     * @param {string[]} arr
     * @return {HTMLUListElement}
     */
    manager.getDOMList = function (arr) {
        var listEl = document.createElement('ul')
        var itemEl
        var item

        for (var i = 0; i < arr.length; i++) {
            item = arr[i]

            itemEl = document.createElement('li')
            itemEl.textContent = item
            listEl.appendChild(itemEl)
        }

        return listEl
    }

    /**
     * @public
     * @param {string} src
     * @return {HTMLImageElement}
     */
    manager.getDOMImage = function (src) {
        var image = new window.Image()
        image.src = src
        return image
    }

    /**
     * @public
     * @param {HTMLInputElement[]} inputs
     * @return {HTMLTableElement}
     */
    manager.getDOMInputsList = function (inputs) {
        var listEl = document.createElement('table')
        var inputRow
        for (var i = 0; i < inputs.length; i++) {
            inputRow = manager.getDOMInputRow(inputs[i])
            listEl.appendChild(inputRow)
        }

        return listEl
    }

    /**
     * @public
     * @param {HTMLInputElement} input Must contain name and value properties.
     * @return {HTMLTableRowElement}
     */
    manager.getDOMInputRow = function (input) { // TODO: Not HTMLInputElement? Fix all connected.
        /*
          Input: {
              name: "",
              value: ""
          }
          */

        var rowEl = document.createElement('tr')

        // Name
        var nameEl = document.createElement('th')
        nameEl.textContent = input.name
        rowEl.appendChild(nameEl)

        // Input Cell
        var inputCell = document.createElement('td')
        rowEl.appendChild(inputCell)

        // Input
        var inputEl = document.createElement('input')
        inputEl.value = input.value
        inputCell.appendChild(inputEl)

        return rowEl
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @param {function():void} onFileHandle
     */
    manager.setClickFileHandler = function (el, onFileHandle) {
        // Create input
        var fileEl = document.createElement('input')
        fileEl.style.position = 'absolute'
        fileEl.style.visibility = 'hidden'
        fileEl.setAttribute('type', 'file')
        fileEl.addEventListener('change', onFileHandle)

        // Append before el(to avoid overrite/otherwise add as child)
        if (el.parentElement) {
            el.parentElement.insertBefore(fileEl, el)
        } else {
            el.appendChild(fileEl)
        }

        // Apply on click
        el.addEventListener('click', function (ev) {
            // console.log(ev)
            if (ev.target !== el) {
                return false
            }
            ev.preventDefault()
            fileEl.click()
        }, true)
    }

    /**
     * Goal:
     * Use position to get DOM data.
     * Would be used where position remains same but data can vary.
     * @public
     * @param {ElementPosition} elementPosition
     * @return {string|null}
     */
    manager.getElementPositionData = function (elementPosition) {
        var p = elementPosition
        var el = p.element
        var defaultData = null
        var i, key

        if (!el) {
            return defaultData
        }

        if (p.type === 'tag') {
            return el.tagName
        }

        if (p.type === 'textContent') {
            return el.textContent
        }

        if (p.type === 'attributeKey' || p.type === 'attributeValue') {
            var attributes = manager.getElementAttributes(el)

            i = 0
            for (key in attributes) {
                if (p.type === 'attributeKey' && elementPosition.attributeIndex === i) {
                    return key
                }

                if (p.type === 'attributeValue' && elementPosition.attributeIndex === i) {
                    return attributes[key]
                }
            }
        }

        return defaultData
    }

    /**
     * Goal: Search for any format of data at once in DOM.
     * Should only get direct parent of text nodes OR direct element.
     * Should get position as best as possible so can replace if needed.
     * @public
     * @param {string} searchStr
     * @param {Partial<DOMSearchSettings>} optionalType
     * @param {HTMLElement} el
     * @return {ElementPosition[]}
     */
    manager.searchDom = function (searchStr, optionalType = {}, el) {
        if (!el) {
            el = document
        }
        const type = manager.DOMSearchSettings(optionalType)
        var children = manager.getAllChildren(el)
        /**
         * @type {ElementPosition[]}
         */
        var results = []

        for (let i = 0; i < children.length; i++) {
            const curEl = children[i]
            /**
             * @type {ElementPosition}
             */
            let elementPosition = {
                element: curEl,
                type: null,
                attributeIndex: 0,
                stringIndex: 0,
                stringLength: searchStr.length
            }

            if (type.tag) {
                if (curEl.tagName === searchStr) {
                    elementPosition.type = 'tag'
                    results.push(elementPosition)
                    continue
                }
            }

            if (type.textContent) {
                if (curEl.children.length === 0 && curEl.textContent === searchStr) {
                    elementPosition.type = 'textContent'
                    results.push(elementPosition)
                    continue
                }
            }

            if (type.attributeKey || type.attributeValue) {
                let attributes = manager.getElementAttributes(curEl)
                let attributeIndex = 0

                for (let key in attributes) {
                    if (type.attributeKey) {
                        if (key === searchStr) {
                            elementPosition.attributeIndex = attributeIndex
                            elementPosition.type = 'attributeKey'
                            results.push(elementPosition)
                            continue
                        }
                    }

                    if (type.attributeValue) {
                        if (attributes[key] === searchStr) {
                            elementPosition.attributeIndex = attributeIndex
                            elementPosition.type = 'attributeValue'
                            results.push(elementPosition)
                            continue
                        }
                    }

                    attributeIndex++
                }
            }

            if (type.handle) {
                elementPosition = type.handle(curEl)
                if (elementPosition) {
                    results.push(elementPosition)
                    continue
                }
            }
        }

        return results
    }

    /**
     * @public
     * @param {{key: string, value: *}[]} objectInfoArray
     * @return {HTMLUListElement}
     */
    manager.arrayInputter = function (objectInfoArray) {
        var arr = objectInfoArray
        var ul = document.createElement('ul')

        for (var i = 0; i < arr.length; i++) {
            let objectInfo = arr[i]

            let li = document.createElement('li')

            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('placeholder', objectInfo.key)
            input.value = objectInfo.value

            li.appendChild(input)

            ul.appendChild(li)
        }

        return ul
    }

    /**
     * @public
     * @param {Object<string, *>} obj
     * @return {HTMLUListElement}
     */
    manager.nestedInputter = function (obj) {
        /*

        Data:
        key: value

        Layout:
        <ul>
          <li><span>[NAME]</span><span>[INPUT/recursive]</span>
          ...
        </ul>
        */

        var ul = document.createElement('ul')

        for (const key in obj) {
            const li = document.createElement('li')

            // name
            let span = document.createElement('span')
            span.textContent = key
            li.appendChild(span)

            // Value
            span = document.createElement('span')

            if (BaseObjectHelper.isObject(obj[key])) { // recursive
                span.appendChild(manager.nestedInputter(obj[key]))
            } else { // input
                const input = document.createElement('input')
                input.setAttribute('type', 'text')
                input.value = obj[key]

                span.appendChild(input)
            }

            ul.appendChild(li)
        }

        return ul
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @return {Node[]} Text node
     */
    manager.textNodesUnder = function (el) {
        var n
        var a = []
        var walk = document.createTreeWalker(el, window.NodeFilter.SHOW_TEXT, null, false)
        while ((n = walk.nextNode())) a.push(n)
        return a
    }

    /**
     * @public
     * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors
     * @param {string[]} selectors
     * @param {HTMLElement} baseElement
     * @return {HTMLElement[]}
     */
    manager.getElementsBySelectors = function (selectors, baseElement = null) {
        /**
         * @type {Element[]}
         */
        let elements = []

        if (!baseElement) {
            baseElement = document
        }

        selectors.forEach(selector => {
            const matchedElements = [...Array.from(baseElement.querySelectorAll(selector))]
            elements = elements.concat(matchedElements)
        })

        return elements
    }

    /**
     * @public
     * @param {string[]} selectors
     * @param {HTMLElement|undefined} baseElement
     */
    manager.getElementsMappedToSelectors = function (selectors, baseElement = undefined) {
        /**
         * @type {Object<string, HTMLElement[]>}
         */
        const selectorMap = {}

        if (!baseElement) {
            baseElement = document
        }

        selectors.forEach(selector => {
            let matchedElements = baseElement.querySelectorAll(selector)
            selectorMap[selector] = [...Array.from(matchedElements)]
        })

        return selectorMap
    }

    /**
     * @public
     * @return {Element[]}
     */
    manager.getAllElements = function () {
        return [...Array.from(document.body.getElementsByTagName('*'))]
    }

    /**
     * @public
     * @param {HTMLElement} el
     * @return {Element[]}
     */
    manager.getAllChildren = function (el) {
        return [...Array.from(el.getElementsByTagName('*'))]
    }

    /**
     * @public
     * @param {string} attr
     * @return {HTMLElement[]}
     */
    manager.getElementsWithAttribute = function (attr) {
        var elements = manager.getAllElements()
        var filtered = []
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].hasAttribute(attr)) {
                filtered.push(elements[i])
            }
        }

        return filtered
    }

    /**
     * @public
     * @param {HTMLElement} el
     */
    manager.getElementAttributes = function (el) {
        /**
         * @type {Object<string, string>}
         */
        var attr = {}
        var nodeMap = el.attributes
        for (var i = 0; i < nodeMap.length; i++) {
            attr[nodeMap[i].nodeName] = nodeMap[i].nodeValue || ''
        }

        return attr
    }

    /**
     * @public
     * @param {string} attr
     * @param {string} value
     * @return {string}
     */
    manager.getAttributeSelector = function (attr, value = '') {
        var selector = ''
        selector += '[' + attr
        if (Utility.exists(value)) {
            selector += '=' + value
        }
        selector += ']'

        return selector
    }

    /**
     * @public
     * @param {string} attr
     * @param {string} value
     * @return {NodeListOf<Element>}
     */
    manager.getElementsByAttribute = function (attr, value) {
        return document.querySelectorAll(manager.getAttributeSelector(attr, value))
    }

    /**
     * @public
     * @param {Node} el
     * @param {string} attr
     * @return {string[]}
     */
    manager.getNestedAttributeListFromElement = function (el, attr) {
        if (!el) {
            el = document
        }

        var elements = manager.getElementsBySelectors([manager.getAttributeSelector(attr)], el)
        return elements.map(function (val) {
            return val.getAttribute(attr) || ''
        }).filter(e => !e)
    }

    /**
     * Sets as editable or non-editable.
     * Adds/removes onChange event depending on edit mode.
     * @param {HTMLElement} el
     * @param {function():void} onChange
     * @param {Boolean} bool
     * @see https://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable
     */
    manager.setElementAsEditable = function (el, onChange, bool) {
        // Ignore no change
        if (el.contentEditable === bool) {
            return
        }
        el.contentEditable = bool // TODO: Boolean string?
        if (bool) {
            el.addEventListener('input', onChange)
            // el.addEventListener("DOMNodeInserted", onChange, false)
            // el.addEventListener("DOMNodeRemoved", onChange, false)
            // el.addEventListener("DOMCharacterDataModified", onChange, false) // Use this if input fails.
        } else {
            el.removeEventListener('input', onChange)
        }
    }

    /**
     * @param {string} attr
     * @param {boolean} bool
     */
    manager.setEditMode = function (attr, bool) {
        var elements = manager.getElementsWithAttribute(attr)
        var element

        for (var i = 0; i < elements.length; i++) {
            element = elements[i]

            // Set
            if (bool) {
                element.contentEditable = ''
            } else {
                element.removeAttribute('contentEditable')
            }
        }
    }

    /**
     * @public
     * @param {HTMLElement} el
     */
    manager.centerFixElement = function (el) {
        var s = el.style
        s.zIndex = String(Number.MAX_SAFE_INTEGER)
        s.position = 'fixed'
        s.top = '50%'
        s.left = '50%'
        s.transform = '(-50% -50%)'
    }

    /**
     * @public
     * @param {string} html
     */
    manager.convertTableHtmlToArray = function (html) {
        var element = document.createElement('div') // Wrapper
        element.innerHTML = html
        var table = element.getElementsByTagName('table')[0]
        var arr = manager.convertTableElementToArray(table)

        return arr
    }

    /**
     * @public
     * @param {HTMLTableElement} table
     */
    manager.convertTableElementToArray = function (table) {
        var rows = table.getElementsByTagName('tr')
        return manager.convertTableRowElementsToArray(Array.from(rows))
    }

    /**
     * @public
     * @param {HTMLTableRowElement[]} rows
     */
    manager.convertTableRowElementsToArray = function (rows) {
        /**
         * @type {string[][]}
         */
        const arr = []

        for (let i = 0; i < rows.length; i++) {
            // Expects children with text

            arr[i] = []

            const cells = rows[i].children
            for (let j = 0; j < cells.length; j++) {
                arr[i][j] = cells[j].innerHTML
            }
        }

        return arr
    }

    /**
     * @public
     * @param {Array<string[]>} arr
     * @return {HTMLTableElement}
     */
    manager.convertArrToTableElement = function (arr) {
        var i, j

        var table = document.createElement('table')
        var tr, td

        for (i = 0; i < arr.length; i++) {
            tr = document.createElement('tr')
            for (j = 0; j < arr[i].length; j++) {
                td = document.createElement('td')
                td.innerHTML = arr[i][j]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }

        return table
    }

    /**
     * Makes setting element info chainable.
     * TODO: Import native types and add to each below.
     * @public
     * @param {HTMLElement} el
     * @return {Object} chainer with functions represeting properties/functions of element all returning chainer
     */
    manager.elementChainer = function (el) {
        const chainer = {
            element: el,
            addEventListener: (event, handle, other) => {
                el.addEventListener(event, handle, other)
                return chainer
            },
            appendChild: (child) => {
                el.appendChild(child)
                return chainer
            },
            innerHTML: (html) => {
                el.innerHTML = html
                return chainer
            },
            removeAttribute: (name) => {
                el.removeAttribute(name)
                return chainer
            },
            removeChild: (child) => {
                el.removeChild(child)
                return chainer
            },
            removeEventListener: (event, handle) => {
                el.removeEventListener(event, handle)
                return chainer
            },
            replaceChild: (newChild, oldChild) => {
                el.replaceChild(newChild, oldChild)
                return chainer
            },
            setAttribute: (name, val) => {
                el.setAttribute(name, val)
                return chainer
            },
            style: (key, val) => {
                el.style[key] = val
                return chainer
            },
            textContent: (str) => {
                el.textContent = str
                return chainer
            },
            title: (str) => {
                el.title = str
                return chainer
            }
        }

        return chainer
    }

    return manager
}

if (typeof module !== 'undefined') {
    module.exports = DomHelper
}