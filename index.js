// Exported
import CanvasChangeChecker from './class/CanvasChangeChecker';
import CanvasHelper from './class/CanvasHelper';
import CanvasManager from './class/CanvasManager';
import CanvasRenderer from './class/CanvasRenderer';
import DomHelper from './class/DomHelper';
import FormManager from './class/FormManager';
import FunctionWrapper from './class/FunctionWrapper';
import InputCopier from './class/InputCopier';
import I18n from './class/I18n';
import PageManager from './class/PageManager';
import PersistentStateManager from './class/PersistentStateManager';
import Sharer from './class/Sharer';
import StandardUnitHelper from './class/StandardUnitHelper';
import StreamManager from './class/StreamManager';
import StreamHelper from './class/StreamHelper';
import TrackHelper from './class/TrackHelper';
import TrackManager from './class/TrackManager';

// Other
const DrawableCanvas = removed('./class/DrawableCanvas')
const Drawer = removed('./class/Drawer')
const FormatConverter = removed('Removed due to becoming redundant.')
const ImageEditor = removed('Removed due to better library elsewhere. Use the following or other library: https://github.com/fabricjs/fabric.js/')
const ImagePrompter = removed('Removed due to becoming too large for this library')
const Log = removed('./class/Log')
const TextManager = deprecated(import('./class/I18n'), 'Use I18n instead of TextManager')

export {
    CanvasChangeChecker, CanvasHelper, CanvasManager, CanvasRenderer, DomHelper,
    FormManager, FunctionWrapper,
    InputCopier, I18n,
    PageManager, PersistentStateManager, Sharer, StandardUnitHelper, StreamManager, StreamHelper,
    TrackHelper, TrackManager,
    // 
    DrawableCanvas, Drawer, FormatConverter, 
    ImageEditor,ImagePrompter,
    Log,
    TextManager,
};

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
    variable = String(variable).substring(0, 100) // Limit size for now.
    console.log(`Deprecated: ${variable}: ${info}`)
    return variable
}
