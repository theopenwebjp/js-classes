// Loop files in ./class, includes each file as [Camel case]: require('./class/CanvasManager).
const classes = {
    CanvasChangeChecker: import('./class/CanvasChangeChecker'),
    CanvasHelper: import('./class/CanvasHelper'),
    CanvasManager: import('./class/CanvasManager'),
    CanvasRenderer: import('./class/CanvasRenderer'),
    DomHelper: import('./class/DomHelper'),
    DrawableCanvas: removed('./class/DrawableCanvas'),
    Drawer: removed('./class/Drawer'),
    FormatConverter: removed('Removed due to becoming redundant.'),
    FormManager: import('./class/FormManager'),
    FunctionWrapper: import('./class/FunctionWrapper'),
    ImageEditor: removed('Removed due to better library elsewhere. Use the following or other library: https://github.com/fabricjs/fabric.js/'),
    ImagePrompter: removed('Removed due to becoming too large for this library'),
    InputCopier: import('./class/InputCopier'),
    I18n: import('./class/I18n'),
    Log: removed('./class/Log'),
    PageManager: import('./class/PageManager'),
    PersistentStateManager: import('./class/PersistentStateManager'),
    Sharer: import('./class/Sharer'),
    StandardUnitHelper: import('./class/StandardUnitHelper'),
    StreamManager: import('./class/StreamManager'),
    StreamHelper: import('./class/StreamHelper'),
    TextManager: deprecated(import('./class/I18n'), 'Use I18n instead of TextManager'),
    TrackHelper: import('./class/TrackHelper'),
    TrackManager: import('./class/TrackManager')
}

export default classes

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
