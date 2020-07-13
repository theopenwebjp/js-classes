const constants = {
  LOG_LEVEL: {
    'ERROR': 1,
    'WARN': 2,
    'INFO': 3,
    'DEBUG': 4
  }
}
const LOG_LEVEL = 'DEBUG'

/**
 * Log handling
 * @public
 * @see https://github.com/goldingdamien/log.git
 * @deprecated This has been moved to a separate project. Use see link above instead.
 */
class Log {
  /**
     * Logging by set log level.
     *
     * @param {keyof (constants.LOG_LEVEL)} level Log level(constants.LOG_LEVEL key)
     * @param {Function} h Log function
     * @param {*[]} args Arguments list
     */
  static _log(level, h, args = []) {
    const setLevel = LOG_LEVEL
    const setConstLevel = constants.LOG_LEVEL[setLevel]
    const curLevel = (setConstLevel !== undefined) ? setConstLevel : constants.LOG_LEVEL.DEBUG

    const targetLevel = constants.LOG_LEVEL[level]

    if (curLevel >= targetLevel) {
      args = Array.prototype.slice.call(args)// Arguments List => array
      args = args.map((item) => {
        // JSON stringify => parse formats object in full format.
        if (item instanceof Error) {
          return JSON.parse(JSON.stringify(item))
        } else {
          return item
        }
      })
      h(...args)
    }
  }

  /**
     * catch / error event logging
     * @param {...*} args
     */
  static error(...args) {
    Log._log('ERROR', console.error, args)
  }

  /**
     * Deprecations, etc.
     * @param {...*} args
     */
  static warn(...args) {
    Log._log('WARN', console.warn, args)
  }

  /**
     * Info logging. For important logging.
     * @param {...*} args
     */
  static info(...args) {
    Log._log('INFO', console.info, args)
  }

  /**
     * Debug logging.
     * @param {...*} args
     */
  static debug(...args) {
    Log._log('DEBUG', console.info, args)
  }
}

if (typeof window === 'object') {
  window.Log = Log
}
if (typeof module === 'object') {
  module.exports = Log
}
