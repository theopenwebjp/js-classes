/*
DO NOT IMPORT FROM THIS FILE UNLESS NEED TO REFERENCE ALL EXPORTS.

This project use ESM exports for tree-shaking.
This makes it possible to manage many exports in this repository without causing the end built code to balloon in size.

Use import('@theopenweb/js-classes/src/[FILE_NAME]') instead.
*/

// CONSOLE HANDLING REQUIRED.
import { polyfillConsole } from '@theopenweb/js-functions/src/polyfills.js'
if (typeof window !== 'undefined') {
    polyfillConsole()
}
console.warn('ONLY USE WHEN ALL EXPORTS ARE DESIRED.')

import CanvasChangeChecker from './CanvasChangeChecker.js';
import CanvasHelper from './CanvasHelper.js';
import CanvasManager from './CanvasManager.js';
import CanvasRenderer from './CanvasRenderer.js';
import FormManager from './FormManager.js';
import FunctionWrapper from './FunctionWrapper.js';
import InputCopier from './InputCopier.js';
import I18n from './I18n.js';
import PageManager from './PageManager.js';
import PersistentStateManager from './PersistentStateManager.js';
import Sharer from './Sharer.js';
import StandardUnitHelper from './StandardUnitHelper.js';
import StreamManager from './StreamManager.js';
import TrackManager from './TrackManager.js';

export {
    CanvasChangeChecker, CanvasHelper, CanvasManager, CanvasRenderer,
    FormManager, FunctionWrapper,
    InputCopier, I18n,
    PageManager, PersistentStateManager, Sharer, StandardUnitHelper, StreamManager,
    TrackManager,
};
