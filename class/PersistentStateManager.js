/**
 * Saving class.
 * Handles all possible saving methods in JavaScript.
 */
export default class PersistentStateManager {
    constructor() {
        this.settings = {
            defaultMethod: 'localStorage'
        }
    }

    /**
     * @param {string} method
     * @return {string}
     */
    fixMethod(method = '') {
        if (!method) { method = this.settings.defaultMethod }
        return method
    }

    /**
     * @param {string} key
     * @param {string} method
     * @return {*|boolean}
     */
    get(key, method) {
        method = this.fixMethod(method)

        switch (method) {
            case 'localStorage':
                return window.localStorage.getItem(key)
                // break

            default:
                console.error('Invalid method', method)
                break
        }

        return false
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {string} method
     * @return {boolean}
     */
    set(key, value, method) {
        method = this.fixMethod(method)

        switch (method) {
            case 'localStorage':
                //https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
                window.localStorage.setItem(key, value)
                return true
                // break

            default:
                console.error('Invalid method', method)
                break
        }

        return false
    }
}
