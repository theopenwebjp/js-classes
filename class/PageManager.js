/**
 * @typedef {object<string, function|null|undefined>} EventListenersMap
 */

/**
 * Page loading class.
 * Functions:
 * 1. Load dynamic page area.
 * 2. Load based on url param.
 * 3. Create menu based on pages info.
 */
var PageManager = function(settings) {

    var manager = {}
    manager.settings = {
        param: 'page',
        defaultKey: '',
        /**
         * @type {EventListenersMap}
         */
        events: {
            pagecomplete: null,
            getpage: null
        },
        /**
         * @type {HTMLElement|null}
         */
        parent: null
    }

    /**
     * @param {object} settings
     */
    manager.setup = function(settings) {
        if (!window.uriActionHandler) { throw Error('Requires uriActionHandler') }
        if (!window.setUriParam) { throw Error('Requires setUriParam') }

        if (settings) {
            for (var key in settings) {
                manager.settings[key] = settings[key]
            }
        }
    }

    /**
     * @return {string}
     */
    manager.getCurrentPageKey = function() {
        var param = manager.settings.param
        var defaultKey = manager.settings.defaultKey

        var actions = {}
        actions[param] = function(val) { return val }

        var results = uriActionHandler(window.location.href, actions)
        var key = results[param]

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
    manager.setupCurrentPage = function(parent, settings) {
        var key = manager.getCurrentPageKey()
        if (key) {
            manager.setupPage(parent, key, settings)
        }
    }

    /**
     * @param {object} pages
     * @return {HTMLElement}
     */
    manager.getMenu = function(pages) {
        // Requires key for url. Consider adding language handling.
        var nav = document.createElement('nav')
        var ul = document.createElement('ul')
        var li, a
        for (var key in pages) {
            li = document.createElement('li')

            a = document.createElement('a')
            a.textContent = key
            a.setAttribute('href', setUriParam(window.location.href, 'page', key)) // TODO: Needs fix. See dependency checks at top. Was here: https://github.com/goldingdamien/js-functions/blob/8b88837bc275013c749af205f15b457fa1f4abdb/docs/file/src/dependent-functions.js.html

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
    manager.handleEvent = function(name, args) {
        var handle = manager.settings.events[name]
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
    manager.setupPage = function(parent, key, settings) {
        manager.handleEvent('getpage', [key, settings, function(args) {
            manager.handleEvent('pagecomplete', [args, parent])
        }])
    }

    manager.setup(settings)

    return manager
}