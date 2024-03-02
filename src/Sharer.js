const SHARE_SETTINGS = {

    // Visual
    barcode: null,
    ar_code: null,
    url_recognizer: null,
    data_recognizer: null,

    // Audio
    audio_data: null,

    // Wireless
    nfc: null,
    bluetooth: null,
    wifi: null,

    // Account
    facebook: null,
    skype: null,
    line: null,

    // Other
    infrared: null
}

/**
 * Data sharing handling.
 */
export default class Sharer {
    /**
     * @param {import("./types/ts").SharerSettings} settings
     */
    constructor(settings) {
        /**
         * @type {Record<string, (Partial<import("./types/ts").ShareMethod>)|null>}
         */
        this.sharer_settings = SHARE_SETTINGS
        /**
         * @type {Object<string, import("./types/ts").ShareMethod>}
         */
         this.share_methods = {}
         this.setup(settings)
    }

    /**
     * @param {import("./types/ts").SharerSettings} settings
     */
    // eslint-disable-next-line no-unused-vars
    setup (settings) {
        // Settings
        //

        this.setupShareMethods()
    }

    setupShareMethods () {
        for (let key in this.sharer_settings) {
            this.setupShareMethod(key, this.sharer_settings[key])
        }
    }

    /**
     * @param {string} key
     * @param {*} data
     */
    setupShareMethod (key, data) {
        this.share_methods[key] = this.ShareMethod(data)
    }

    /**
     * @param {keyof SHARE_SETTINGS} key
     */
    getShareMethod (key) {
        const methods = this.getShareMethods()
        return methods[key]
    }

    getShareMethods () {
        const methods = this.share_methods
        return methods
    }

    getTypes () {
        const types = {
            visual: {},
            audio: {},
            wireless: {},
            account: {},
            other: {}
        }

        return types
    }

    /**
     * @param {HTMLElement} el
     */
    setShareElement (el) {
        el.addEventListener('click', this.handleShareClick)
    }

    /**
     * @param {Event} ev
     */
    // eslint-disable-next-line no-unused-vars
    handleShareClick (ev) {
        this.showGroupedData()
    }

    /**
     * @return {HTMLElement}
     */
    getNewWindow () {
        const windowEl = document.createElement('div')

        // Style
        const style = windowEl.style
        style.position = 'fixed'
        style.zIndex = '99999'
        style.width = '100%'
        style.height = '100%'
        style.top = '0'
        style.left = '0'
        style.padding = '10px'
        style.backgroundColor = 'lightGray'
        style.color = 'black'

        return windowEl
    }

    /**
     * @return {HTMLElement}
     */
    getNewButton () {
        const buttonEl = document.createElement('div')

        // Style
        const style = buttonEl.style
        style.border = '1px solid gray'
        style.borderRadius = '3px'
        style.margin = '10px'
        style.padding = '5px'
        style.float = 'left'
        style.clear = 'both'
        style.backgroundPosition = 'center'
        style.backgroundRepeat = 'no-repeat'
        style.backgroundSize = 'contain'

        return buttonEl
    }

    /**
     * @param {HTMLElement} el
     */
    showWindow (el) {
        el.style.display = 'block'
        el.style.visibility = 'visibile'
        if (!el.parentElement) {
            const pEl = document.body
            pEl.appendChild(el)
        }
    }

    /**
     * @param {HTMLElement} el
     */
    hideWindow (el) {
        el.style.display = 'none'
        el.style.visibility = 'hidden'
        if (el.parentElement) {
            const pEl = el.parentElement
            pEl.removeChild(el)
        }
    }

    showGroupedData () {
        const gData = this.getGroupedData()
        const windowEl = this.getNewWindow()

        for (let key in gData) {
            const item = gData[key]
            const buttonEl = this.getNewButton()

            // Name
            buttonEl.textContent = item.name

            // Description
            buttonEl.setAttribute('title', item.description)

            // Image icon
            if (item.image_src) {
                buttonEl.style.backgroundImage = 'url('
                ' + item.image_src + '
                ')'
            }

            // Listener
            const handle = /** @type {any} */ (item.handle)
            if (handle) {
                buttonEl.addEventListener('click', handle)
            }

            windowEl.appendChild(buttonEl)
        }

        this.showWindow(windowEl)
    }

    getGroupedData () {
        const types = this.getTypes()
        /**
         * @type {Object<string, import("./types/ts").GroupedDataItem>}
         */
         const gData = {}

        for (let key in types) {
            const item = this.GroupedDataItem()
            item.name = key
            gData[key] = item
        }

        return gData
    }

    /**
     * @param {Partial<import("./types/ts").GroupedDataItem>} options
     * @return {import("./types/ts").GroupedDataItem}
     */
    GroupedDataItem (options = {}) {
        return Object.assign({
            name: '',
            description: '',
            image_src: '',
            image: null,
            handle: null
        }, options)
    }

    /**
     * @param {string} type
     */
    getShareMethodsByType (type) {
        const methods = this.getShareMethodsByAttr('type', type)
        return methods
    }

    /**
     * @param {string} attr
     * @param {*} value
     */
    getShareMethodsByAttr (attr, value) {
        const methods = this.getShareMethods()
        /**
         * @type {Partial<typeof methods>}
         */
        const fMethods = {}
        for (let key in methods) {
            const k = /** @type {keyof methods} */ (key)
            const method = methods[k]

            if (method[/** @type {keyof method} */ (attr)] === value) {
                fMethods[key] = method
            }
        }

        return fMethods
    }

    /**
     * @param {Partial<import("./types/ts").ShareMethod>} options
     * @return {import("./types/ts").ShareMethod}
     */
    ShareMethod (options = {}) {
        return Object.assign({
            type: 'visual',
            // Settings
            //
            share: function () { }
        }, options)
    }
}
