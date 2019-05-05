// Loop files in ./class, includes each file as [Camel case]: require('./class/CanvasManager).
const classes = {
  CanvasManager: require('./class/CanvasManager'),
  ClassManager: require('./class/ClassManager'),
  DomHelper: require('./class/DomHelper'),
  DrawableCanvas: require('./class/DrawableCanvas'),
  Drawer: require('./class/Drawer'),
  FormatConverter: require('./class/FormatConverter'),
  FormManager: require('./class/FormManager'),
  FunctionWrapper: require('./class/FunctionWrapper'),
  ImageEditor: require('./class/ImageEditor'),
  ImagePrompter: require('./class/ImagePrompter'),
  InputCopier: require('./class/InputCopier'),
  I18n: require('./class/I18n'),
  Log: require('./class/Log'),
  PageManager: require('./class/PageManager'),
  PersistentStateManager: require('./class/PersistentStateManager'),
  Sharer: require('./class/Sharer'),
  StandardUnitHelper: require('./class/StandardUnitHelper'),
  StreamManager: require('./class/StreamManager'),
  StreamHelper: require('./class/StreamHelper'),
  TextManager: require('./class/TextManager'),
  TrackHelper: require('./class/TrackHelper'),
  TrackManager: require('./class/TrackManager')
}

module.exports = classes
