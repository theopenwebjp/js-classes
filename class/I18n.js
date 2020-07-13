/**
 * @typedef {Object} TextManagerSettings 
 * @property {boolean} auto
 * @property {string} languageParam
 * @property {string} defaultLanguageParam
 * @property {string} defaultLanguage
 * @property {string} language
 * @property {Object<string, Object<string, string>>} languages
 * @property {string} languageFormat
 * @property {string} characterSet
 */

/**
 * Text language handling class.
 * language/defaultLanguage:
 * Any string allowed, but using ISO standard preferred.
 * http://www-01.sil.org/iso639-3/codes.asp // same as wordpress and newer than many others.
 * Old: http://www.loc.gov/standards/iso639-2/php/English_list.php
 * Name deprecated. Use I18n class instead.
 * Similar libary exists: https://github.com/i18next/i18next
 * Should use similar library and unite functions over time. However some functions may be unique here.
 * @param {TextManagerSettings} settings
 * @returns
 */
var TextManager = function (settings) {
  var manager = {}

  /**
   * @param {Partial<TextManagerSettings>} options
   * @return {TextManagerSettings}
   */
  manager.Settings = function (options = {}) {
    return Object.assign({
      auto: true,
      languageParam: 'language',
      defaultLanguageParam: 'default-language',
      defaultLanguage: '',
      language: '',
      languages: {
        // Language
      },
      languageFormat: 'iso639-3',
      characterSet: 'standard'
    }, options)
  }

  /**
   * @type {TextManagerSettings}
   */
  manager.settings = manager.Settings()

  /**
   * @return {object}
   */
  manager.Language = function () {
    return {
      // key value pairs
    }
  }

  manager.help = function () {
    window.alert('Language codes use: ' + 'iso639-3')
  }

  /**
   * @param {Partial<TextManagerSettings>} options
   */
  manager.setup = function (options) {
    manager.settings = manager.Settings(options)

    // Default language
    if (manager.settings.auto) {
      manager.setLanguageFromEnvironment()
    }

    // Check
    if (!manager.check()) {
      throw Error('Check failed. Please check log.')
    }
  }

  /**
   * Setup checks
   * @return {Boolean} Whether check failed or not
   */
  manager.check = function () {
    /*
    Should allow languageFormat + character sets
    */

    if (manager.settings.languageFormat === 'iso639-3') {
      // Basic check for now to avoid likely bugs.
      var l = manager.settings.languages
      if (l['en'] || l['jp'] || l['english'] || l['japanese']) {
        console.error(
          'Invalid language format. Check https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes'
        )
        return false
      }
    }

    if (manager.settings.characterSet === 'standard') {
      // Allow any. Should use lowercase.
      // Examples: https://en.wikipedia.org/wiki/List_of_writing_systems
    }

    return true
  }

  /**
   * Get current language name
   * @return {String}
   */
  manager.getLanguage = function () {
    return manager.settings.language
  }

  /**
   * Set current language
   * @param {String} language
   * @return {Boolean} Whether was able to set or not.
   */
  manager.setLanguage = function (language) {
    if (language && manager.settings.languages[language]) {
      manager.settings.language = language
      return true
    } else {
      return false
    }
  }

  /**
   * Get default language name
   * @return {String}
   */
  manager.getDefaultLanguage = function () {
    return manager.settings.defaultLanguage
  }

  /**
   * Set default language
   * @param {String} language
   * @return {Boolean} Whether was able to set or not.
   */
  manager.setDefaultLanguage = function (language) {
    if (language && manager.settings.languages[language]) {
      manager.settings.defaultLanguage = language
      return true
    } else {
      return false
    }
  }

  manager.getCurrentLanguageData = function () {
    return manager.getCommonLanguageData('language')
  }

  manager.getDefaultLanguageData = function () {
    return manager.getCommonLanguageData('defaultLanguage')
  }

  /**
   * @param {string} key
   */
  manager.getCommonLanguageData = function (key) {
    var language, data

    language = manager.settings[key]
    data = manager.settings.languages[language]
    if (data) {
      return data
    }

    // FAILED
    return null
  }

  /**
   * @param {string} key
   * @return {string}
   */
  manager.getMessage = function (key) {
    var data

    // Normal
    data = manager.getCurrentLanguageData()
    if (data && data[key]) {
      return data[key]
    }

    // Default
    data = manager.getDefaultLanguageData()
    if (data && data[key]) {
      return data[key]
    }

    // None
    return ''
  }

  // Alias
  manager.m = manager.getMessage

  /**
   * @param {string[]} keys
   */
  manager.getMessageObject = function (keys) {
    /**
     * @type {Object<string, *>}
     */
    const obj = {}
    keys.forEach(key => {
      obj[key] = manager.getMessage(key)
    })

    return obj
  }

  /**
   * @param {string[]} keys
   * @return {string[]}
   */
  manager.getMessageArray = function (keys) {
    return keys.map(key => {
      return manager.getMessage(key)
    })
  }

  /**
   * @param {string} key
   * @param {string} val
   * @return {boolean}
   */
  manager.setMessage = function (key, val) {
    var data = manager.getCurrentLanguageData()
    if (data) {
      data[key] = val
      return true
    }

    // Nothing changed
    return false
  }

  /**
   * @return {string[]}
   */
  manager.getAvailableLanguages = function () {
    var languages = manager.settings.languages
    return Object.keys(languages)
  }

  manager.setLanguageFromEnvironment = function () {
    if (!manager.setLanguageFromUrlParam().current) {
      manager.setLanguageFromBrowserLanguage()
    }
  }

  manager.setLanguageFromBrowserLanguage = function () {
    var l = navigator.language
    var key = l.split('-')[0]
    manager.setLanguage(key)
  }

  /**
   * @param {Partial<{current: string, default: string}>} keys GET keys to be used {current, default}
   * @return {Object} Implemented languages by key {current, default}
   */
  manager.setLanguageFromUrlParam = function (keys = {}) {
    // Default keys
    const getKeys = {
      current: keys.current || manager.settings.languageParam,
      default: keys.default || manager.settings.defaultLanguageParam
    }

    const url = window.location.href

    const getValues = {
      current: (new URL(url)).searchParams.get(getKeys.current),
      default: (new URL(url)).searchParams.get(getKeys.default)
    }

    return {
      current: getValues.current ? manager.setLanguage(getValues.current) : false,
      default: getValues.default ? manager.setDefaultLanguage(getValues.default) : false
    }
  }

  manager.setup(settings)

  return manager
}

if (typeof window === 'object') {
  window.I18n = TextManager
  window.TextManager = TextManager
}
if (typeof module !== 'undefined') {
  module.exports = TextManager
}
