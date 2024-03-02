 export default class PageManager { 

    /**
     * Page loading class.
     * Functions:
     * 1. Load dynamic page area.
     * 2. Load based on url param.
     * 3. Create menu based on pages info.
     * @param {import("./types/ts").PageManagerSettings} settings
     */
    constructor (settings) {
        /**
         * @type {import("./types/ts").PageManagerSettings}
         */
        this.settings = this.PageManagerSettings()
        this.setup(settings)
    }

    /**
     * @param {Partial<import("./types/ts").PageManagerSettings>} options
     */
    PageManagerSettings (options = {}) {
        return Object.assign({
            param: 'page',
            defaultKey: '',
            /**
             * @type {import("./types/ts").EventListenersMap}
             */
            events: {
                pagecomplete: null,
                getpage: null
            },
            /**
             * @type {HTMLElement|null}
             */
            parent: null
        }, options)
    }

    /**
     * @param {Partial<import("./types/ts").PageManagerSettings>} options
     */
    setup (options) {
        this.settings = this.PageManagerSettings(options)
    }

    /**
     * @return {string}
     */
    getCurrentPageKey () {
        const param = this.settings.param
        const defaultKey = this.settings.defaultKey

        /**
         * @type {import("./types/ts").Actions}
         */
        const actions = {}
        actions[param] = function (val) { return val }

        const results = uriActionHandler(window.location.href, actions)
        let key = results[param]

        //Default
        if (!key) {
            key = defaultKey
        }

        return key
    }

    /**
     * @param {*} parent TODO
     * @param {object} settings
     */
    setupCurrentPage (parent, settings) {
        const key = this.getCurrentPageKey()
        if (key) {
            this.setupPage(parent, key, settings)
        }
    }

    /**
     * @param {object} pages
     * @return {HTMLElement}
     */
    getMenu (pages) {
        // Requires key for url. Consider adding language handling.
        const nav = document.createElement('nav')
        const ul = document.createElement('ul')
        let li, a
        for (let key in pages) {
            li = document.createElement('li')

            a = document.createElement('a')
            a.textContent = key
            a.setAttribute('href', setUriParam(window.location.href, 'page', key))

            li.appendChild(a)

            ul.appendChild(li)
        }

        nav.appendChild(ul)

        return nav
    }

    /**
     * @param {string} name
     * @param {*[]} args
     * @return {*}
     */
    handleEvent (name, args) {
        const handle = this.settings.events[name]
        if (handle) {
            return handle.apply(this, args)
        } else {
            return false
        }
    }

    /**
     * @param {*} parent
     * @param {string} key
     * @param {object} settings
     */
    setupPage (parent, key, settings) {
        this.handleEvent('getpage', [key, settings, /** @param {any} args */ (args) => {
            this.handleEvent('pagecomplete', [args, parent])
        }])
    }
}

/**
 * @param {string} url
 * @param {string} key 
 * @param {string} value
 */
function setUriParam(url, key, value) {
    const u = new URL(url)
    u.searchParams.set(key, value)
    return u.toString()
}

/**
 * 
 * @param {string} uri 
 * @param {import("./types/ts").Actions} actions 
 */
function uriActionHandler(uri, actions){
    const u = (new URL(uri))
    
    const results = Object.fromEntries(Object.entries(actions).map(([key, action]) => {
        const queryParamValue = u.searchParams.get(key)
        const val = action(queryParamValue || '')
        return [key, val]
    }))
    
    return results;
  }
