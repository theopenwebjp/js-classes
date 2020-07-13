// Loop files in ./class, includes each file as [Camel case]: require('./class/CanvasManager).
const classes = {
    CanvasManager: require('./class/CanvasManager'),
    ClassManager: require('./class/ClassManager'),
    DomHelper: require('./class/DomHelper'),
    DrawableCanvas: require('./class/DrawableCanvas'),
    Drawer: require('./class/Drawer'),
    FormatConverter: removed('Removed due to becoming redundant.'),
    FormManager: require('./class/FormManager'),
    FunctionWrapper: require('./class/FunctionWrapper'),
    ImageEditor: removed('Removed due to better library elsewhere. Use the following or other library: https://github.com/fabricjs/fabric.js/'),
    ImagePrompter: removed('Removed due to becoming too large for this library'),
    InputCopier: require('./class/InputCopier'),
    I18n: require('./class/I18n'),
    Log: require('./class/Log'),
    PageManager: require('./class/PageManager'),
    PersistentStateManager: require('./class/PersistentStateManager'),
    Sharer: require('./class/Sharer'),
    StandardUnitHelper: require('./class/StandardUnitHelper'),
    StreamManager: require('./class/StreamManager'),
    StreamHelper: require('./class/StreamHelper'),
    TextManager: deprecated(require('./class/I18n'), 'Use I18n instead of TextManager'),
    TrackHelper: require('./class/TrackHelper'),
    TrackManager: require('./class/TrackManager')
}

module.exports = classes

/**
 * TODO: Do the same as deprecated TODO.
 * @param {String} str
 */
function removed(str) {
    return {
        'message': str
    }
}

/**
 * TODO: This is very useful. Should be able to pass in any variable and have it include deprecation info and logs to the end user.
 * @param {*} variable
 * @param {String} info
 * @return {*} Same variable
 */
function deprecated(variable, info = '') {
    variable = String(variable).substr(0, 100) // Limit size for now.
    console.log(`Deprecated: ${variable}: ${info}`)
    return variable
}