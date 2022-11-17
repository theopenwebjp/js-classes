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
 */
export default class I18n {
  /**
   * @param {TextManagerSettings} settings 
   */
  constructor(settings) {
      
    /**
     * @type {TextManagerSettings}
     */
    this.settings = this.Settings()
    
    // Alias
    this.m = this.getMessage

    this.setup(settings)
  }

  /**
   * @param {Partial<TextManagerSettings>} options
   * @return {TextManagerSettings}
   */
  Settings(options = {}) {
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
   * @return {object}
   */
  Language() {
    return {
      // key value pairs
    }
  }

  help() {
    window.alert('Language codes use: ' + 'iso639-3')
  }

  /**
   * @param {Partial<TextManagerSettings>} options
   */
  setup(options) {
    this.settings = this.Settings(options)

    // Default language
    if (this.settings.auto) {
      this.setLanguageFromEnvironment()
    }

    // Check
    if (!this.check()) {
      throw Error('Check failed. Please check log.')
    }
  }

  /**
   * Setup checks
   * @return {Boolean} Whether check failed or not
   */
  check() {
    /*
    Should allow languageFormat + character sets
    */

    if (this.settings.languageFormat === 'iso639-3') {
      // Basic check for now to avoid likely bugs.
      const l = this.settings.languages
      if (l['en'] || l['jp'] || l['english'] || l['japanese']) {
        console.error(
          'Invalid language format. Check https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes'
        )
        return false
      }
    }

    if (this.settings.characterSet === 'standard') {
      // Allow any. Should use lowercase.
      // Examples: https://en.wikipedia.org/wiki/List_of_writing_systems
    }

    return true
  }

  /**
   * Get current language name
   * @return {String}
   */
  getLanguage() {
    return this.settings.language
  }

  /**
   * Set current language
   * @param {String} language
   * @return {Boolean} Whether was able to set or not.
   */
  setLanguage(language) {
    if (language && this.settings.languages[language]) {
      this.settings.language = language
      return true
    } else {
      return false
    }
  }

  /**
   * Get default language name
   * @return {String}
   */
  getDefaultLanguage() {
    return this.settings.defaultLanguage
  }

  /**
   * Set default language
   * @param {String} language
   * @return {Boolean} Whether was able to set or not.
   */
  setDefaultLanguage(language) {
    if (language && this.settings.languages[language]) {
      this.settings.defaultLanguage = language
      return true
    } else {
      return false
    }
  }

  getCurrentLanguageData() {
    return this.getCommonLanguageData('language')
  }

  getDefaultLanguageData() {
    return this.getCommonLanguageData('defaultLanguage')
  }

  /**
   * @param {'language'|'defaultLanguage'} key
   */
  getCommonLanguageData(key) {
    const language = this.settings[key]
    const data = this.settings.languages[language]
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
  getMessage(key) {
    let data

    // Normal
    data = this.getCurrentLanguageData()
    if (data && data[key]) {
      return data[key]
    }

    // Default
    data = this.getDefaultLanguageData()
    if (data && data[key]) {
      return data[key]
    }

    // None
    return ''
  }

  /**
   * @param {string[]} keys
   */
  getMessageObject(keys) {
    /**
     * @type {Object<string, *>}
     */
    const obj = {}
    keys.forEach(key => {
      obj[key] = this.getMessage(key)
    })

    return obj
  }

  /**
   * @param {string[]} keys
   * @return {string[]}
   */
  getMessageArray(keys) {
    return keys.map(key => {
      return this.getMessage(key)
    })
  }

  /**
   * @param {string} key
   * @param {string} val
   * @return {boolean}
   */
  setMessage(key, val) {
    const data = this.getCurrentLanguageData()
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
  getAvailableLanguages() {
    const languages = this.settings.languages
    return Object.keys(languages)
  }

  setLanguageFromEnvironment() {
    if (!this.setLanguageFromUrlParam().current) {
      this.setLanguageFromBrowserLanguage()
    }
  }

  setLanguageFromBrowserLanguage() {
    const l = navigator.language
    const key = l.split('-')[0]
    this.setLanguage(key)
  }

  /**
   * @param {Partial<{current: string, default: string}>} keys GET keys to be used {current, default}
   * @return Implemented languages by key {current, default}
   */
  setLanguageFromUrlParam(keys = {}) {
    // Default keys
    const getKeys = {
      current: keys.current || this.settings.languageParam,
      default: keys.default || this.settings.defaultLanguageParam
    }

    const url = window.location.href

    const getValues = {
      current: (new URL(url)).searchParams.get(getKeys.current),
      default: (new URL(url)).searchParams.get(getKeys.default)
    }

    return {
      current: getValues.current ? this.setLanguage(getValues.current) : false,
      default: getValues.default ? this.setDefaultLanguage(getValues.default) : false
    }
  }
}
